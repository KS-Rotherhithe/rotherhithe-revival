# n8n on VPS with Nginx (not Caddy)

Use this if you run **Nginx on the VPS host** and **n8n in Docker** on port `5678` (localhost only).

**Website** stays on HostGator. **n8n** runs on the VPS.

---

## Architecture

```
Browser → Nginx (443) → 127.0.0.1:5678 → n8n Docker container
```

---

## 1. DNS

| Type | Name | Value |
|------|------|-------|
| A | `n8n` | `YOUR_VPS_IP` |

---

## 2. Install Nginx + Certbot (on VPS)

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
sudo systemctl enable nginx --now
```

---

## 3. Docker: n8n only (no Caddy)

On the VPS:

```bash
mkdir -p ~/n8n && cd ~/n8n
```

Copy from repo:

- `n8n/docker-compose.nginx.yml` → save as `~/n8n/docker-compose.yml`
- Create `.env` (see below)

**`~/n8n/.env`:**

```env
N8N_HOST=n8n.stmaryrotherhithe.com
N8N_BASIC_AUTH_USER=your-username
N8N_BASIC_AUTH_PASSWORD=choose-a-long-random-password

SUPABASE_URL=https://ocekrbvxaxqblbfkielr.supabase.co
ADMIN_EMAIL=hello@stmaryrotherhithe.com
ADMIN_EMAIL_CC=your@email.com
```

Start n8n:

```bash
docker compose up -d
docker compose ps
```

n8n listens on **127.0.0.1:5678** only (not public) — Nginx handles HTTPS.

---

## 4. Nginx site config

Copy `n8n/nginx-n8n.conf.example` to the server, or create:

```bash
sudo nano /etc/nginx/sites-available/n8n
```

Paste the config from `n8n/nginx-n8n.conf.example` (update `server_name` if needed).

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. HTTPS (Let's Encrypt)

```bash
sudo certbot --nginx -d n8n.stmaryrotherhithe.com
```

Follow prompts. Certbot updates the Nginx config for SSL.

Test renewal:

```bash
sudo certbot renew --dry-run
```

---

## 6. Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

Do **not** expose port `5678` publicly — only Nginx on 80/443.

---

## 7. Google OAuth redirect URI

In Google Cloud Console, add:

```
https://n8n.stmaryrotherhithe.com/rest/oauth2-credential/callback
```

---

## 8. Community Edition — no UI Variables

Add workflow config to `~/n8n/.env` (not n8n UI):

- `SUPABASE_URL`
- `ADMIN_EMAIL`
- `ADMIN_EMAIL_CC`

Workflow uses `$env.SUPABASE_URL` etc. Re-import `n8n/stmary-weekly-pewsheet-publish.json`.

See [n8n-setup.md](n8n-setup.md) for credentials (Drive, Supabase HTTP, Titan SMTP).

---

## 9. Basic auth — two layers (optional)

You can use:

| Layer | Where |
|-------|--------|
| Nginx `auth_basic` | Optional extra lock in Nginx |
| n8n `N8N_BASIC_AUTH_*` | In `.env` (already in compose file) |

One layer is enough for a church admin tool.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 502 Bad Gateway | `docker compose ps` — is n8n running? `curl http://127.0.0.1:5678` on VPS |
| OAuth redirect wrong | `N8N_HOST`, `WEBHOOK_URL`, `N8N_PROTOCOL=https` in `.env`; restart container |
| WebSocket / editor errors | Ensure Nginx has `Upgrade` and `Connection "upgrade"` headers |
| `EAI_AGAIN` on credentials | DNS in docker-compose (`8.8.8.8`) — see [n8n-self-host-vps.md](n8n-self-host-vps.md) |
| Caddy still in compose | Use `docker-compose.nginx.yml` — remove Caddy service |

---

## Restart after changes

```bash
# .env or compose changed
cd ~/n8n && docker compose down && docker compose up -d

# Nginx config changed
sudo nginx -t && sudo systemctl reload nginx
```

---

## Files in repo

| File | Purpose |
|------|---------|
| `n8n/docker-compose.nginx.yml` | n8n only, port 127.0.0.1:5678 |
| `n8n/nginx-n8n.conf.example` | Nginx reverse proxy |
| `n8n/.env.example` | Environment template |
| `n8n/Caddyfile` | **Not used** with Nginx setup |

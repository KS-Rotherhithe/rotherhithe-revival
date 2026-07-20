# Self-host n8n on a cheap VPS (Community Edition)

Move the pew sheet workflow off **paid n8n Cloud** to **free n8n CE** on a small VPS.

**Website stays on HostGator shared hosting.** n8n runs on a separate server.

---

## Cost

| Item | Cost |
|------|------|
| n8n Community Edition | Free |
| VPS (1–2 GB RAM) | ~£4–6/month |
| n8n Cloud subscription | Cancel after migration |

**Suggested providers** (pick one, EU/UK region):

| Provider | Plan | Notes |
|----------|------|-------|
| [Hetzner](https://www.hetzner.com/cloud) | CX22 (~€4/mo) | Good value, EU datacenters |
| [DigitalOcean](https://www.digitalocean.com/) | Basic $6/mo | Simple UI, London region |
| [Oracle Cloud](https://www.oracle.com/cloud/free/) | Free tier | Free but signup can be fiddly |

Minimum: **1 GB RAM** (2 GB recommended).

---

## Overview

```
Google Drive → n8n (VPS) → Supabase → stmaryrotherhithe.com (HostGator)
```

---

## Phase 1 — Create the VPS

1. Sign up with a provider above
2. Create a server:
   - **OS:** Ubuntu 22.04 or 24.04
   - **Region:** London / EU (close to you)
   - **Size:** 1–2 GB RAM
3. Note the **public IP address**
4. SSH in from your Mac:
   ```bash
   ssh root@YOUR_VPS_IP
   ```

---

## Phase 2 — DNS (before HTTPS)

In **HostGator** (or wherever `stmaryrotherhithe.com` DNS lives):

| Type | Name | Value |
|------|------|-------|
| A | `n8n` | `YOUR_VPS_IP` |

Result: `https://n8n.stmaryrotherhithe.com` → your VPS.

Wait 5–30 minutes for DNS to propagate.

---

## Phase 3 — Install Docker on the VPS

```bash
apt update && apt upgrade -y
apt install -y docker.io docker-compose-v2 git
systemctl enable docker --now
```

---

## Phase 4 — Deploy n8n

On the VPS:

```bash
mkdir -p ~/n8n && cd ~/n8n
```

Copy these files from the repo (`n8n/` folder):

- `docker-compose.yml` **or** `docker-compose.nginx.yml` if you use **Nginx** (see [n8n-nginx-vps.md](n8n-nginx-vps.md))
- `Caddyfile` — only if using Caddy (default compose)
- `.env` (from `.env.example` — fill in real values)

**Caddyfile** — replace `{$N8N_HOST}` with your real hostname, e.g.:

```
n8n.stmaryrotherhithe.com {
	reverse_proxy n8n:5678
}
```

**`.env`** example:

```
N8N_HOST=n8n.stmaryrotherhithe.com
N8N_BASIC_AUTH_USER=karyna
N8N_BASIC_AUTH_PASSWORD=choose-a-long-random-password
```

Start:

```bash
docker compose up -d
docker compose ps
```

Open `https://n8n.stmaryrotherhithe.com` — basic auth prompt, then n8n setup wizard (create owner account).

---

## Phase 5 — Google OAuth (required for Drive)

Your Google Drive credential must point at the **new** n8n URL.

1. [Google Cloud Console](https://console.cloud.google.com/) → your OAuth client
2. **Authorized redirect URIs** — add:
   ```
   https://n8n.stmaryrotherhithe.com/rest/oauth2-credential/callback
   ```
3. Remove the old n8n Cloud callback URL when migration is done

In self-hosted n8n: recreate **Google Drive OAuth2** credential and sign in again.

---

## Phase 6 — Import the workflow

Follow [n8n-setup.md](n8n-setup.md):

1. **Workflows → Import** → `n8n/stmary-weekly-pewsheet-publish.json`
2. **Settings → Variables** (n8n Cloud only — skip on Community Edition):
   - On CE: add `SUPABASE_URL`, `ADMIN_EMAIL`, `ADMIN_EMAIL_CC` to VPS `.env` instead
3. **Credentials:**
   - Google Drive OAuth2
   - Supabase HTTP (service role: `apikey` + `Authorization: Bearer …`)
   - Titan SMTP (`smtp.titan.email`, port 465)
4. **Workflow settings:** timezone `Europe/London`
5. **Manual test** — full run Drive → Storage → DB
6. **Activate** workflow (Saturday 11:00)

---

## Phase 7 — Cutover

1. Run one successful **manual test** on self-hosted n8n
2. **Deactivate** workflow on paid n8n Cloud
3. Confirm Saturday run on VPS (or wait and check execution log)
4. **Cancel** n8n Cloud subscription

Keep paid n8n active until one successful self-hosted run completes.

---

## Security checklist

- [ ] HTTPS via Caddy (compose file) **or Nginx + Certbot** ([n8n-nginx-vps.md](n8n-nginx-vps.md))
- [ ] Basic auth on n8n (`N8N_BASIC_AUTH_*` in `.env`)
- [ ] Strong owner password in n8n
- [ ] Firewall: only ports 22, 80, 443 open
  ```bash
  ufw allow OpenSSH
  ufw allow 80
  ufw allow 443
  ufw enable
  ```
- [ ] Supabase **service role** key only in n8n credentials — never in git

---

## Maintenance

| Task | Command (on VPS) |
|------|------------------|
| View logs | `cd ~/n8n && docker compose logs -f n8n` |
| Restart n8n | `docker compose restart n8n` |
| Update n8n | `docker compose pull && docker compose up -d` |
| Backup workflows | Export from UI, or backup volume `n8n_data` |

---

## Community Edition: no UI Variables

**Expected.** Custom Variables are Enterprise-only. On CE:

1. Add to `~/n8n/.env` on the VPS:
   ```
   SUPABASE_URL=https://ocekrbvxaxqblbfkielr.supabase.co
   ADMIN_EMAIL=hello@stmaryrotherhithe.com
   ADMIN_EMAIL_CC=your@email.com
   ```
2. Ensure `docker-compose.yml` passes them into the n8n container (repo version does)
3. Workflow uses `$env.SUPABASE_URL` etc. — re-import latest JSON from repo

---

## Fix DNS errors (`getaddrinfo EAI_AGAIN`)

This means the **n8n container cannot resolve hostnames** (SMTP, Google, Supabase). All credentials fail until fixed.

**On the VPS:**

```bash
# Test from host
ping -c 2 smtp.titan.email

# Test from n8n container
cd ~/n8n
docker compose exec n8n wget -qO- --timeout=5 https://smtp.titan.email 2>&1 | head -1
```

**Fix:** update `docker-compose.yml` with DNS settings (see repo `n8n/docker-compose.yml`), then:

```bash
cd ~/n8n
docker compose down
docker compose up -d
```

Add to n8n service if missing:

```yaml
dns:
  - 8.8.8.8
  - 1.1.1.1
environment:
  - N8N_DISABLE_IPV6=true
  - NODE_OPTIONS=--dns-result-order=ipv4first
```

If host `ping` also fails, fix VPS DNS in `/etc/resolv.conf` or your provider's networking panel.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Google OAuth fails | Redirect URI must match exactly; HTTPS required |
| `access to env vars denied` | `N8N_BLOCK_ENV_ACCESS_IN_NODE=false` + vars in `.env` |
| `getaddrinfo EAI_AGAIN` | DNS fix above — affects SMTP, Google, all credentials |
| Schedule didn't run | Check workflow is **Active**; timezone Europe/London |
| Can't reach n8n | DNS A record; firewall 80/443; `docker compose ps` |
| Email fails | Titan SMTP + third-party access enabled — see [n8n-setup.md](n8n-setup.md) |

---

## What does NOT work

- **HostGator shared hosting** — cannot run n8n (static site only)
- **Same server as website** — not needed; website stays on HostGator

---

## Files in this repo

| File | Purpose |
|------|---------|
| `n8n/docker-compose.yml` | n8n + Caddy on VPS |
| `n8n/docker-compose.nginx.yml` | n8n only (use with host Nginx) |
| `n8n/nginx-n8n.conf.example` | Nginx reverse proxy config |
| `n8n/Caddyfile` | HTTPS reverse proxy (Caddy only) |
| `n8n/.env.example` | VPS environment template |
| `n8n/stmary-weekly-pewsheet-publish.json` | Workflow to import |
| [n8n-setup.md](n8n-setup.md) | Node/credential configuration |

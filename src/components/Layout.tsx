import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Worship", path: "/worship" },
  { label: "Visit", path: "/visit" },
  { label: "History", path: "/history" },
  { label: "Support Us", path: "/support-us" },
  { label: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-lg font-semibold tracking-tight">
            St Mary's Rotherhithe
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  ${location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors
                  ${location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-3">St Mary the Virgin</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                A living parish church on the banks of the Thames — worshipping on this site for over 1,000 years.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold mb-3">Services</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Parish Eucharist — Sundays at 10:00am<br />
                Evening Prayer — Sundays at 6:00pm<br />
                Weekday Eucharist — see schedule
              </p>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold mb-3">Contact</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Saint Marychurch St, London SE16 4HZ<br />
                Phone: 07909 546 659<br />
                <a href="mailto:hello@stmaryrotherhithe.com" className="underline underline-offset-2 hover:opacity-100 transition-opacity">
                  hello@stmaryrotherhithe.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
            © {new Date().getFullYear()} St Mary's Rotherhithe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

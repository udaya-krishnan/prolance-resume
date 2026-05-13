import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "glass shadow-[0_8px_30px_-12px_rgb(67_97_238/0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
            <Zap className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Prolance <span className="text-gradient-brand">Resume</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition hover:text-foreground ${
                isActive(l.to)
                  ? "text-foreground bg-secondary"
                  : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-grid h-10 w-10 place-items-center rounded-xl border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-3 py-3 text-sm font-medium hover:bg-secondary ${
                  isActive(l.to) ? "bg-secondary text-foreground" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full gradient-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
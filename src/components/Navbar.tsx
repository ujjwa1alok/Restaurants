import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#1a1510]/95 backdrop-blur-md border-b border-[var(--gold)]/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-gold text-2xl tracking-[0.25em] font-light">
          <span style={{ color: "var(--gold)" }}>GREEKA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              activeProps={{ className: "nav-link active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-cream"
          style={{ color: "var(--cream)" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0f0d08] border-t border-[var(--gold)]/15">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link text-base"
                style={{ animation: `fade-in 0.4s ease ${i * 80}ms both` }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+919263220097" className="btn-gold mt-4 w-full">
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

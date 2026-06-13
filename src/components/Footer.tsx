import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f0d08] border-t border-[var(--gold)]/15 text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-2xl tracking-[0.25em]" style={{ color: "var(--gold)" }}>GREEKA</div>
          <p className="mt-4 text-sm italic text-[var(--muted-foreground)] font-display text-lg">
            Where Ecstasy Meets Greeko Ambiance
          </p>
          <p className="mt-6 text-sm text-[var(--muted-foreground)] leading-relaxed flex gap-3">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
            <span>4th & 5th Floor, Minu Heights, Kanke Road, Opposite Rock Garden, Gandhi Nagar, Ranchi, Jharkhand 834008</span>
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[var(--gold)] transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About</Link></li>
            <li><Link to="/visit" className="hover:text-[var(--gold)] transition-colors">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Connect</h4>
          <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
            <li className="flex items-center gap-3">
              <Phone size={15} style={{ color: "var(--gold)" }} />
              <a href="tel:+919263220097" className="hover:text-cream">+91 92632 20097</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={15} style={{ color: "var(--gold)" }} />
              <span>Mon – Sun · 11:30 AM – 11:59 PM</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={15} style={{ color: "var(--gold)" }} />
              <a href="https://www.instagram.com/greekaranchi/" target="_blank" rel="noreferrer" className="hover:text-cream">
                @greekaranchi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--gold)]/10 py-6 text-center text-xs text-[var(--muted-foreground)] tracking-wider">
        © 2024 Greeka Kitchen & Bar. All rights reserved.
      </div>
    </footer>
  );
}

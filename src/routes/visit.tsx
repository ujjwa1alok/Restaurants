import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Phone, Instagram, ParkingCircle, CreditCard, Wine, Car, Package } from "lucide-react";
import duskTables from "@/assets/photos/dusk_tables.jpeg";
import nightLights from "@/assets/photos/night_lights.jpeg";
import wings from "@/assets/photos/wings.jpeg";
import pizzaOven from "@/assets/photos/pizza_oven.jpeg";
import sunsetSeating from "@/assets/photos/sunset_seating.jpeg";
import terraceDay from "@/assets/photos/terrace_day.jpeg";
import logo from "@/assets/photos/logo.jpeg";
import liqourStall from "@/assets/photos/liquor_stall.jpeg";
import greekStatue from "@/assets/photos/greek_statue.jpeg";
import dineTable from "@/assets/photos/dine_table.jpeg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us | Greeka Kitchen & Bar Ranchi" },
      { name: "description", content: "Find Greeka at 4th & 5th Floor, Minu Heights, Kanke Road, Opposite Rock Garden, Ranchi. Open 11:30 AM – 11:59 PM daily." },
      { property: "og:title", content: "Visit Greeka Kitchen & Bar" },
      { property: "og:description", content: "4th & 5th Floor, Minu Heights, Kanke Road, Ranchi." },
      { property: "og:image", content: duskTables },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${sunsetSeating})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510] via-[#1a1510]/70 to-[#1a1510]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow mb-5">Visit Us</p>
          <h1 className="text-5xl md:text-7xl text-cream">
            Find Us, <em className="italic" style={{ color: "var(--gold-soft)" }}>Love Us</em>
          </h1>
          <p className="mt-6 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            4th & 5th Floor, Minu Heights, Kanke Road, Opposite Rock Garden, Ranchi.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-background pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin, t: "Where We Are",
              body: <>4th & 5th Floor, Minu Heights, Kanke Road, Opposite Rock Garden, Gandhi Nagar, Ranchi, Jharkhand 834008</>,
              cta: <a href="https://maps.google.com/?q=23.4018194,85.3153378" target="_blank" rel="noreferrer" className="btn-outline mt-6 inline-flex">Get Directions</a>,
            },
            {
              icon: Clock, t: "When We're Open",
              body: <>Monday – Sunday<br /><span className="text-cream">11:30 AM — 11:59 PM</span><br /><span className="text-xs italic mt-2 inline-block">Peak hours on weekends. Advance booking recommended.</span></>,
            },
            {
              icon: Phone, t: "Book Your Table",
              body: <>Call us at<br /><span className="text-cream text-lg">+91 92632 20097</span></>,
              cta: (
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a href="tel:+919263220097" className="btn-gold !py-3 !px-5 text-[11px]">Call Now</a>
                  <a href="https://wa.me/919263220097" target="_blank" rel="noreferrer" className="btn-outline !py-3 !px-5 text-[11px]">WhatsApp</a>
                </div>
              ),
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="h-full p-10 border border-[var(--gold)]/15 bg-[var(--surface)] hover:border-[var(--gold)]/50 transition-colors">
                <c.icon size={28} style={{ color: "var(--gold)" }} strokeWidth={1.3} />
                <h3 className="mt-6 text-2xl text-cream">{c.t}</h3>
                <span className="gold-divider my-5" />
                <div className="text-[var(--muted-foreground)] text-sm leading-relaxed">{c.body}</div>
                {c.cta}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-[var(--surface)]">
        <iframe
          title="Greeka location"
          src="https://www.google.com/maps?q=23.4018194,85.3153378&hl=en&z=16&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block border-0 grayscale-[0.3]"
        />
      </section>

      {/* Amenities */}
      <section className="bg-background py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-5 text-[var(--muted-foreground)] text-sm">
          {[
            { i: ParkingCircle, t: "Parking on premises" },
            { i: CreditCard, t: "Cards & digital payments" },
            { i: Wine, t: "Alcohol served" },
            { i: Car, t: "Drive-through available" },
            { i: Package, t: "Takeaway & home delivery" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-2.5">
              <Icon size={16} style={{ color: "var(--gold)" }} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal><p className="eyebrow mb-4">See You Here Soon</p></Reveal>
          <Reveal delay={80}><h2 className="text-4xl md:text-5xl text-cream">Tag us <em className="italic" style={{ color: "var(--gold-soft)" }}>@greekaranchi</em></h2></Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-12">
            {[nightLights, wings, pizzaOven, duskTables, sunsetSeating, terraceDay].map((p, i) => (
              <a key={i} href="https://www.instagram.com/greekaranchi/" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden group">
                <img src={p} alt="Instagram" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/70 transition-colors flex items-center justify-center">
                  <Instagram size={28} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1a1510]" />
                </div>
              </a>
            ))}
          </div>

          <a href="https://www.instagram.com/greekaranchi/" target="_blank" rel="noreferrer" className="btn-gold mt-12 inline-flex">
            Open Instagram
          </a>
        </div>
      </section>
    </Layout>
  );
}

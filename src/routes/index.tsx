import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ChevronDown, Moon, Music, Globe2, Star, Instagram, Phone, MapPin } from "lucide-react";
import rooftop1 from "@/assets/photos/greek_statue.jpeg";
import nightLights from "@/assets/photos/night_lights.jpeg";
import duskTables from "@/assets/photos/dusk_tables.jpeg";
import sunsetSeating from "@/assets/photos/sunset_seating.jpeg";
import terraceDay from "@/assets/photos/terrace_day.jpeg";
import wings from "@/assets/photos/wings.jpeg";
import bar1 from "@/assets/photos/liquor_stall.jpeg";
import interior1 from "@/assets/photos/dine_table.jpeg";
import pizzaOven from "@/assets/photos/pizza_oven.jpeg";
import murgMalaiKebab from "@/assets/photos/murg_malai_kebab.jpeg";
import falafelPlatter from "@/assets/photos/falafel_platter.jpeg";
import longIslandIcedTea from "@/assets/photos/long_island_iced_tea.jpeg";
import ThaiGreenCurry from "@/assets/photos/Thai_green_curry.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greeka Kitchen & Bar | Rooftop Dining in Ranchi" },
      { name: "description", content: "Six floors above Ranchi — Mediterranean soul, Asian flavours, North Indian heart. Live music, open-air rooftop, 4.0★." },
      { property: "og:title", content: "Greeka Kitchen & Bar | Rooftop Dining in Ranchi" },
      { property: "og:description", content: "Where Ecstasy Meets Greeko Ambiance." },
      { property: "og:image", content: rooftop1 },
      { name: "twitter:image", content: rooftop1 },
    ],
  }),
  component: Home,
});

const dishes = [
  {
    name: "Murg Malai Kebab",
    tag: "North Indian",
    img: murgMalaiKebab,
  },
  {
    name: "Falafel Platter",
    tag: "Mediterranean",
    img: falafelPlatter,
  },
  {
    name: "Long Island Iced Tea",
    tag: "Beverages",
    img: longIslandIcedTea,
  },
  {
    name: "Thai Green Curry",
    tag: "Asian",
    img: ThaiGreenCurry,
  },
];
function Home() {
  <a
  href="https://wa.me/919263220097"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl"
>
  WhatsApp
</a>
  return (
    
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
           backgroundImage: `url(${rooftop1})`,
           backgroundSize: "cover",
           backgroundPosition: "center"
           }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d08]/70 via-transparent to-[#0f0d08]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--gold)]/30 bg-black/30 backdrop-blur-sm mb-6">
            <Star size={14} fill="currentColor" />
            <span className="text-sm text-cream">4.0★ Google Rating • Rooftop Dining</span>
         </div>
           
          <p className="eyebrow mb-6 animate-fade-in">Ranchi's Rooftop Dining Destination</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight animate-fade-in">
            GREEKA,<br />
              <p className="text-[var(--gold-soft)] italic text-3xl md:text-5xl mt-4">
                 Where Ecstasy Meets Greeko Ambiance
             </p>
           
          </h1>
          <p className="mt-8 text-base md:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Six floors above Ranchi, Greeka brings Mediterranean soul, Asian flavours, and North Indian heart to one breathtaking open-air space.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-gold">
             Explore Our Menu
           </Link>

           <Link
              to="/reserve"
              className="btn-outline"
             >
               Reserve Table
           </Link>
         </div>
         <p className="mt-6 text-sm text-cream/70">
           Open Daily • 11:30 AM – 11:59 PM
         </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
          <ChevronDown size={28} style={{ color: "var(--gold)" }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#111] border-y border-[var(--gold)]/20">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 text-center">

       <div>
           <h3 className="text-3xl text-[var(--gold)]">4.0★</h3>
        <p className="text-sm text-cream/70">Google Rating</p>
       </div>

       <div>
        <h3 className="text-3xl text-[var(--gold)]">1487+</h3>
        <p className="text-sm text-cream/70">Reviews</p>
       </div>
   
      <div>
        <h3 className="text-3xl text-[var(--gold)]">6</h3>
        <p className="text-sm text-cream/70">Floors Above Ranchi</p>
      </div>

      <div>
       <h3 className="text-3xl text-[var(--gold)]">11:30 PM</h3>
       <p className="text-sm text-cream/70">Open Till Midnight</p>
      </div>

     </div>
    </section>

      {/* WHY GREEKA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal><p className="eyebrow mb-5">Why Greeka</p></Reveal>
          <Reveal delay={80}>
            <h2 className="text-4xl md:text-6xl text-cream">More Than a Meal</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[var(--muted-foreground)] max-w-xl mx-auto">
              Every detail at Greeka is crafted to make your evening unforgettable.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Moon, t: "Rooftop Ambiance", d: "Open-air dining with twinkling lights and a view of Rock Garden. Perfect for evenings you'll never forget." },
              { icon: Music, t: "Live Music", d: "Let the music set the mood as you dine. Evening performances make every night a special occasion." },
              { icon: Globe2, t: "World on a Plate", d: "From creamy Mediterranean falafels to spiced North Indian kebabs and fiery Chinese — your palate travels the globe." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 120}>
                <div className="h-full p-10 border border-[var(--gold)]/15 bg-[var(--surface)] text-left group hover:border-[var(--gold)]/50
                   hover:-translate-y-2
                  transition-all
                  duration-500 transition-colors">
                  <f.icon size={32} style={{ color: "var(--gold)" }} strokeWidth={1.2} />
                  <h3 className="mt-6 text-2xl text-cream">{f.t}</h3>
                  <span className="gold-divider my-5" />
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 md:py-32 bg-cream text-[#1a1510]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <Reveal><p className="eyebrow mb-4">Chef's Favourites</p></Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl">From Our Kitchen, with Intent</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Link to="/menu" className="text-sm tracking-[0.22em] uppercase font-medium border-b border-[var(--gold)] pb-1 hover:text-[var(--gold)] transition-colors">
                See Full Menu →
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <article className="group cursor-pointer overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden bg-[#1a1510] rounded-xl">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                  <p className="mt-4 text-xs tracking-[0.22em] uppercase" style={{ color: "var(--gold)" }}>{d.tag}</p>
                  <h3 className="mt-1 text-2xl font-display">{d.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE BENTO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><p className="eyebrow mb-4">The Greeka Experience</p></Reveal>
          <Reveal delay={80}>
            <h2 className="text-4xl md:text-5xl text-cream max-w-xl">Some nights are made to be remembered.</h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-6 grid-rows-2 gap-3 md:gap-4 h-[520px] md:h-[640px]">
            {[
              { img: nightLights, cap: "Rooftop Nights", cls: "col-span-6 md:col-span-3 row-span-2" },
              { img: pizzaOven, cap: "Fresh from the Kitchen", cls: "col-span-3 md:col-span-2 row-span-1" },
              { img: terraceDay, cap: "Every Seat, a View", cls: "col-span-3 md:col-span-1 row-span-1" },
              { img: sunsetSeating, cap: "Golden Hour", cls: "col-span-3 md:col-span-1 row-span-1" },
              { img: wings, cap: "Iconic Wings", cls: "col-span-3 md:col-span-2 row-span-1" },
            ].map((b, i) => (
              <div key={i} className={`relative overflow-hidden group ${b.cls}`}>
                <img src={b.img} alt={b.cap} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80" />
                <div className="absolute inset-0 ring-0 ring-[var(--gold)] group-hover:ring-2 transition-all" />
                <p className="absolute bottom-4 left-5 text-cream font-display text-xl translate-y-2 group-hover:translate-y-0 transition-transform" style={{ color: "var(--gold-soft)" }}>
                  {b.cap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal><p className="eyebrow mb-4">Moments at Greeka</p></Reveal>
          <Reveal delay={80}><h2 className="text-4xl md:text-5xl text-cream">@greekaranchi</h2></Reveal>

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
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* RESERVATION BANNER */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${duskTables})` }} />
        <div className="absolute inset-0 bg-[#0f0d08]/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="gold-divider mx-auto mb-8" />
          <Reveal>
            <h2 className="text-4xl md:text-6xl text-cream">
              Your Table is <em className="italic" style={{ color: "var(--gold-soft)" }}>Waiting</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-[var(--muted-foreground)] max-w-xl mx-auto">
              Book in advance for weekends and special occasions. Walk-ins welcome based on availability.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919263220097" className="btn-gold inline-flex items-center gap-2">
                <Phone size={14} /> +91 92632 20097
              </a>
              <a href="https://maps.google.com/?q=23.4018194,85.3153378" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2">
                <MapPin size={14} /> Get Directions
              </a>
            </div>
          </Reveal>
          <span className="gold-divider mx-auto mt-12" />
        </div>
      </section>
    </Layout>
  );
}

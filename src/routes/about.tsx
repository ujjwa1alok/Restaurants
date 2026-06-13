import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import interior1 from "@/assets/photos/dine_table.jpeg";
import nightLights from "@/assets/photos/night_lights.jpeg";
import wings from "@/assets/photos/wings.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Greeka Kitchen & Bar Ranchi" },
      { name: "description", content: "Born from a love for bold flavours and beautiful spaces. The story of Greeka — Ranchi's rooftop dining destination." },
      { property: "og:title", content: "About Greeka Kitchen & Bar" },
      { property: "og:description", content: "Mediterranean warmth meets North Indian soul." },
      { property: "og:image", content: interior1 },
    ],
  }),
  component: About,
});

const cuisines = ["North Indian", "Mediterranean", "Chinese", "Continental", "Italian", "Pasta", "Desserts", "Bar & Cocktails"];

const pillars = [
  { n: "01", t: "Craft", d: "Every dish is prepared with intention. From our tandoor-kissed kebabs to our hand-rolled falafels, quality is non-negotiable." },
  { n: "02", t: "Atmosphere", d: "We believe that ambiance is the first course. The rooftop sky, the ambient lights, the live music — they are as important as what's on the plate." },
  { n: "03", t: "Warmth", d: "Great hospitality is invisible. Our team is trained to anticipate, not just serve — ensuring every guest leaves happier than they arrived." },
];

function About() {
  return (
    <Layout>
      {/* Hero split */}
      <section className="pt-20 grid lg:grid-cols-[55%_45%]">
        <div className="relative h-[60vh] lg:h-[90vh] overflow-hidden">
          <img src={interior1} alt="Greeka interior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1510]/30" />
        </div>
        <div className="bg-cream text-[#1a1510] flex items-center px-6 md:px-16 py-20">
          <div>
            <Reveal><p className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Our Story</p></Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Born from a love for <em className="italic" style={{ color: "var(--gold)" }}>bold flavours</em> and beautiful spaces.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-base leading-[1.8] text-[#3d352a]">
                Greeka was born with a simple, ambitious idea — to create a dining experience that Ranchi had never seen before. Perched on the 4th and 5th floors of Minu Heights, overlooking the iconic Rock Garden, Greeka is more than a restaurant.
              </p>
              <p className="mt-5 text-base leading-[1.8] text-[#3d352a]">
                It is a feeling. A mood. A place where Mediterranean warmth meets North Indian soul, and where the city's skyline becomes your dining companion.
              </p>
              <span className="gold-divider mt-10" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-cream text-[#1a1510] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><p className="eyebrow mb-4">Our Philosophy</p></Reveal>
          <Reveal delay={80}>
            <h2 className="text-4xl md:text-5xl max-w-2xl">Three pillars hold every evening up.</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div>
                  <div className="font-display text-7xl font-light" style={{ color: "var(--gold)" }}>{p.n}</div>
                  <h3 className="text-3xl mt-4">{p.t}</h3>
                  <span className="gold-divider my-5" />
                  <p className="text-[#3d352a] leading-relaxed text-[15px]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine identity */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><p className="eyebrow mb-4">Cuisine</p></Reveal>
          <Reveal delay={80}>
            <h2 className="text-4xl md:text-5xl text-cream max-w-3xl">
              A world of flavours <em className="italic" style={{ color: "var(--gold-soft)" }}>under one roof.</em>
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-3">
            {cuisines.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <span className="inline-block px-5 py-2.5 text-xs tracking-[0.22em] uppercase border rounded-full" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
                  {c}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-12 text-[var(--muted-foreground)] max-w-2xl text-lg leading-relaxed">
              From the aromatic spice corridors of the subcontinent to the sun-drenched olive groves of the Mediterranean — Greeka's menu is a passport in itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Parallax quote */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${nightLights})`, backgroundAttachment: "fixed" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-display italic text-3xl md:text-5xl text-cream leading-[1.3]">
              "Some nights are made to be remembered.<br />We help you make them."
            </p>
            <span className="gold-divider mx-auto mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Iconic moment */}
      <section className="bg-background py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={wings} alt="Iconic angel wings installation" className="w-full h-[480px] object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mb-4">The Greeka Signature</p>
            <h2 className="text-4xl md:text-5xl text-cream">Not just dinner. <em className="italic" style={{ color: "var(--gold-soft)" }}>An elevation.</em></h2>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
              Where the city ends, the flavour begins. Six floors above the noise — a rooftop, a playlist, a plate. Your kind of night.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

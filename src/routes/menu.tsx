import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import bar1 from "@/assets/photos/liquor_stall.jpeg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Greeka Kitchen & Bar Ranchi" },
      { name: "description", content: "Multi-cuisine menu at Greeka — North Indian, Mediterranean, Chinese, Italian. Cocktails, mocktails & more." },
      { property: "og:title", content: "Menu | Greeka Kitchen & Bar" },
      { property: "og:description", content: "A world of flavours, thoughtfully curated." },
      { property: "og:image", content: bar1 },   
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; veg: boolean };
type Section = { title: string; items: Item[] };

const VEG: Section[] = [
  { title: "Starters & Snacks", items: [
    { name: "Hara Bhara Kebab", veg: true },
    { name: "Chilli Paneer", veg: true },
    { name: "Cottage Cheese Jalapeño Poppers", veg: true },
    { name: "Caesar Salad", veg: true },
    { name: "Falafel", desc: "Served with hummus, pita & lavash", veg: true },
    { name: "Falafel Wrap", desc: "Falafel, herbs, fresh greens, pickle, tahini & yogurt sauce", veg: true },
    { name: "Masala Kulcha", veg: true },
    { name: "Butter Naan", veg: true },
  ]},
  { title: "Mains & Rice", items: [
    { name: "Hakka Noodles", desc: "Veg", veg: true },
    { name: "Fried Rice", desc: "Veg", veg: true },
    { name: "Chow Mein", desc: "Veg", veg: true },
    { name: "Mexican Pizza", veg: true },
    { name: "Paneer Tikka", veg: true },
  ]},
  { title: "Mediterranean & International", items: [
    { name: "Falafel Platter", veg: true },
    { name: "Hummus with Lavash", veg: true },
  ]},
];

const NONVEG: Section[] = [
  { title: "Starters & Kebabs", items: [
    { name: "Chicken 65", veg: false },
    { name: "Thai Basil Chicken Satay", veg: false },
    { name: "Murg Malai Kebab", veg: false },
    { name: "Fish Tikka", veg: false },
    { name: "Tandoori Chicken", veg: false },
  ]},
  { title: "Mains & Biryani", items: [
    { name: "Chicken Biryani", veg: false },
    { name: "Chicken Shawarma", desc: "Chicken chunks, roasted potatoes, Lebanese pickle, garlic yogurt sauce", veg: false },
    { name: "Chicken Meal", veg: false },
    { name: "Hakka Noodles", desc: "Chicken", veg: false },
  ]},
  { title: "Platters", items: [{ name: "Non-Veg Platter", veg: false }] },
];

const BEVERAGES: Section[] = [
  { title: "Cocktails & Long Drinks", items: [
    { name: "Long Island Iced Tea", veg: true },
    { name: "Mojito", veg: true },
    { name: "Margarita", veg: true },
  ]},
  { title: "Mocktails & Fresh", items: [
    { name: "Virgin Mojito", veg: true },
    { name: "Fresh Lime Soda", veg: true },
    { name: "Iced Tea", desc: "Peach or Lemon", veg: true },
  ]},
  { title: "Hot Beverages", items: [
    { name: "Masala Chai", veg: true },
    { name: "Filter Coffee", veg: true },
    { name: "Hot Chocolate", veg: true },
  ]},
];

function VegDot({ veg }: { veg: boolean }) {
  return (
    <span
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className="inline-block w-3 h-3 border flex-shrink-0 mt-1.5"
      style={{ borderColor: veg ? "#4a7c2e" : "#a33" }}
    >
      <span className="block w-1.5 h-1.5 m-[3px] rounded-full" style={{ background: veg ? "#4a7c2e" : "#a33" }} />
    </span>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="flex gap-4 p-5 border border-[var(--gold)]/10 bg-[var(--surface)] hover:border-[var(--gold)]/40 transition-colors">
      <VegDot veg={item.veg} />
      <div>
        <h4 className="text-cream text-[15px] font-medium tracking-wide">{item.name}</h4>
        {item.desc && <p className="text-[13px] text-[var(--muted-foreground)] mt-1 leading-relaxed">{item.desc}</p>}
      </div>
    </div>
  );
}

function SectionBlock({ section, delay = 0 }: { section: Section; delay?: number }) {
  return (
    <Reveal delay={delay} className="mb-14">
      <h3 className="font-display text-3xl text-cream mb-2">{section.title}</h3>
      <span className="gold-divider mb-6" />
      <div className="grid md:grid-cols-2 gap-4">
        {section.items.map((it) => <ItemCard key={it.name} item={it} />)}
      </div>
    </Reveal>
  );
}

function MenuPage() {
  const [tab, setTab] = useState<"food" | "bev">("food");
  const [diet, setDiet] = useState<"veg" | "nonveg">("veg");

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--surface)] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${bar1})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d08]/80 to-[#1a1510]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Our Menu</p>
          <h1 className="text-5xl md:text-7xl text-cream">
            A World of <em className="italic" style={{ color: "var(--gold-soft)" }}>Flavours</em>
          </h1>
          <p className="mt-5 text-[var(--muted-foreground)]">Thoughtfully curated. Carefully prepared.</p>
        </div>
      </section>

      <div className="sticky top-20 z-30 bg-[#1a1510]/95 backdrop-blur-md border-y border-[var(--gold)]/15">
        <div className="max-w-5xl mx-auto px-6 flex justify-center gap-12">
          {(["food", "bev"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="relative py-5 text-xs tracking-[0.28em] uppercase font-medium transition-colors"
              style={{ color: tab === t ? "var(--cream)" : "var(--muted-foreground)" }}
            >
              {t === "food" ? "Food" : "Beverages"}
              <span
                className="absolute left-0 bottom-0 h-[2px] bg-[var(--gold)] transition-all duration-300"
                style={{ width: tab === t ? "100%" : "0%" }}
              />
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {tab === "food" && (
            <div className="animate-fade-in">
              <div className="flex justify-center gap-3 mb-12">
                {(["veg", "nonveg"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiet(d)}
                    className="px-6 py-2.5 text-xs tracking-[0.22em] uppercase border transition-all"
                    style={{
                      borderColor: diet === d ? "var(--gold)" : "var(--border)",
                      background: diet === d ? "var(--gold)" : "transparent",
                      color: diet === d ? "var(--primary-foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    {d === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </button>
                ))}
              </div>
              {(diet === "veg" ? VEG : NONVEG).map((s, i) => (
                <SectionBlock key={s.title} section={s} delay={i * 60} />
              ))}
            </div>
          )}

          {tab === "bev" && (
            <div className="animate-fade-in">
              {BEVERAGES.map((s, i) => <SectionBlock key={s.title} section={s} delay={i * 60} />)}
            </div>
          )}

          <div className="mt-16 pt-12 border-t border-[var(--gold)]/15 text-center">
            <p className="eyebrow mb-5">Want to order in?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="btn-outline">Order on Zomato</a>
              <a href="https://www.swiggy.com" target="_blank" rel="noreferrer" className="btn-outline">Order on Swiggy</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

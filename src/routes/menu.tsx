import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/SiteChrome";
import { MENU, formatDA } from "@/lib/holm";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — HOLM Coffee & Brunch" },
      { name: "description", content: "Ethiopian arabica classics, signature lattes, iced coffee, cocktails, brunch plates and desserts at HOLM." },
      { property: "og:title", content: "Menu — HOLM Coffee & Brunch" },
      { property: "og:description", content: "Coffee, brunch and desserts at HOLM, with prices in DA." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("all");
  const sections = active === "all" ? MENU : MENU.filter((s) => s.id === active);
  return (
    <>
      <PageIntro eyebrow="The menu" title="Coffee, brunch & something sweet.">
        Prices in Algerian dinar. Ask our team about allergens and today's pastries.
      </PageIntro>
      <div className="sticky top-16 z-30 border-y border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3" role="tablist" aria-label="Menu categories">
          {[{ id: "all", title: "All" }, ...MENU].map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              onClick={() => setActive(s.id)}
              className={`min-h-10 shrink-0 rounded-full px-4 text-sm transition-colors ${active === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-16 px-5 py-16 md:grid-cols-2">
        {sections.map((s) => (
          <section key={s.id} aria-labelledby={s.id}>
            <h2 id={s.id} className="text-4xl">{s.title}</h2>
            {s.subtitle && <p className="eyebrow mt-2 text-accent">{s.subtitle}</p>}
            <ul className="mt-6">
              {s.items.map((i) => (
                <li key={i.name} className="flex items-baseline gap-3 border-b border-border py-4">
                  <span>
                    <span className="text-base font-medium">{i.name}</span>
                    {i.note && <span className="ml-2 text-xs text-accent">{i.note}</span>}
                  </span>
                  <span className="flex-1 border-b border-dotted border-border" />
                  <span className="text-sm tabular-nums text-muted-foreground">{formatDA(i.price)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

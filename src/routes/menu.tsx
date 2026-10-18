import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrderBasket } from "@/components/OrderBasket";
import { changeQuantity, type OrderLine } from "@/lib/order";
import { PageIntro } from "@/components/SiteChrome";
import { MENU, formatDA, type MenuItem } from "@/lib/holm";
import coffee from "@/assets/coffee.jpg";
import desserts from "@/assets/desserts.jpg";
import brunch from "@/assets/brunch.jpg";
import drinks from "@/assets/drinks.jpg";

const IMG: Record<string, string> = { classics: coffee, signature: coffee, iced: drinks, cocktails: drinks, brunch, desserts };

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — HOLM Coffee & Brunch" },
      { name: "description", content: "Ethiopian arabica classics, signature lattes, iced coffee, cocktails, brunch plates and desserts at HOLM." },
      { property: "og:title", content: "Menu — HOLM Coffee & Brunch" },
      { property: "og:description", content: "Coffee, brunch and desserts at HOLM, with prices in DA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("all");
  const [lines, setLines] = useState<OrderLine[]>([]);
  const change = (item: MenuItem, delta: number) => setLines((current) => changeQuantity(current, item, delta));
  const sections = active === "all" ? MENU : MENU.filter((s) => s.id === active);
  return (
    <>
      <PageIntro eyebrow="The menu" title="Coffee, brunch & something sweet.">
        Prices in Algerian dinar. Ask our team about allergens and today's pastries.
      </PageIntro>
      <div className="sticky top-16 z-30 border-y border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3" role="tablist" aria-label="Menu categories">
          {[{ id: "all", title: "All" }, ...MENU].map((s) => (
            <Button variant="ghost"
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              onClick={() => setActive(s.id)}
              className={`min-h-10 shrink-0 rounded-full px-4 text-sm transition-colors ${active === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {s.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-10 px-5 pb-28 pt-6 md:grid-cols-2 md:pt-16">
        {sections.map((s) => (
          <section key={active + s.id} aria-labelledby={s.id} className="fade-up">
            <div className="img-zoom relative mb-5 aspect-[2/1] overflow-hidden rounded-md md:aspect-[16/10]">
              <img src={IMG[s.id]} alt="" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
              <span className="absolute bottom-4 left-5 right-5 font-serif text-3xl italic leading-tight text-cover-foreground md:text-5xl">{s.title}</span>
            </div>
            <h2 id={s.id} className="sr-only">{s.title}</h2>
            {s.subtitle && <p className="eyebrow mt-2 text-accent">{s.subtitle}</p>}
            <ul className="mt-6">
              {s.items.map((i) => (
                <li key={i.name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b border-border py-3">
                  <span className="min-w-0">
                    <span className="text-sm font-medium md:text-base">{i.name}</span>
                    {i.note && <span className="mt-1 block text-xs text-accent">{i.note}</span>}
                  </span>
                  <span className="whitespace-nowrap text-xs tabular-nums text-muted-foreground md:text-sm">{formatDA(i.price)}</span>
                  <Button size="icon" variant="outline" className="h-11 w-11 shrink-0" aria-label={`Add ${i.name} to basket`} title={`Add ${i.name}`} onClick={() => change(i, 1)}><Plus /></Button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <OrderBasket lines={lines} change={change} />
    </>
  );
}

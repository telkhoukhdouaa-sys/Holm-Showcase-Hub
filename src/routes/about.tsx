import { createFileRoute } from "@tanstack/react-router";
import mark from "@/assets/holm-mark.png.asset.json";
import { PageIntro } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HOLM" },
      { name: "description", content: "HOLM means dream. A café where coffee, design and gathering meet." },
      { property: "og:title", content: "About — HOLM" },
      { property: "og:description", content: "A café where coffee, design and gathering meet." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Coffee & design." />
      <section className="reveal mx-auto grid max-w-6xl gap-16 px-5 pb-24 md:grid-cols-2 md:items-center">
        <div className="flex aspect-square items-center justify-center rounded-md bg-roast">
          <img src={mark.url} alt="HOLM logo" className="w-1/2" loading="lazy" width={400} height={300} />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p><span className="font-serif text-3xl text-foreground">حلم</span> — <em>holm</em> — means dream. Our name, written in Arabic, is the shape of our logo.</p>
          <p>We wanted a café that feels made by hand: walls you want to touch, a ceiling of wood, light that softens the day. A space as considered as the cup you're holding.</p>
          <p>Our coffee is 100% Ethiopian arabica. Our signatures, brunch and desserts are prepared to be shared — slowly.</p>
        </div>
      </section>
    </>
  );
}

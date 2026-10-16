import { createFileRoute } from "@tanstack/react-router";
import pottery from "@/assets/pottery.jpg";
import hero from "@/assets/hero.jpg";
import { PageIntro } from "@/components/SiteChrome";
import { HOLM } from "@/lib/holm";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — HOLM" },
      { name: "description", content: "Pottery dates, slow brunches and a sculptural space designed for gathering. Discover what happens at HOLM." },
      { property: "og:title", content: "The Experience — HOLM" },
      { property: "og:description", content: "Pottery dates, slow brunches and a space designed for gathering." },
    ],
  }),
  component: Experience,
});

const moments = [
  { t: "Morning", d: "An Ethiopian espresso, a croissant, the quiet hour before the room fills." },
  { t: "Brunch", d: "Avocado toast, bowls and long conversations under the wooden ceiling." },
  { t: "Afternoon", d: "Iced lattes, cocktails and a slice of cheesecake by the window." },
  { t: "Thursday", d: "Pottery sessions from 13:00 — shape something, then stay for coffee." },
];

function Experience() {
  return (
    <>
      <PageIntro eyebrow="The experience" title="Offline here hits different.">
        HOLM was built to slow you down: curved clay walls, warm light, plants and handmade objects.
      </PageIntro>
      <div className="mx-auto max-w-6xl px-5">
        <img src={hero} alt="The HOLM space" className="aspect-[16/9] w-full rounded-md object-cover" width={1600} height={1072} />
      </div>
      <section className="mx-auto grid max-w-6xl gap-px px-5 py-20 sm:grid-cols-2 md:grid-cols-4">
        {moments.map((m, i) => (
          <div key={m.t} className="border-t border-border pt-6 md:pr-6">
            <p className="eyebrow text-accent">0{i + 1}</p>
            <h2 className="mt-3 text-3xl">{m.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{m.d}</p>
          </div>
        ))}
      </section>
      <section className="bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-accent">Pottery date</p>
            <h2 className="mt-3 text-5xl">Clay, coffee, company.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">{HOLM.pottery}. Places are limited — message us on Instagram to ask about the next session.</p>
            <a href={HOLM.instagram} target="_blank" rel="noreferrer" className="btn-solid mt-8">Ask about a session</a>
          </div>
          <img src={pottery} alt="Pottery session" className="arch aspect-[4/5] w-full object-cover" loading="lazy" width={1024} height={1280} />
        </div>
      </section>
    </>
  );
}

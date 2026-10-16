import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import brunch from "@/assets/brunch.jpg";
import drinks from "@/assets/drinks.jpg";
import pottery from "@/assets/pottery.jpg";
import { HOLM, MENU, formatDA } from "@/lib/holm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HOLM — Beyond Coffee & Brunch" },
      { name: "description", content: "Specialty coffee, brunch and slow afternoons in a sculptural, sun-warmed space. Open daily 10:00–21:00." },
      { property: "og:title", content: "HOLM — Beyond Coffee & Brunch" },
      { property: "og:description", content: "Specialty coffee, brunch and slow afternoons in a sculptural, sun-warmed space." },
    ],
  }),
  component: Home,
});

const signatures = [
  ...(MENU.find((s) => s.id === "signature")?.items ?? []),
  MENU.find((s) => s.id === "brunch")?.items[0],
  MENU.find((s) => s.id === "desserts")?.items[0],
].filter((i): i is NonNullable<typeof i> => Boolean(i));

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:grid-cols-12 md:items-end md:pt-16">
          <div className="md:col-span-5 md:pb-10">
            <p className="eyebrow fade-up text-accent">Coffee · Brunch · Experiences</p>
            <h1 className="fade-up mt-5 text-6xl leading-[0.95] md:text-8xl">
              Beyond Coffee <em className="text-accent">&amp;</em> Brunch.
            </h1>
            <p className="fade-up mt-6 max-w-sm text-muted-foreground">
              A place to gather, discover, and stay a little longer — between the first espresso and the last light.
            </p>
            <div className="fade-up mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-solid">Explore the menu</Link>
              <Link to="/experience" className="btn-ghost">Discover HOLM</Link>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">{HOLM.hours}</p>
          </div>
          <div className="md:col-span-7">
            <div className="arch aspect-[4/5] md:aspect-[5/6]">
              <img src={hero} alt="Warm sculptural café interior with clay walls and a wooden stick ceiling" className="h-full w-full object-cover" width={1600} height={1072} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center">
          <p className="eyebrow text-accent">The idea</p>
          <p className="mt-6 font-serif text-3xl leading-snug md:text-5xl">
            Clay walls, a ceiling of hand-placed wood, warm light and a good cup. HOLM is coffee and brunch — and everything that happens around the table.
          </p>
        </div>
      </section>

      {/* Signatures */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-accent">Signatures</p>
            <h2 className="mt-3 text-4xl md:text-6xl">What people come back for</h2>
          </div>
          <Link to="/menu" className="btn-ghost">Full menu</Link>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 md:col-span-6">
            <img src={brunch} alt="Avocado toast and matcha latte" className="arch aspect-[3/4] w-full object-cover" loading="lazy" width={1024} height={1280} />
            <img src={drinks} alt="Iced cocktail and pistachio cheesecake" className="mt-12 aspect-[3/4] w-full rounded-md object-cover" loading="lazy" width={1024} height={1280} />
          </div>
          <ul className="md:col-span-6 md:pl-8">
            {signatures.map((i) => (
              <li key={i.name} className="flex items-baseline gap-4 border-b border-border py-5">
                <span className="font-serif text-2xl md:text-3xl">{i.name}</span>
                <span className="flex-1 border-b border-dotted border-border" />
                <span className="text-sm tabular-nums text-muted-foreground">{formatDA(i.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beyond */}
      <section className="bg-roast text-roast-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
          <img src={pottery} alt="Pottery wheel session at HOLM" className="arch aspect-[4/5] w-full object-cover" loading="lazy" width={1024} height={1280} />
          <div>
            <p className="eyebrow text-sand">Beyond the ordinary</p>
            <h2 className="mt-4 text-5xl leading-tight md:text-6xl">A pottery date, at a café.</h2>
            <p className="mt-6 max-w-md opacity-80">
              Some afternoons the tables turn into a studio. Get your hands in the clay, then finish with a latte. {HOLM.pottery}.
            </p>
            <Link to="/experience" className="btn-ghost mt-8">See the experiences</Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="eyebrow text-accent">Visit HOLM</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Come as you are.</h2>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 md:col-span-2">
            <div><dt className="eyebrow text-muted-foreground">Open</dt><dd className="mt-2 font-serif text-2xl">{HOLM.hours}</dd></div>
            <div><dt className="eyebrow text-muted-foreground">Find us</dt><dd className="mt-2 font-serif text-2xl">{HOLM.address}</dd></div>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <a href={HOLM.mapsUrl} target="_blank" rel="noreferrer" className="btn-solid">Get directions</a>
              <a href={HOLM.instagram} target="_blank" rel="noreferrer" className="btn-ghost">Message us on Instagram</a>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

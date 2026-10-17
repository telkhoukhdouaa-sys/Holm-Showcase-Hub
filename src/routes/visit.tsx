import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/SiteChrome";
import { HOLM } from "@/lib/holm";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — HOLM Coffee & Brunch" },
      {
        name: "description",
        content: "Opening hours, directions and how to reach HOLM. Open every day 10:00–21:00.",
      },
      { property: "og:title", content: "Visit — HOLM Coffee & Brunch" },
      { property: "og:description", content: "Opening hours, directions and contact for HOLM." },
    ],
  }),
  component: Visit,
});

function Visit() {
  const rows = [
    { k: "Opening hours", v: HOLM.hours },
    { k: "Address", v: HOLM.address },
    { k: "Pottery", v: HOLM.pottery },
    { k: "Contact & groups", v: `Send us a message on Instagram ${HOLM.instagramHandle}` },
  ];
  return (
    <>
      <PageIntro eyebrow="Visit" title="See you at HOLM." />
      <section className="reveal mx-auto max-w-6xl px-5 pb-24">
        <dl className="border-t border-border">
          {rows.map((r) => (
            <div key={r.k} className="grid gap-2 border-b border-border py-6 md:grid-cols-3">
              <dt className="eyebrow text-muted-foreground">{r.k}</dt>
              <dd className="font-serif text-2xl md:col-span-2 md:text-3xl">{r.v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={HOLM.mapsUrl} target="_blank" rel="noreferrer" className="btn-solid">
            Open in Maps
          </a>
          <a href={HOLM.instagram} target="_blank" rel="noreferrer" className="btn-ghost">
            Instagram
          </a>
          <Link to="/menu" className="btn-ghost">
            View the menu
          </Link>
        </div>
      </section>
    </>
  );
}

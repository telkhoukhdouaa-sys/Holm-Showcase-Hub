import { Link } from "@tanstack/react-router";
import { useState } from "react";
import mark from "@/assets/holm-mark.png.asset.json";
import { HOLM } from "@/lib/holm";

const NAV = [
  { to: "/menu", label: "Menu" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" aria-label="HOLM home">
          <img src={mark.url} alt="" className="h-8 w-auto" width={60} height={45} />
          <span className="eyebrow text-foreground">Holm</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/visit" className="btn-solid !min-h-10 !px-5">Plan a visit</Link>
        </nav>
        <button className="flex h-11 w-11 items-center justify-center md:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-5 pb-8 pt-4 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-serif text-3xl">
              {n.label}
            </Link>
          ))}
          <a href={HOLM.instagram} target="_blank" rel="noreferrer" className="mt-6 block text-sm text-muted-foreground">{HOLM.instagramHandle}</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso text-roast-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={mark.url} alt="HOLM" className="h-14 w-auto" width={120} height={90} loading="lazy" />
          <p className="mt-5 font-serif text-3xl">Beyond Coffee &amp; Brunch.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow text-sand">Hours</p>
          <p>{HOLM.hours}</p>
          <p className="opacity-70">{HOLM.pottery}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="eyebrow text-sand">Explore</p>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="block hover:text-background">{n.label}</Link>
          ))}
          <a href={HOLM.instagram} target="_blank" rel="noreferrer" className="block hover:text-background">Instagram</a>
        </div>
      </div>
      <div className="border-t border-roast-foreground/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} HOLM</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pt-24">
      <p className="eyebrow fade-up text-accent">{eyebrow}</p>
      <h1 className="fade-up mt-4 max-w-3xl text-5xl leading-[1.02] md:text-7xl">{title}</h1>
      {children && <div className="fade-up mt-6 max-w-xl text-muted-foreground">{children}</div>}
    </section>
  );
}

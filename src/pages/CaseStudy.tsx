import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Badge } from "@/components/ui/badge";
import SiteLayout from "@/components/SiteLayout";
import CaseCard from "@/components/profile/CaseCard";
import NotFound from "@/pages/NotFound";
import { profile, cases, loc, type Item } from "@/content/profile";

function ItemList({ items }: { items: Item[] }) {
  const { lang } = useLang();
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.text.en} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>
            {loc(it.text, lang)}
            {it.link && (
              <a href={it.link.url} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1 text-primary hover:underline">
                {it.link.label}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const { lang } = useLang();
  const idx = cases.findIndex((x) => x.slug === slug);
  const c = cases[idx];
  const { labels } = profile;

  useDocumentMeta(
    c ? `${loc(c.title, lang)} · Gilles DOFFE` : "MaenSkill",
    c ? loc(c.summary, lang) : "",
  );

  if (!c) return <NotFound />;

  const others = [1, 2, 3].map((k) => cases[(idx + k) % cases.length]);

  return (
    <SiteLayout>
      <article className="px-6 pt-36 pb-16">
        <div className="container mx-auto max-w-3xl">
          <Link to="/qui-suis-je#realisations" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {loc(profile.back, lang)}
          </Link>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {loc(c.sector, lang)} · {loc(c.period, lang)}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">{loc(c.title, lang)}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">{loc(c.summary, lang)}</p>

          {c.media && (
            <figure className="mb-12">
              <video
                src={`${import.meta.env.BASE_URL}${c.media.video}`}
                poster={`${import.meta.env.BASE_URL}${c.media.poster}`}
                controls
                muted
                playsInline
                preload="none"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">{loc(c.media.caption, lang)}</figcaption>
            </figure>
          )}

          <Block title={loc(labels.context, lang)}>
            <p className="text-muted-foreground leading-relaxed">{loc(c.context, lang)}</p>
          </Block>
          <Block title={loc(labels.role, lang)}>
            <p className="text-lg font-semibold">{loc(c.role, lang)}</p>
          </Block>
          <Block title={loc(labels.missions, lang)}>
            <ItemList items={c.missions} />
          </Block>
          <Block title={loc(labels.challenge, lang)}>
            <p className="border-l-4 border-primary pl-4 leading-relaxed">{loc(c.challenge, lang)}</p>
          </Block>
          {c.method && (
            <Block title={loc(labels.method, lang)}>
              <ItemList items={c.method} />
            </Block>
          )}
          <Block title={loc(labels.result, lang)}>
            <p className="text-muted-foreground leading-relaxed">{loc(c.result, lang)}</p>
          </Block>
          <Block title={loc(labels.tech, lang)}>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((tag) => <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>)}
            </div>
          </Block>
        </div>
      </article>

      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">{loc(labels.other, lang)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((o) => <CaseCard key={o.slug} c={o} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

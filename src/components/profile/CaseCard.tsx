import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { Badge } from "@/components/ui/badge";
import { profile, loc, type CaseStudy } from "@/content/profile";

export default function CaseCard({ c }: { c: CaseStudy }) {
  const { lang } = useLang();

  return (
    <Link
      to={`/qui-suis-je/${c.slug}`}
      className="group flex flex-col h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
        {loc(c.sector, lang)} · {loc(c.period, lang)}
      </p>
      <h3 className="text-xl font-bold mb-3">{loc(c.title, lang)}</h3>
      <p className="text-muted-foreground mb-5 flex-1">{loc(c.summary, lang)}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {c.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        {loc(profile.readMore, lang)}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

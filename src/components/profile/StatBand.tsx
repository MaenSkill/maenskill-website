import { useLang } from "@/lib/LangContext";
import { profile, loc } from "@/content/profile";

export default function StatBand() {
  const { lang } = useLang();

  return (
    <section className="px-6 py-12 border-y border-border bg-card/50">
      <dl className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {profile.stats.map((s) => (
          <div key={s.value} className="text-center">
            <dt className="sr-only">{loc(s.label, lang)}</dt>
            <dd>
              <span className="text-4xl md:text-5xl font-extrabold text-primary">{s.value}</span>
              {loc(s.unit, lang) && <span className="ml-2 text-lg font-semibold">{loc(s.unit, lang)}</span>}
              <span className="block mt-2 text-sm text-muted-foreground">{loc(s.label, lang)}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

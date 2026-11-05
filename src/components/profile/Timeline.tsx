import { useLang } from "@/lib/LangContext";
import { profile, loc } from "@/content/profile";

export default function Timeline() {
  const { lang } = useLang();
  const { items, education, languages } = profile.timeline;

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <ol className="lg:col-span-2 relative border-l border-border ml-2">
        {items.map((it) => (
          <li key={loc(it.period, lang)} className="mb-10 ml-6">
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm font-semibold text-primary">{loc(it.period, lang)}</p>
            <h3 className="text-lg font-bold">{loc(it.role, lang)}</h3>
            <p className="text-sm text-muted-foreground mb-2">{loc(it.org, lang)}</p>
            <p className="text-muted-foreground leading-relaxed">{loc(it.text, lang)}</p>
          </li>
        ))}
      </ol>
      <aside className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {lang === "fr" ? "Formation" : "Education"}
          </h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.period}>
                <p className="text-sm text-muted-foreground">{e.period}</p>
                <p className="font-semibold">{loc(e.text, lang)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {lang === "fr" ? "Langues" : "Languages"}
          </h3>
          <p className="font-semibold">{loc(languages, lang)}</p>
        </div>
      </aside>
    </div>
  );
}

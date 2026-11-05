import { useLang } from "@/lib/LangContext";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/profile/SectionTitle";
import StatBand from "@/components/profile/StatBand";
import SkillBlocks from "@/components/profile/SkillBlocks";
import CaseCard from "@/components/profile/CaseCard";
import Timeline from "@/components/profile/Timeline";
import Contributions from "@/components/profile/Contributions";
import { profile, cases, loc } from "@/content/profile";
import portrait from "@/assets/portrait-gilles.webp";

export default function WhoAmI() {
  const { lang } = useLang();
  const { hero, expertise, now, method, timeline, contact } = profile;
  useDocumentMeta(loc(profile.meta.title, lang), loc(profile.meta.description, lang));
  const sections = [
    { id: "expertise", label: expertise.title },
    { id: "realisations", label: profile.casesTitle },
    { id: "contributions", label: profile.contributions.navLabel },
    { id: "methode", label: method.title },
    { id: "parcours", label: timeline.title },
  ];

  return (
    <SiteLayout>
      <section className="px-6 pt-40 pb-20">
        <div className="container mx-auto max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <img
            src={portrait}
            alt={loc(hero.portraitAlt, lang)}
            width={720}
            height={1033}
            className="order-first lg:order-last w-48 sm:w-60 lg:w-full mx-auto rounded-lg border border-border shadow-2xl shadow-primary/10"
          />
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">{loc(hero.kicker, lang)}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{hero.name}</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6">{loc(hero.tagline, lang)}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">{loc(hero.intro, lang)}</p>
            <nav aria-label={loc(hero.navLabel, lang)} className="flex flex-col items-center gap-3 sm:w-fit">
              <div className="flex flex-wrap justify-center gap-3">
                {sections.map((sec) => (
                  <Button key={sec.id} asChild size="lg" variant="outline" className="h-9 px-3 sm:h-11 sm:px-5 font-semibold">
                    <a href={`#${sec.id}`}>{loc(sec.label, lang)}</a>
                  </Button>
                ))}
              </div>
              <Button asChild size="lg" className="h-9 px-3 sm:h-11 sm:px-8 font-semibold">
                <a href="#contact">{loc(hero.ctaContact, lang)}</a>
              </Button>
            </nav>
          </div>
        </div>
      </section>

      <StatBand />

      <section id="expertise" className="px-6 py-24 scroll-mt-24">
        <div className="container mx-auto">
          <SectionTitle title={loc(expertise.title, lang)}>{loc(expertise.subtitle, lang)}</SectionTitle>
          <SkillBlocks />
          <div className="mt-12 rounded-lg border-l-4 border-primary bg-card/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">{loc(now.title, lang)}</h3>
            <ul className="space-y-2 list-disc ml-5 text-muted-foreground">
              {now.items.map((it) => <li key={it.en}>{loc(it, lang)}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="realisations" className="px-6 py-24 bg-card/30 scroll-mt-24">
        <div className="container mx-auto">
          <SectionTitle title={loc(profile.casesTitle, lang)}>{loc(profile.casesSubtitle, lang)}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => <CaseCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      <section id="contributions" className="px-6 py-24 scroll-mt-24">
        <div className="container mx-auto">
          <SectionTitle title={loc(profile.contributions.title, lang)}>{loc(profile.contributions.subtitle, lang)}</SectionTitle>
          <Contributions />
        </div>
      </section>

      <section id="methode" className="px-6 py-24 bg-card/30 scroll-mt-24">
        <div className="container mx-auto">
          <SectionTitle title={loc(method.title, lang)}>{loc(method.subtitle, lang)}</SectionTitle>
          <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {method.items.map((m, i) => (
              <li key={m.title.en} className="flex gap-4">
                <span className="text-3xl font-extrabold text-primary/60 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-bold mb-2">{loc(m.title, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{loc(m.text, lang)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="parcours" className="px-6 py-24 scroll-mt-24">
        <div className="container mx-auto">
          <SectionTitle title={loc(timeline.title, lang)} />
          <Timeline />
        </div>
      </section>

      <div id="contact" className="scroll-mt-24">
        <Contact />
        <p className="pb-16 -mt-12 text-center text-sm text-muted-foreground space-x-6">
          {contact.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-4 hover:underline">
              {l.label}
            </a>
          ))}
        </p>
      </div>
    </SiteLayout>
  );
}

import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import logoNoText from "@/assets/logo-notext.png";

export default function About() {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-3xl text-center">
        <img
          src={logoNoText}
          alt="MaenSkill"
          className="w-24 h-24 mx-auto mb-8 opacity-80"
          loading="lazy"
          width={96}
          height={96}
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t(translations.about.title, lang)}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {t(translations.about.text, lang)}
        </p>
      </div>
    </section>
  );
}

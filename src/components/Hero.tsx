import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-left max-w-3xl ml-[5%] lg:ml-[10%]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          {t(translations.hero.title, lang)}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t(translations.hero.subtitle, lang)}
        </p>
      </div>
    </section>
  );
}

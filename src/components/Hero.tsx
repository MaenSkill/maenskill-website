import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import circuitBg from "@/assets/circuit-bg.jpg";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0">
        <img
          src={circuitBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
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

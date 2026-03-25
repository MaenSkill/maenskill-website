import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import { Cpu, Compass, TrendingUp } from "lucide-react";

const icons = [Cpu, Compass, TrendingUp];

export default function Services() {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t(translations.services.title, lang)}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {translations.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-8 glow-cyan hover:border-glow transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">{t(item.title, lang)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(item.description, lang)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

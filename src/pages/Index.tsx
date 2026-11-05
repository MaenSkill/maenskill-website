import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SiteLayout from "@/components/SiteLayout";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";

const Index = () => {
  const { lang } = useLang();
  useDocumentMeta(
    "MaenSkill, Embedded Systems & Technical Leadership",
    t(translations.meta.description, lang),
  );

  return (
    <SiteLayout>
      <Hero />
      <Services />
      <About />
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </SiteLayout>
  );
};

export default Index;

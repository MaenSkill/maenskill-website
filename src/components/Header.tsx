import { useLang } from "@/lib/LangContext";
import logoFull from "@/assets/logo-full.png";

export default function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <img src={logoFull} alt="MaenSkill" className="h-14" />
        <div className="flex items-center gap-1 text-sm font-semibold">
          <button
            onClick={() => setLang("fr")}
            className={`px-2 py-1 rounded transition-colors ${lang === "fr" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            FR
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 rounded transition-colors ${lang === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

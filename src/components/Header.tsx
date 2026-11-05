import { Link, NavLink } from "react-router-dom";
import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import logoFull from "@/assets/logo-full.png";

export default function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-24 px-6 gap-4">
        <Link to="/" aria-label="MaenSkill">
          <img src={logoFull} alt="MaenSkill" className="h-14 sm:h-20" />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-semibold">
          <NavLink
            to="/qui-suis-je"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            {t(translations.nav.whoami, lang)}
          </NavLink>
          <div className="flex items-center gap-1">
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
        </nav>
      </div>
    </header>
  );
}

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./i18n";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const Ctx = createContext<LangCtx>({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("maenskill-lang");
    return stored === "en" ? "en" : "fr";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("maenskill-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

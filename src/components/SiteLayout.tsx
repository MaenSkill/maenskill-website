import type { ReactNode } from "react";
import Header from "@/components/Header";
import CircuitPattern from "@/components/CircuitPattern";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CircuitPattern />
      <Header />
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-border">
        © {new Date().getFullYear()} MaenSkill, Embedded Systems & Training
      </footer>
    </>
  );
}

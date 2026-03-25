import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CircuitPattern from "@/components/CircuitPattern";
import { LangProvider } from "@/lib/LangContext";

const Index = () => {
  return (
    <LangProvider>
      <CircuitPattern />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-border">
        © {new Date().getFullYear()} MaenSkill — Embedded Systems & Training
      </footer>
    </LangProvider>
  );
};

export default Index;

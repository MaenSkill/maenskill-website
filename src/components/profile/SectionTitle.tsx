import type { ReactNode } from "react";

export default function SectionTitle({ kicker, title, children }: { kicker?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-3xl">
      {kicker && <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {children && <p className="text-muted-foreground text-lg leading-relaxed">{children}</p>}
    </div>
  );
}

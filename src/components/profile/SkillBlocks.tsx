import { Boxes, GraduationCap, Layers, ShieldCheck, Cpu, Workflow } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { Badge } from "@/components/ui/badge";
import { profile, loc } from "@/content/profile";

// Même ordre que profile.expertise.blocks.
const icons = [Boxes, GraduationCap, Layers, ShieldCheck, Cpu, Workflow];

export default function SkillBlocks() {
  const { lang } = useLang();
  const { blocks, archTitle, arch } = profile.expertise;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blocks.map((b, i) => {
        const Icon = icons[i];
        return (
          <div key={b.title.en} className="rounded-lg border border-border bg-card p-6">
            <Icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-lg font-bold mb-2">{loc(b.title, lang)}</h3>
            <p className="text-muted-foreground leading-relaxed">{loc(b.text, lang)}</p>
          </div>
        );
      })}
      <div className="sm:col-span-2 lg:col-span-3 rounded-lg border border-dashed border-border p-6">
        <h3 className="text-lg font-bold mb-4">{loc(archTitle, lang)}</h3>
        <div className="flex flex-wrap gap-2">
          {arch.map((a) => (
            <Badge key={a} variant="outline" className="font-normal">{a}</Badge>
          ))}
        </div>
      </div>
  </div>
  );
}

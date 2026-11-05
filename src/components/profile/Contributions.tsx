import { ExternalLink, GitPullRequest, Bot, Mic } from "lucide-react";
import { useLang } from "@/lib/LangContext";
import { profile, loc } from "@/content/profile";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Contributions() {
  const { lang } = useLang();
  const { riot, cogip, talks } = profile.contributions;

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-4 mb-4">
          <GitPullRequest className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-bold">{loc(riot.title, lang)}</h3>
            <p className="text-sm font-semibold text-primary">{loc(riot.stat, lang)}</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">{loc(riot.text, lang)}</p>
        <ul className="divide-y divide-border mb-6">
          {riot.prs.map((pr) => (
            <li key={pr.num}>
              <a
                href={`https://github.com/RIOT-OS/RIOT/pull/${pr.num}`}
                {...ext}
                className="group flex items-baseline gap-4 py-2.5 hover:text-primary"
              >
                <span className="w-10 shrink-0 text-sm text-muted-foreground">{pr.year}</span>
                <span className="flex-1">{loc(pr.text, lang)}</span>
                <span className="shrink-0 text-sm text-muted-foreground group-hover:text-primary">#{pr.num}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={riot.all.url} {...ext} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          {loc(riot.all.label, lang)}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start gap-4 mb-4">
            <Bot className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold">{loc(cogip.title, lang)}</h3>
              <p className="text-sm font-semibold text-primary">{loc(cogip.stat, lang)}</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">{loc(cogip.text, lang)}</p>
          <a href={cogip.link.url} {...ext} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            {cogip.link.label}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-4 mb-4">
            <Mic className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
            <h3 className="text-lg font-bold">{loc(talks.title, lang)}</h3>
          </div>
          <ul className="space-y-4">
            {talks.items.map((tk) => (
              <li key={tk.url}>
                <p className="text-sm font-semibold text-primary">{tk.event} · {tk.year}</p>
                <a href={tk.url} {...ext} className="group inline-flex items-start gap-2 hover:text-primary">
                  <span>{loc(tk.text, lang)}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Award, Code2, GraduationCap, Briefcase } from "lucide-react";

const items = [
  {
    icon: Code2,
    year: "2026",
    title: "400+ Problems on LeetCode",
    desc: "Consistent practice across DSA topics, with focus on graphs and DP.",
  },
  {
    icon: GraduationCap,
    year: "2025",
    title: "MERN Specialization",
    desc: "Completed advanced full stack coursework with capstone project.",
  },
];

const counters = [
  { v: "400+", l: "Problems Solved" },
  { v: "5+", l: "Projects Built" },
  { v: "10+", l: "Technologies" },
  { v: "2+", l: "Years Coding" },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="04 / Achievements" title="Milestones along the way." />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counters.map((c, i) => (
            <Reveal key={c.l} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-xl">
                <p className="font-display text-3xl font-semibold text-foreground">{c.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[27px]" />
          <ul className="space-y-6">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.05}>
                <li className="hover-lift relative flex items-start gap-5 rounded-2xl border border-border bg-surface/40 p-5 pl-14 backdrop-blur-xl sm:pl-20">
                  <span className="absolute left-2 top-5 grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface-2/80 text-accent sm:left-3">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {it.title}
                      </h3>
                      <span className="font-mono text-[11px] text-muted-foreground">{it.year}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


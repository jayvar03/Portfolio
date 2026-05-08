import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Code2, Sparkles, Trophy, BookOpen } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "5+" },
  { icon: Sparkles, label: "Technologies", value: "10+" },
  { icon: Trophy, label: "Leetcode Problems Solved", value: "400+" },
  { icon: BookOpen, label: "Years Learning", value: "1+" },
];

export const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader label="01 / About" title="A developer who cares about the details." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Jay — a full stack developer dedicated to building high-performance,
              maintainable web products. I enjoy the process of turning complex problems into
              elegant, efficient code.
            </p>
            <p>
              My expertise spans the entire stack, from crafting responsive, accessible frontends to
              architecting scalable backend systems. I am particularly passionate about optimization
              and ensuring that every line of code serves a purpose.
            </p>
            <p>
              When I&apos;m not building for the web, I focus on sharpening my algorithmic thinking.
              With a solid foundation in Data Structures and Algorithms, I approach every challenge
              with a logic-first mindset.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-2xl p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Jay Varshney</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    full-stack-developer.json
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  Open to work
                </span>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <dt className="text-muted-foreground">location</dt>
                  <dd className="mt-1 text-foreground">India</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">focus</dt>
                  <dd className="mt-1 text-foreground">Web · AI · ML</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">stack</dt>
                  <dd className="mt-1 text-foreground">MERN</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">status</dt>
                  <dd className="mt-1 text-foreground">Building</dd>
                </div>
              </dl>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="hover-lift rounded-xl border border-border bg-surface-2/40 p-4"
                  >
                    <s.icon className="h-4 w-4 text-accent" />
                    <p className="mt-3 font-display text-2xl font-semibold text-foreground">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


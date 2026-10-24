
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import {
  Code2,
  Sparkles,
  Trophy,
  GraduationCap,
} from "lucide-react";

const stats = [
  { icon: Code2, label: "Featured Projects", value: "3" },
  { icon: Sparkles, label: "Technologies", value: "10+" },
  { icon: Trophy, label: "Problems Solved", value: "450+" },
  { icon: GraduationCap, label: "Graduation", value: "2027" },
];

export const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="01 / About"
          title="Building ideas into intelligent products."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: About text */}
          <Reveal className="w-full max-w-xl space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              I&apos;m Jay, a Computer Science student specializing in
              Artificial Intelligence, passionate about building full-stack
              applications and AI-powered solutions.
            </p>

            <p>
              From multi-agent systems and RAG pipelines to machine learning
              applications, I enjoy turning complex problems into practical,
              user-focused products.
            </p>

            <p>
              Outside development, I sharpen my problem-solving skills through
              DSA and explore technologies that help me build better software.
            </p>
          </Reveal>

          {/* Right: Developer profile */}
          <Reveal delay={0.1} className="w-full min-w-0">
            <div className="glass w-full rounded-2xl border border-border p-5 sm:p-6">
              {/* Profile header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Jay Varshney
                  </p>

                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    developer-profile.json
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  Open to opportunities
                </span>
              </div>

              {/* Profile details */}
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 font-mono text-xs sm:gap-x-6">
                <div className="min-w-0">
                  <dt className="text-muted-foreground">education</dt>
                  <dd className="mt-1.5 break-words text-foreground">
                    B.Tech CSE (AI)
                  </dd>
                </div>

                <div className="min-w-0">
                  <dt className="text-muted-foreground">graduation</dt>
                  <dd className="mt-1.5 text-foreground">2027</dd>
                </div>

                <div className="min-w-0">
                  <dt className="text-muted-foreground">focus</dt>
                  <dd className="mt-1.5 text-foreground">
                    AI · Full Stack
                  </dd>
                </div>

                <div className="min-w-0">
                  <dt className="text-muted-foreground">currently</dt>
                  <dd className="mt-1.5 text-foreground">
                    Building & Learning
                  </dd>
                </div>
              </dl>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="hover-lift min-w-0 rounded-xl border border-border bg-surface-2/40 p-4 transition-colors hover:border-accent/30 sm:p-5"
                  >
                    <stat.icon className="h-4 w-4 text-accent" />

                    <p className="mt-3 font-display text-2xl font-semibold text-foreground">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

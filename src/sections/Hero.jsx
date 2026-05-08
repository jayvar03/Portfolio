import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Github } from "lucide-react";

const roles = ["Full Stack Developer", "Frontend Engineer", "Problem Solver", "AI Enthusiast"];

export const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">


      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent" />
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
          >
            Jay Varshney
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex h-7 items-center font-mono text-sm text-muted-foreground"
          >
            <span className="mr-2 text-accent">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building clean, scalable web applications with a focus on performance and efficient
            problem-solving through Data Structures and Algorithms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:bg-surface"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>
            <a
              href="https://github.com/jayvar03"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              target="_blank"
            >
              <Github className="h-3.5 w-3.5" /> github.com/jayvar03
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <CodeMockup />
        </motion.div>
      </div>
    </section>
  );
}

const CodeMockup = () => {
  return (
    <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">
          ~/jay_developer.tsx
        </span>
      </div>
      <pre className="overflow-hidden p-5 font-mono text-[12.5px] leading-[1.7] text-muted-foreground">
        {`const developer = {
  name: "Jay Varshney",
  role: "Full Stack Developer",
  stack: ["React", "Node", "Mongo", "AI"],
  focus: "Performance + UX",
  learning: ["ML", "System Design"],
  building: () => "Scalable Products",
};

export default developer;`}
      </pre>
      <div className="border-t border-border bg-surface-2/40 px-5 py-3 font-mono text-[11px] text-muted-foreground">
        <span className="text-accent">$</span> npm run dev
        <span className="ml-2 text-emerald-400/80">ready in 412 ms</span>
      </div>
    </div>
  );
}


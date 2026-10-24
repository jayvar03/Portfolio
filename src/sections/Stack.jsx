
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Code,
  Globe,
  Cpu,
  MessageSquare,
  Terminal,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Layout,
    title: "Frontend",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQL", icon: Database },
      { name: "ChromaDB", icon: Database },
    ],
  },
  {
    icon: Brain,
    title: "AI & Generative AI",
    items: [
      { name: "RAG", icon: Brain },
      { name: "LangChain", slug: "langchain" },
      { name: "LLM Integration", icon: Cpu },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "Machine Learning", icon: Brain },
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    items: [
      { name: "Java", slug: "java" },
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", icon: Database },
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools & CS",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Postman", slug: "postman" },
      { name: "DSA", icon: Code },
      { name: "DBMS", icon: Database },
      { name: "OOP", icon: Terminal },
      { name: "OS", icon: GitBranch },
    ],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="02 / Tech Stack"
          title="Technologies I build with."
          description="From full-stack development to AI-powered applications, these are the tools and fundamentals I work with."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2/60 text-accent transition-colors group-hover:border-accent/30">
                  <c.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {c.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <motion.li
                      key={it.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex cursor-default items-center gap-1.5 rounded-full border border-border bg-surface-2/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent/30 hover:bg-surface-2 hover:text-foreground"
                    >
                      {it.slug ? (
                        <img
                          src={`https://cdn.simpleicons.org/${it.slug}`}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-3.5 w-3.5 object-contain"
                        />
                      ) : (
                        <it.icon className="h-3.5 w-3.5 text-accent/80" />
                      )}

                      {it.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

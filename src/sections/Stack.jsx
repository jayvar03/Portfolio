import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Layout, Server, Database, Wrench, Brain, Code, Globe, Cpu, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Layout,
    title: "Frontend",
    items: [
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "REST APIs", icon: Globe },
      { name: "Auth / JWT", slug: "jsonwebtokens" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "Mongoose", slug: "mongoose" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git & GitHub", slug: "github", color: "white" },
      { name: "Postman", slug: "postman" },
      { name: "Figma", slug: "figma" },
      { name: "VS Code", icon: Code },
    ],
  },
  {
    icon: Brain,
    title: "AI / Learning",
    items: [
      { name: "LLM APIs", icon: Cpu },
      { name: "Prompting", icon: MessageSquare },
      { name: "Vector DBs", icon: Database },
      { name: "DSA", icon: Code },
    ],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="02 / Tech Stack"
          title="Tools I reach for."
          description="A curated set of technologies I use to ship reliable, modern products."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2/60 text-accent transition-colors group-hover:border-accent/30">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{c.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <motion.li
                      key={it.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground bg-surface-2/40 px-3 py-1.5 rounded-full border border-border hover:border-accent/30 hover:bg-surface-2 hover:text-foreground transition-colors cursor-pointer"
                    >
                      {it.slug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${it.slug}${it.color ? `/${it.color}` : ''}`} 
                          alt={it.name} 
                          className="h-3.5 w-3.5 object-contain"
                        />
                      ) : (
                        <it.icon className="h-3.5 w-3.5 text-accent/80 transition-colors" />
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
}


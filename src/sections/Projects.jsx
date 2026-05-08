import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nex.ai — AI SaaS Platform",
    description:
      "An AI-powered SaaS platform for content generation, image creation, and smart productivity tools with authentication, premium plans, and community features.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Clerk", "Gemini API", "Cloudinary"],
    image: "/projects/nexai.png",
    live: "https://nexai-saas.vercel.app/",
    github: "https://github.com/jayvar03/NexAI",
  },
  {
    title: "Anomly — Anonymous Video Chat",
    description:
      "A privacy-focused anonymous video chat platform built with WebRTC and Socket.IO for instant real-time video, audio, and text communication with strangers.",
    tags: ["React", "Node.js", "Express", "Socket.IO", "WebRTC", "Tailwind CSS"],
    image: "/projects/anomly.png",
    live: "https://anomly-chat.vercel.app/",
    github: "https://github.com/jayvar03/Anomly",
  },
  {
   title: "Spokify — AI Speech Coach",
   description:
      "An AI-powered speech coaching platform that provides real-time grammar correction, smart speaking insights, and fluency improvement sessions.",
   tags: ["React", "Node.js", "Express", "Groq API", "Clerk", "Tailwind CSS"],
   image: "/projects/spokify.png",
   live: "https://spokify.vercel.app/",
   github: "https://github.com/jayvar03/Spokify",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="03 / Selected Work"
          title="Things I've built."
          description="A handful of projects I'm proud of — production tools, side experiments and learning platforms."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <div className="hover-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur-xl">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/7] overflow-hidden border-b border-border"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </a>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Project
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-7 w-7 place-items-center rounded-md border border-border transition-colors hover:border-accent/30 hover:text-accent"
              title="View Source"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-7 w-7 place-items-center rounded-md border border-border transition-colors hover:border-accent/30 hover:text-accent"
              title="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.href.slice(1)));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div /> {/* Spacer to maintain layout if needed, or remove justify-between */}

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-active={active === l.href.slice(1)}
                className="link-underline text-lg text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1iJ5iuYPlaTnkwx8l5S6uhHw9WFrNGNtl/view?usp=sharing"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/30 hover:bg-surface"
          target="_blank"
        >
          <FileText className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
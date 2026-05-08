import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="05 / Contact"
          title="Let's build something good."
          description="Open to internships, freelance projects and collaborations. Drop a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@jayvarshney.dev"
                className="mt-2 block font-display text-xl text-foreground transition-colors hover:text-accent"
              >
                jayvarshney30@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/jayvar03" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jayvarshney/" },
                { icon: Mail, label: "Email", href: "mailto:jayvarshney30@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover-lift flex items-center justify-between rounded-xl border border-border bg-surface/50 p-4 backdrop-blur-xl"
                >
                  <span className="flex items-center gap-3 text-sm text-foreground">
                    <s.icon className="h-4 w-4 text-accent" />
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">→</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 2500);
              }}
              className="glass space-y-5 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" placeholder="What's this about?" />
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me a bit about your project…"
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-surface-2/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
              >
                {sent ? "Sent — talk soon" : "Send message"}
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const Field = ({ label, type = "text", placeholder }) => {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-surface-2/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}


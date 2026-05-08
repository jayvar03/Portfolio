import { Reveal } from "./Reveal";

export const SectionHeader = ({ label, title, description }) => {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80">{label}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}


export const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Jay Varshney</p>
      </div>
    </footer>
  );
}


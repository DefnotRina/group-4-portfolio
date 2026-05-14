export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60 backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-16 md:gap-32 px-6 py-16 text-center md:text-left">
        <div className="max-w-xs">
          <div className="font-display text-2xl text-cream">People & Earth Ecosystem</div>
          <p className="mt-3 text-sm text-muted-foreground">
            A digital exhibit documenting our environmental journey and advocacy.
          </p>
        </div>
        <div className="max-w-xs">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Subject</div>
          <p className="mt-3 text-sm text-cream/85">
            People and Earth Ecosystem
            <br />
            School Year 2025–2026
            <br />
            BSCS Group 4
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ckl · Made with care for the Earth.
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "members", label: "Members" },
  { id: "hug", label: "Hug a Tree" },
  { id: "slogan", label: "Slogans" },
  { id: "planting", label: "Planting" },
  { id: "closing", label: "Reflection" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
          scrolled
            ? "glass-strong shadow-soft mx-4 md:mx-auto"
            : "bg-transparent border border-transparent",
        )}
      >
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 text-cream hover:text-glow transition-colors"
        >
          <Leaf className="h-5 w-5 text-accent" />
          <span className="font-display text-lg tracking-wide">Ecosystem</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-cream"
            >
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden rounded-full p-2 text-cream hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-strong border-l border-border w-72">
            <div className="mt-12 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleNav(l.id)}
                  className="rounded-lg px-4 py-3 text-left text-base text-cream/90 hover:bg-accent/10 hover:text-cream transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

import { motion } from "framer-motion";
import { members, type Member } from "@/data/members";

export function SloganGallery({ onOpenMember }: { onOpenMember?: (m: Member) => void }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <motion.button
          key={m.id}
          onClick={() => onOpenMember?.(m)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
          className="group relative overflow-hidden rounded-2xl glass shadow-soft transition-shadow hover:shadow-glow text-left focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <div className="overflow-hidden">
            <img
              src={m.sloganPoster}
              alt={m.sloganTitle}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/50 to-transparent p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">{m.name}</div>
            <div className="mt-1 font-display text-xl text-cream">{m.sloganTitle}</div>
            <div className="mt-2 text-[10px] uppercase tracking-widest text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Click to view full profile
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

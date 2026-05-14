import { motion } from "framer-motion";
import { members } from "@/data/members";

import { Member } from "@/data/members";

export function HugATreeGallery({ onOpenMember }: { onOpenMember?: (m: Member) => void }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <motion.button
          key={m.id}
          onClick={() => onOpenMember?.(m)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
          className="group relative overflow-hidden rounded-2xl glass shadow-elegant text-left cursor-pointer transition-shadow hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <div className="overflow-hidden">
            <motion.img
              src={m.treeHugPhoto}
              alt={`${m.name} hugging a tree`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">{m.name}</div>
            <motion.p
              initial={{ opacity: 0.85 }}
              whileHover={{ opacity: 1 }}
              className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cream/85 line-clamp-3 transition-all"
            >
              {m.treeHugReflection.split(/(\*[^*]+\*)/g).map((part, i) =>
                part.startsWith("*") && part.endsWith("*") ? (
                  <i key={i}>{part.slice(1, -1)}</i>
                ) : (
                  part
                )
              )}
            </motion.p>
            <div className="mt-4 text-[10px] uppercase tracking-widest text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Click to view full profile
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

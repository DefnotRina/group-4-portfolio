import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ActivityCard({
  index,
  icon,
  title,
  description,
  targetId,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  targetId: string;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }
      className="group relative block w-full overflow-hidden rounded-2xl glass p-7 text-left transition-shadow hover:shadow-glow"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-all group-hover:bg-accent/25" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-leaf text-cream shadow-glow">
          {icon}
        </div>
        <h3 className="mt-5 font-display text-2xl text-cream group-hover:text-glow transition-all">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent opacity-70 group-hover:opacity-100 transition-opacity">
          Explore <span aria-hidden>→</span>
        </div>
      </div>
    </motion.button>
  );
}

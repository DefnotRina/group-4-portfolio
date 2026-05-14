import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Member } from "@/data/members";

export function MemberCard({
  member,
  index,
  onOpen,
}: {
  member: Member;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.button
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={onOpen}
        whileTap={{ scale: 0.97 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative block w-full overflow-hidden rounded-2xl glass shadow-elegant text-left"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-mist" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-xs uppercase tracking-[0.25em] text-accent/80">{member.role}</div>
          <div className="mt-1 font-display text-2xl text-cream group-hover:text-glow transition-all">
            {member.name}
          </div>
          <div className="mt-2 text-xs text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            Tap to view outputs →
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/0 group-hover:ring-accent/30 transition-all" />
      </motion.button>
    </motion.div>
  );
}

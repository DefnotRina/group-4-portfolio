import { motion } from "framer-motion";
import { useMemo } from "react";

export function ParticleField({ count = 22 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 18,
        size: 6 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 60,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block rounded-full bg-gradient-leaf blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          initial={{ y: -40, x: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, p.drift, -p.drift, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

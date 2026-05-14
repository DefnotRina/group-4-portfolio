import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ParallaxBg({
  src,
  opacity = 0.35,
  speed = 0.4,
}: {
  src: string;
  opacity?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}%`, `${speed * 50}%`]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          y,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
        }}
        className="absolute inset-x-0 -top-[20%] h-[140%]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--gradient-canopy)] mix-blend-multiply" />
    </div>
  );
}

export function ParallaxItem({
  children,
  range = 60,
  progress,
}: {
  children: ReactNode;
  range?: number;
  progress?: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const local = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = progress ?? local.scrollYProgress;
  const y = useTransform(p, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

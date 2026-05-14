import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { ParallaxBg } from "@/components/Parallax";
import bgForest from "@/assets/bg-forest.jpg";
import { ArrowRight, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "People and Earth Ecosystem — A Portfolio" },
      {
        name: "description",
        content:
          "An immersive digital exhibit by five students reflecting on their journey through environmental advocacy and action.",
      },
      { property: "og:title", content: "People and Earth Ecosystem — A Portfolio" },
      {
        property: "og:description",
        content: "A journey through reflection, advocacy, and environmental action.",
      },
      { property: "og:image", content: bgForest },
      { name: "twitter:image", content: bgForest },
    ],
  }),
  component: Intro,
});

function Intro() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParallaxBg src={bgForest} opacity={0.55} speed={0.2} />
      <ParticleField count={28} />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.015_155)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex items-center gap-3 text-accent"
        >
          <Leaf className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.5em]">An Environmental Exhibit</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] text-cream text-glow md:text-7xl lg:text-8xl"
        >
          People and Earth
          <br />
          <span className="italic text-accent">Ecosystem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          A journey through reflection, advocacy, and environmental action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="mt-12"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full glass-strong px-8 py-4 text-sm uppercase tracking-[0.3em] text-cream shadow-glow transition-all hover:bg-accent/15 hover:shadow-[0_0_80px_-5px_oklch(0.7_0.11_145/0.6)]"
          >
            Enter Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>


      </div>
    </main>
  );
}

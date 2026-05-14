import { motion } from "framer-motion";

export function ClosingSection() {
  return (
    <section id="closing" className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-gradient-mist" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs uppercase tracking-[0.4em] text-accent">A Final Word</div>
          <h2 className="mt-6 font-display text-4xl font-light text-cream md:text-6xl">
            The earth does not belong to us.
            <br />
            <span className="italic text-glow">We belong to it.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every tree we held, every poster we painted, every seedling we placed into the soil was
            a small letter to the future. May whoever finds these letters in our forests, decades
            from now, know that someone, once, chose to care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

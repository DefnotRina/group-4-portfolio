import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { snapshots } from "@/data/snapshots";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export function DocumentaryGallery() {
  const [index, setIndex] = useState(0);

  // Only include general snapshots from the tp docu folder as requested
  const allPhotos = snapshots.map((s, i) => ({ src: s.src, caption: s.caption }));

  const next = () => setIndex((i) => (i + 1) % allPhotos.length);
  const prev = () => setIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);

  return (
    <div className="mx-auto flex justify-center py-20">
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            whileHover="hover"
            className="relative h-80 w-60 md:h-[450px] md:w-[340px] cursor-pointer focus:outline-none"
          >
            {/* The "Fan" of cards */}
            {[2, 1, 0].map((photoIdx, i) => (
              <motion.div
                key={photoIdx}
                variants={{
                  hover: {
                    rotate: (i - 1) * 15,
                    x: (i - 1) * 40,
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }
                }}
                initial={{ rotate: (i - 1) * 5, x: (i - 1) * 5 }}
                className="absolute inset-0 rounded-2xl glass-strong shadow-elegant overflow-hidden border border-white/10"
                style={{ zIndex: 10 - i }}
              >
                <img
                  src={allPhotos[photoIdx % allPhotos.length].src}
                  alt={`Preview ${i}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                
                {i === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="rounded-full bg-accent/30 p-3 backdrop-blur-md mb-2">
                       <ImageIcon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream font-bold bg-black/40 px-2 py-1 rounded">
                      {allPhotos.length} Photos
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
            
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs uppercase tracking-[0.4em] text-accent font-medium opacity-60 group-hover:opacity-100 transition-opacity">
              Open Gallery
            </div>
          </motion.button>
        </DialogTrigger>

        <DialogContent className="glass-strong max-w-[95vw] h-[85vh] md:h-[90vh] border-none p-0 overflow-hidden flex flex-col">
          <DialogTitle className="sr-only">Photo Documentary Gallery</DialogTitle>
          
          <div className="relative flex-1 flex items-center justify-center bg-black/20 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={allPhotos[index].src}
                alt={allPhotos[index].caption}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-h-[75vh] md:max-h-[80vh] w-full object-contain p-4"
              />
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 rounded-full glass p-3 text-cream hover:bg-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 rounded-full glass p-3 text-cream hover:bg-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-background/40 backdrop-blur-xl p-6 md:p-10 border-t border-white/5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1">Moment {index + 1} of {allPhotos.length}</div>
                <p className="text-cream text-lg font-display italic line-clamp-2 md:line-clamp-none">
                  {allPhotos[index].caption}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                {allPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-accent" : "w-3 bg-cream/20 hover:bg-cream/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

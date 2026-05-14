import { useState } from "react";
import { motion } from "framer-motion";
import { Member, members, groupCertificatePages } from "@/data/members";
import { ParallaxBg } from "./Parallax";
import bgCanopy from "@/assets/bg-canopy.jpg";
import { Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DocumentaryGallery } from "./DocumentaryWall";
import { SectionHeading } from "@/components/SectionHeading";

export function TreePlantingSection({ onOpenMember }: { onOpenMember?: (m: Member) => void }) {
  const [certPage, setCertPage] = useState(0);

  const allCertificates = groupCertificatePages.map((src, idx) => ({
    src,
    label: `Group Certificate (Page ${idx + 1})`,
  }));

  return (
    <section id="planting" className="relative py-32">
      <ParallaxBg src={bgCanopy} opacity={0.25} speed={0.5} />

      <div className="container relative mx-auto px-6">
        <SectionHeading
          eyebrow="Activity Three"
          title="Tree Planting"
          subtitle="Documentation of our group participation in mangrove planting and coastal rehabilitation activities."
        />

        {/* Documentary Gallery Preview */}
        <div className="mt-16 mb-24">
          <DocumentaryGallery />
        </div>



        {/* Certificates Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              <h3 className="font-display text-3xl text-cream md:text-4xl">Official Recognition</h3>
            </div>
            <p className="max-w-2xl text-muted-foreground">
              Our project was officially recognized by the local barangay for our contribution to the
              community's reforestation efforts.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group relative overflow-hidden rounded-2xl glass-strong shadow-elegant w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-bark/30 md:aspect-[21/9]">
                    <img
                      src={groupCertificatePages[0]}
                      alt="Group Certificate of Recognition - Page 1"
                      className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-accent">Group & Individual Achievement</div>
                    <h4 className="mt-2 text-xl text-cream">Official Certificates</h4>
                    <div className="mt-2 text-[10px] uppercase tracking-widest text-accent/60 flex items-center gap-1">
                      Click to view all certificates
                    </div>
                  </div>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="glass-strong max-w-5xl max-h-[92vh] overflow-hidden border-border p-6 md:p-10 flex flex-col justify-center">
                <DialogTitle className="sr-only">Official Certificates</DialogTitle>
                <div className="relative overflow-hidden rounded-xl shadow-elegant bg-bark/30 flex items-center justify-center">
                  <img
                    src={allCertificates[certPage].src}
                    alt={allCertificates[certPage].label}
                    className="max-h-[75vh] w-full object-contain"
                  />
                  
                  {certPage > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCertPage(p => p - 1);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-cream hover:bg-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Previous Certificate"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  )}
                  
                  {certPage < allCertificates.length - 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCertPage(p => p + 1);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-cream hover:bg-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Next Certificate"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  )}

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-cream shadow-soft whitespace-nowrap text-center">
                    <div className="font-medium">{allCertificates[certPage].label}</div>
                    <div className="mt-0.5 text-[10px] text-cream/70">
                      {certPage + 1} of {allCertificates.length}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Individual Reflections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <h3 className="font-display text-3xl text-cream md:text-4xl">Personal Reflections</h3>
          <p className="max-w-2xl text-muted-foreground">
            The impact of our work, shared through the individual voices of our team members.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, idx) => (
            <motion.button
              key={m.id}
              onClick={() => onOpenMember?.(m)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex w-full flex-col p-0 overflow-hidden rounded-xl glass shadow-soft text-left cursor-pointer transition-shadow hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {m.soloCertificate && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-accent/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-background shadow-glow flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Solo Planting
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden bg-bark/30">
                <img
                  src={m.plantingPhoto}
                  alt={`${m.name} planting`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-accent">{m.name}</div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cream/70 italic line-clamp-4">
                  "{m.plantingReflection}"
                </p>
                {m.soloCertificate && (
                  <div className="mt-4 flex items-center gap-2 text-[10px] text-accent/80 uppercase tracking-widest border-t border-accent/20 pt-4">
                    <Award className="h-3 w-3" />
                    Additional Individual Certificate
                  </div>
                )}
                <div className="mt-4 text-[10px] uppercase tracking-widest text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Click to view full profile
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { TreeDeciduous, Palette, Sprout } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ParticleField } from "@/components/ParticleField";
import { ParallaxBg } from "@/components/Parallax";
import { SectionHeading } from "@/components/SectionHeading";
import { ActivityCard } from "@/components/ActivityCard";
import { MemberCard } from "@/components/MemberCard";
import { MemberModal } from "@/components/MemberModal";
import { HugATreeGallery } from "@/components/HugATreeGallery";
import { SloganGallery } from "@/components/SloganGallery";
import { TreePlantingSection } from "@/components/TreePlantingSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";
import { members, type Member } from "@/data/members";
import bgForest from "@/assets/bg-forest.jpg";
import bgCanopy from "@/assets/bg-canopy.jpg";
import groupPhoto from "@/assets/group-photo.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — People and Earth Ecosystem" },
      {
        name: "description",
        content:
          "Group activities, individual reflections, and environmental advocacy from five students for the People and Earth Ecosystem subject.",
      },
      { property: "og:title", content: "Portfolio — People and Earth Ecosystem" },
      {
        property: "og:description",
        content:
          "An immersive exhibit of tree hugging reflections, advocacy posters, and tree planting documentation.",
      },
      { property: "og:image", content: bgCanopy },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState<{ member: Member; activity: "all" | "hug" | "slogan" | "planting" } | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleField count={20} />
      <Navbar />

      {/* HOME / HERO */}
      <section id="home" className="relative flex min-h-screen items-center pt-28">
        <ParallaxBg src={bgForest} opacity={0.45} speed={0.3} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_20%,oklch(0.08_0.015_155)_90%)]" />

        <div className="container relative mx-auto grid items-center gap-12 px-6 py-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-accent">
              <span className="h-px w-10 bg-accent/60" />
              <span className="text-xs uppercase tracking-[0.4em]">Group 4 Portfolio</span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] text-cream md:text-7xl">
              Ecosystems, People,
              <br />
              <span className="italic text-glow">and Progress.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              A collective compilation of activities and reflections for the People and Earth
              Ecosystem (PEE) course, documenting our engagement with environmental advocacy
              and conservation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("members")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full glass-strong px-6 py-3 text-sm uppercase tracking-[0.25em] text-cream hover:bg-accent/15 transition-all"
              >
                Meet the Group
              </button>
              <button
                onClick={() => document.getElementById("planting")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-accent/30 px-6 py-3 text-sm uppercase tracking-[0.25em] text-accent hover:bg-accent/10 transition-all"
              >
                See the Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl glass-strong shadow-elegant">
              <img
                src={groupPhoto}
                alt="The group in the forest"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-accent">Our Group</div>
                <p className="mt-1 font-display text-xl text-cream">PEE Course Documentation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACTIVITY CARDS SECTION */}
      <section className="relative -mt-16 z-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ActivityCard
              index={0}
              icon={<TreeDeciduous className="h-5 w-5" />}
              title="Hug a Tree"
              description="Individual reflections on nature connectivity and awareness."
              targetId="hug"
            />
            <ActivityCard
              index={1}
              icon={<Palette className="h-5 w-5" />}
              title="Slogan Activity"
              description="Creative advocacy through posters and slogan design."
              targetId="slogan"
            />
            <ActivityCard
              index={2}
              icon={<Sprout className="h-5 w-5" />}
              title="Tree Planting"
              description="Group participation in mangrove planting and rehabilitation."
              targetId="planting"
            />
          </div>
        </div>
      </section>



      {/* MEMBERS */}
      <section id="members" className="relative py-32">
        <div className="container relative mx-auto px-6">
          <SectionHeading
            eyebrow="The Group"
            title="Project Members"
            subtitle="Tap any member to see their reflections, posters, and individual achievements."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {members.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} onOpen={() => setActive({ member: m, activity: "all" })} />
            ))}
          </div>
        </div>
      </section>

      {/* HUG A TREE */}
      <section id="hug" className="relative py-32">
        <ParallaxBg src={bgCanopy} opacity={0.18} speed={0.4} />
        <div className="container relative mx-auto px-6">
          <SectionHeading
            eyebrow="Activity One"
            title="Hug a Tree"
            subtitle="A set of individual reflections documenting our connection with trees in the urban environment."
          />
          <div className="mt-16">
            <HugATreeGallery onOpenMember={(m) => setActive({ member: m, activity: "hug" })} />
          </div>
        </div>
      </section>

      {/* SLOGAN */}
      <section id="slogan" className="relative py-32">
        <div className="container relative mx-auto px-6">
          <SectionHeading
            eyebrow="Activity Two"
            title="Slogan Posters"
            subtitle="Digital posters and slogans created to advocate for environmental conservation and climate action."
          />
          <div className="mt-16">
            <SloganGallery onOpenMember={(m) => setActive({ member: m, activity: "slogan" })} />
          </div>
        </div>
      </section>

      {/* PLANTING */}
      <TreePlantingSection onOpenMember={(m) => setActive({ member: m, activity: "planting" })} />

      {/* CLOSING */}
      <ClosingSection />

      <Footer />

      <MemberModal member={active?.member || null} activity={active?.activity || "all"} open={!!active} onOpenChange={(v) => !v && setActive(null)} />
    </div>
  );
}

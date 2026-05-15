import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import type { Member } from "@/data/members";
import { TreeDeciduous, Palette, Sprout, Award } from "lucide-react";

export function MemberModal({
  member,
  activity = "all",
  open,
  onOpenChange,
}: {
  member: Member | null;
  activity?: "all" | "hug" | "slogan" | "planting";
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!member) return null;

  const showAll = activity === "all";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong max-w-4xl max-h-[90vh] overflow-y-auto border-border p-0">
        <DialogTitle className="sr-only">{member.name}'s Outputs</DialogTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="relative overflow-hidden">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-56 w-full object-cover md:h-72"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">{member.role}</div>
              <h3 className="mt-1 font-display text-3xl text-cream md:text-4xl">{member.name}</h3>
            </div>
          </div>

          <div className="space-y-10 p-6 md:p-8">
            {(showAll || activity === "hug") && (
              <Output
                icon={<TreeDeciduous className="h-4 w-4" />}
                title="Hug a Tree"
                image={member.treeHugPhoto}
                text={member.treeHugReflection}
              />
            )}
            {(showAll || activity === "slogan") && (
              <Output
                icon={<Palette className="h-4 w-4" />}
                title={member.sloganTitle}
                image={member.sloganPoster}
                text={member.sloganExplanation}
              />
            )}
            {(showAll || activity === "planting") && (
              <Output
                icon={<Sprout className="h-4 w-4" />}
                title={member.soloCertificate ? "Tree Planting (Solo Activity)" : "Tree Planting"}
                image={member.plantingPhoto}
                text={member.plantingReflection}
                soloCert={member.soloCertificate}
              />
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}


function Output({
  icon,
  title,
  image,
  text,
  soloCert,
}: {
  icon: React.ReactNode;
  title: string;
  image: string;
  text: string;
  soloCert?: string;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-xl border border-border shadow-soft">
            <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
            {icon} {title}
          </div>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cream/85 md:text-base">
            {text.split(/(\*[^*]+\*)/g).map((part, i) =>
              part.startsWith("*") && part.endsWith("*") ? (
                <i key={i}>{part.slice(1, -1)}</i>
              ) : (
                part
              )
            )}
          </p>
        </div>
      </div>
      
      {soloCert && (
        <div className="rounded-xl glass p-4 border border-accent/20">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent mb-3">
            <Award className="h-3 w-3" /> Solo Achievement Certificate
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-lg bg-bark/30">
            <img src={soloCert} alt="Solo Certificate" className="h-full w-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

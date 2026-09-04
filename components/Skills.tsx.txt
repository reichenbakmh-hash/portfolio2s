import RevealSection from "./RevealSection";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <RevealSection id="competences" className="relative bg-white/60 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl text-ink">Compétences</h2>
        <p className="mt-3 max-w-md font-body text-inkfade">
          Ce que je sais faire, et ce que j&apos;aime approfondir jour après jour.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group cursor-default rounded-2xl border border-plum/20 bg-cream px-5 py-3 font-body text-sm text-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-mauveblush hover:bg-blush/15"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

import RevealSection from "./RevealSection";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <RevealSection id="parcours" className="relative mx-auto max-w-5xl px-6 py-28">
      <h2 className="font-display text-4xl text-ink">Expériences professionnelles</h2>

      <div className="relative mt-14 border-l border-plum/25 pl-8">
        {experiences.map((exp, i) => (
          <div key={exp.role} className={`relative ${i !== experiences.length - 1 ? "pb-14" : ""}`}>
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-mauveblush" />
            <p className="font-body text-sm text-plum">{exp.period}</p>
            <h3 className="mt-1 font-display text-2xl text-ink">{exp.role}</h3>
            <p className="mt-1 font-body text-sm font-semibold text-inkfade">{exp.place}</p>
            <p className="mt-3 max-w-xl font-body text-inkfade">{exp.text}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

import RevealSection from "./RevealSection";
import { interests, languages, qualities, quotes } from "@/lib/data";

export default function Qualities() {
  return (
    <RevealSection className="relative mx-auto max-w-5xl px-6 py-28">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl text-ink">Qualités</h2>
          <div className="mt-8 flex flex-col gap-5">
            {qualities.map((q) => (
              <div key={q.label}>
                <p className="font-display text-xl text-mauveblush">{q.label}</p>
                <p className="mt-1 font-body text-sm text-inkfade">{q.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-script text-xl italic text-plum">« {quotes[1]} »</p>
        </div>

        <div>
          <h2 className="font-display text-4xl text-ink">Langues</h2>
          <div className="mt-8 flex flex-col gap-5">
            {languages.map((lang) => (
              <div key={lang.label}>
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-ink">{lang.label}</span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-8 rounded-full ${
                        i < lang.level ? "bg-mauveblush" : "bg-plum/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-2xl text-ink">Intérêts</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-sand/60 px-4 py-2 font-body text-sm text-ink"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

import Image from "next/image";
import RevealSection from "./RevealSection";
import { profile, quotes } from "@/lib/data";

export default function About() {
  return (
    <RevealSection id="a-propos" className="relative mx-auto max-w-5xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto h-64 w-56 sm:h-72 sm:w-64">
          <div aria-hidden="true" className="absolute -inset-3 rounded-blob3 bg-sand/50" />
          <div className="relative h-full w-full overflow-hidden rounded-blob3 petal-shadow">
            <Image
              src="/images/profile.png"
              alt="Photo de Stéphie"
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl text-ink">Qui suis-je&nbsp;?</h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-inkfade">
            {profile.about}
          </p>
          <p className="mt-6 font-script text-xl italic text-plum">
            « {quotes[0]} »
          </p>

          <a
            href="/cv.pdf"
            download
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-plum/30 px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-plum/10"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RevealSection from "./RevealSection";
import { education } from "@/lib/data";

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <RevealSection id="formation" className="relative bg-white/60 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl text-ink">Formation</h2>

        <div className="mt-10 flex flex-col gap-3">
          {education.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.degree}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-mauveblush bg-blush/10" : "border-plum/20 bg-cream"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ink">
                    {item.degree}
                    {item.current && (
                      <span className="ml-2 font-body text-xs font-semibold text-mauveblush">
                        en cours
                      </span>
                    )}
                  </span>
                  <span className="font-body text-sm text-plum">{item.period}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 font-body text-inkfade">{item.school}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

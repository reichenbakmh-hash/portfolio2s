"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile, typingWords } from "@/lib/data";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingWords[wordIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % typingWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex]);

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-[420px] w-[420px] rounded-blob1 bg-sand/60 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 h-[280px] w-[280px] rounded-blob2 bg-plum/20"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-script text-2xl italic text-plum"
          >
            Bienvenue sur mon univers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-3 font-display text-6xl leading-[1.05] text-ink sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 font-body text-lg text-inkfade"
          >
            {profile.study} · {profile.personality}
          </motion.p>

          <div className="mt-6 h-8 font-body text-xl text-mauveblush">
            {display}
            <span className="animate-blink">|</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-mauveblush px-7 py-3 font-body text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(232,160,191,0.8)] transition-transform hover:-translate-y-0.5"
            >
              Me contacter
            </a>
            <a
              href="#a-propos"
              className="rounded-full border border-plum/40 px-7 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-plum/10"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-blob2 bg-blush/25"
          />
          <div className="relative h-full w-full overflow-hidden rounded-blob1 petal-shadow">
            <Image
              src="/images/profile-square.jpg"
              alt="Portrait de Stéphie Ramangalahy"
              fill
              priority
              sizes="320px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#a-propos"
        aria-label="Découvrir la suite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-body text-xs tracking-wide text-inkfade/70">Découvrir</span>
        <span className="h-9 w-[1px] animate-drift bg-plum/40" />
      </motion.a>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import RevealSection from "./RevealSection";
import { profile } from "@/lib/data";

const FORM_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <RevealSection id="contact" className="relative bg-white/60 py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-4xl text-ink">Contact</h2>
          <p className="mt-4 max-w-sm font-body text-inkfade">
            Une opportunité, une question, une envie d&apos;échanger&nbsp;? J&apos;y répondrai avec plaisir.
          </p>

          <div className="mt-8 flex flex-col gap-3 font-body text-sm text-inkfade">
            <p>{profile.location}</p>
            <p>{profile.phone}</p>
            <a href={`mailto:${profile.email}`} className="text-mauveblush hover:underline">
              {profile.email}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="rounded-2xl border border-plum/25 bg-cream px-5 py-3 font-body text-ink placeholder:text-inkfade/60 focus:border-mauveblush"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="rounded-2xl border border-plum/25 bg-cream px-5 py-3 font-body text-ink placeholder:text-inkfade/60 focus:border-mauveblush"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Votre message"
            className="rounded-2xl border border-plum/25 bg-cream px-5 py-3 font-body text-ink placeholder:text-inkfade/60 focus:border-mauveblush"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-fit rounded-full bg-mauveblush px-8 py-3 font-body text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(232,160,191,0.8)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          </button>

          {status === "success" && (
            <p className="font-body text-sm text-plum">Message envoyé, merci beaucoup&nbsp;!</p>
          )}
          {status === "error" && (
            <p className="font-body text-sm text-red-400">
              Une erreur est survenue. Réessaie ou écris directement à {profile.email}.
            </p>
          )}
        </form>
      </div>
    </RevealSection>
  );
}

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-plum/15 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center font-body text-sm text-inkfade">
        <p className="font-display text-lg text-ink">
          Stéphie<span className="text-mauveblush">.</span>
        </p>
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Fait avec douceur.
        </p>
      </div>
    </footer>
  );
}

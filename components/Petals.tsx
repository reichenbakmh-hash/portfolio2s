const petals = [
  { top: "8%", left: "6%", size: 18, anim: "animate-drift", delay: "0s", opacity: 0.5 },
  { top: "22%", left: "88%", size: 24, anim: "animate-driftSlow", delay: "1.2s", opacity: 0.4 },
  { top: "48%", left: "3%", size: 14, anim: "animate-driftSlow", delay: "0.6s", opacity: 0.45 },
  { top: "63%", left: "92%", size: 20, anim: "animate-drift", delay: "2s", opacity: 0.4 },
  { top: "80%", left: "10%", size: 16, anim: "animate-drift", delay: "0.4s", opacity: 0.5 },
  { top: "90%", left: "80%", size: 22, anim: "animate-driftSlow", delay: "1.6s", opacity: 0.35 }
];

export default function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-blush ${p.anim}`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
}

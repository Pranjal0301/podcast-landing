"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-[1180px]">
      <div
        className="flex items-center justify-between rounded-full px-6 py-2.5"
        style={{
          background: "rgba(12,13,20,0.7)",
          backdropFilter: "blur(30px) saturate(1.5)",
          border: "1px solid var(--border)",
        }}
      >
        <a
          href="#"
          className="font-extrabold text-[1.05rem] tracking-tight"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text)" }}
        >
          Prime Craft <span style={{ color: "var(--blue-bright)" }}>Media</span>
        </a>

        <div
          className="hidden md:flex gap-1 items-center rounded-full px-1.5 py-1"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border)",
          }}
        >
          {["Case Studies", "Services", "How It Works", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[0.8rem] font-medium px-4 py-1.5 rounded-full transition-all hover:bg-white/[0.04]"
              style={{ color: "var(--text-muted)" }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#book"
          className="text-[0.82rem] font-bold px-5 py-2.5 rounded-full text-white transition-all hover:shadow-[0_0_28px_rgba(79,109,245,0.4)]"
          style={{ background: "var(--blue)" }}
        >
          Talk to Us
        </a>
      </div>
    </nav>
  );
}

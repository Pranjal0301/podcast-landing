"use client";

const stats = [
  {
    client: "Beyond the Arches Podcast",
    number: "38.5K",
    label: "views in 28 days. New patients calling in from clips they saw on Instagram.",
    span: true,
  },
  {
    client: "Dr. Avi Patel",
    number: "2K → 48K",
    label: "The audience that now sees him as the go-to in his specialty.",
  },
  {
    client: "Dr. Ellie Halibian",
    number: "100K+",
    label: "views on clips. Referring dentists reaching out after watching.",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-36 pb-20 relative overflow-hidden">
      {/* Glow orbs */}
      <div
        className="absolute -top-[30%] -right-[10%] w-[900px] h-[900px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,109,245,0.08) 0%, rgba(59,79,212,0.03) 35%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-[35%] -left-[12%] w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,109,245,0.05) 0%, transparent 50%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-[30%] left-1/2 w-[500px] h-[400px] pointer-events-none animate-breathe"
        style={{
          background: "radial-gradient(ellipse, rgba(107,133,255,0.04) 0%, transparent 50%)",
          filter: "blur(40px)",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-7 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="animate-fade-in inline-flex items-center gap-2 px-[18px] py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-wider mb-7"
              style={{
                background: "rgba(79,109,245,0.08)",
                border: "1px solid rgba(79,109,245,0.12)",
                color: "var(--blue-electric)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-glow"
                style={{
                  background: "var(--blue-bright)",
                  boxShadow: "0 0 10px var(--blue-bright), 0 0 25px rgba(79,109,245,0.3)",
                }}
              />
              We Only Work With Healthcare
            </div>

            <h1
              className="animate-fade-in-1 text-[clamp(2.8rem,5vw,4.4rem)] leading-[1.06] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              You started a podcast to build{" "}
              <em className="gradient-text italic">authority.</em>
              <br />
              Not to chase <em className="gradient-text italic">followers.</em>
            </h1>

            <p
              className="animate-fade-in-2 text-[1.02rem] leading-[1.75] max-w-[480px] mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              We&apos;ve worked exclusively with physicians, dentists, and healthcare
              leaders. We know you&apos;re busy. We know vanity metrics don&apos;t pay the
              bills. So we focus on what actually matters: referrals, patient trust,
              and becoming the name your industry thinks of first.
            </p>

            <div className="animate-fade-in-3 flex gap-3.5 items-center flex-wrap">
              <a
                href="#book"
                className="inline-flex items-center gap-2.5 px-[30px] py-[15px] rounded-full text-white font-bold text-[0.88rem] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,109,245,0.35),0_8px_24px_rgba(79,109,245,0.2)]"
                style={{ background: "var(--blue)" }}
              >
                Get Your Free Podcast Audit
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full font-semibold text-[0.88rem] transition-all hover:border-white/20 hover:bg-white/[0.05]"
                style={{
                  color: "var(--text)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                See the Results
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-4 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[20px] p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(79,109,245,0.06)] group ${
                  s.span ? "col-span-2" : ""
                }`}
                style={{
                  background: "var(--bg-card)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200px] h-[160px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: "radial-gradient(ellipse, rgba(79,109,245,0.08) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="text-[0.62rem] font-bold uppercase tracking-widest mb-2.5"
                  style={{ color: "var(--text-dim)" }}
                >
                  {s.client}
                </div>
                <div
                  className="gradient-text text-[2.4rem] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {s.number}
                </div>
                <div className="text-[0.82rem] leading-relaxed relative" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

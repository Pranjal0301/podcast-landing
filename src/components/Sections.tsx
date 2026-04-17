"use client";
import Reveal from "./Reveal";

/* ===== LOGO BAR ===== */
export function LogoBar() {
  const logos = ["3D Dentists", "The Lifestyle Practice", "Beyond the Arches", "ASAP Pathway", "Done In One", "Yonkers Ave Dental"];
  return (
    <section className="py-11 relative z-[1]" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--text-dim)" }}>
          We&apos;ve worked with healthcare professionals. Only healthcare professionals.
        </p>
        <div className="flex justify-center items-center gap-9 flex-wrap">
          {logos.map((l) => (
            <span key={l} className="font-bold text-[0.86rem] opacity-30 hover:opacity-60 transition-opacity" style={{ color: "var(--text-muted)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== METRIC BAR ===== */
export function MetricBar() {
  const metrics = [
    { num: "50", suffix: "+", label: "Healthcare Clients" },
    { num: "95", suffix: "%", label: "Client Retention" },
    { num: "3", suffix: "M+", label: "Content Views" },
    { num: "100", suffix: "%", label: "Healthcare Focus" },
  ];
  return (
    <section className="py-14 relative z-[1]" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={i} className="text-center py-4 relative">
              {i < metrics.length - 1 && (
                <div className="hidden md:block absolute right-0 top-[20%] bottom-[20%] w-px" style={{ background: "var(--border)" }} />
              )}
              <div className="text-[2.6rem] leading-none mb-1.5" style={{ fontFamily: "var(--font-serif)" }}>
                {m.num}<span style={{ color: "var(--blue-bright)" }}>{m.suffix}</span>
              </div>
              <div className="text-[0.7rem] font-semibold uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SECTION HEADER ===== */
function SectionHeader({ tag, title, description }: { tag: string; title: string; description?: string }) {
  return (
    <Reveal className="text-center max-w-[680px] mx-auto mb-[72px]">
      <span className="section-tag inline-flex items-center text-[0.65rem] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--blue-bright)" }}>
        {tag}
      </span>
      <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.2] tracking-tight mb-4" style={{ fontFamily: "var(--font-serif)" }}>
        {title}
      </h2>
      {description && <p className="text-[0.96rem] leading-[1.7]" style={{ color: "var(--text-muted)" }}>{description}</p>}
    </Reveal>
  );
}

/* ===== GLASS CARD ===== */
function GlassCard({ children, className = "", glowPosition = "top" }: { children: React.ReactNode; className?: string; glowPosition?: "top" | "bottom" | "right" }) {
  const glowStyles: Record<string, string> = {
    top: "top-[-60%] left-1/2 -translate-x-1/2",
    bottom: "bottom-[-50%] left-1/2 -translate-x-1/2",
    right: "bottom-[-50%] right-[-20%]",
  };
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(79,109,245,0.05)] group ${className}`}
      style={{ background: "var(--bg-card)", backdropFilter: "blur(12px)", border: "1px solid var(--border)" }}
    >
      <div
        className={`absolute w-[200px] h-[200px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 ${glowStyles[glowPosition]}`}
        style={{ background: "radial-gradient(circle, rgba(79,109,245,0.06) 0%, transparent 55%)" }}
      />
      {children}
    </div>
  );
}

/* ===== PROBLEM ===== */
export function Problem() {
  const pains = [
    { icon: "⏰", title: "You're between patients, not between posts", desc: "Your days are full. Surgeries, consults, case reviews. The idea of clipping episodes, writing hooks, and scheduling posts on top of that? That's not realistic. And you know it." },
    { icon: "📊", title: "Follower counts don't book consultations", desc: "You've seen other doctors chase likes and go viral with dance trends. That's not you. You need the right 500 people seeing your content, not the wrong 50,000. You need referral partners, not random followers." },
    { icon: "🎯", title: "Your expertise deserves better distribution", desc: "Every episode you record has insights that could change how patients make decisions, how peers view your work, and how your name travels in the industry. But right now, most of that value disappears after upload day." },
  ];
  return (
    <section className="py-[120px] relative z-[1]">
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader
          tag="We Get It"
          title="You didn't go through years of training to become a content creator."
          description="You started your podcast because you have clinical insights worth sharing. Because you wanted to build authority in your specialty, attract better referrals, and give patients a reason to trust you before they ever walk through the door. Not to learn Instagram algorithms."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="p-8">
                <div
                  className="w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-5 text-lg"
                  style={{ background: "linear-gradient(135deg, rgba(79,109,245,0.12), rgba(79,109,245,0.04))", border: "1px solid rgba(79,109,245,0.08)" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-[0.96rem] font-bold mb-2.5">{p.title}</h3>
                <p className="text-[0.86rem] leading-[1.65]" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SERVICES ===== */
export function Services() {
  const services = [
    { num: "01", title: "Podcast Packaging & Distribution", desc: "You record the conversation. We handle everything after. Full production, show notes, distribution across every platform. Your only job is showing up and being the expert you already are." },
    { num: "02", title: "Clinical Clip Strategy", desc: 'We know which moments resonate with patients and which ones earn respect from peers. We pull the clips that position you as the authority, not the ones that just get cheap engagement.' },
    { num: "03", title: "Referral-Driven Social Growth", desc: 'We don\'t chase follower counts. We build the kind of presence that makes referring physicians confident sending patients your way. The kind where colleagues say "I saw your post" at the next conference.' },
    { num: "04", title: "Physician Personal Brand", desc: "Your CV speaks to committees. Your personal brand speaks to patients, referral partners, and the industry. We build the public-facing reputation that matches the clinical work you've already done." },
    { num: "05", title: "Targeted Paid Amplification", desc: "When a piece of content is working organically, we put budget behind it to reach the exact patient demographic or professional audience that moves the needle for your practice." },
    { num: "06", title: "Content-to-Consultation Funnels", desc: "The gap between someone watching your clip and someone booking a consultation? That's where most healthcare content fails. We build the bridge — landing pages, lead capture, and follow-up systems that convert attention into appointments." },
  ];
  return (
    <section id="services" className="py-[120px] relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader
          tag="What We Actually Do"
          title="We handle the content. You stay focused on patient care."
          description="We've built these systems specifically for healthcare professionals. Not tech startups, not lifestyle influencers. Doctors, dentists, and clinicians who need their expertise to travel further than the waiting room."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <GlassCard className="p-[34px_26px]" glowPosition="right">
                <div className="gradient-text-dim text-[2.8rem] leading-none mb-3.5" style={{ fontFamily: "var(--font-serif)" }}>{s.num}</div>
                <h3 className="text-[1rem] font-bold mb-3">{s.title}</h3>
                <p className="text-[0.86rem] leading-[1.65]" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== MID CTA ===== */
export function MidCta() {
  return (
    <section className="py-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--indigo) 0%, var(--blue) 50%, #5b78f5 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 50%)" }} />
      <div className="max-w-[1180px] mx-auto px-7 relative z-[1]">
        <h2 className="text-[clamp(1.6rem,2.8vw,2.2rem)] text-white leading-[1.3] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
          We don&apos;t report vanity metrics.<br />We report patients booked and referrals earned.
        </h2>
        <p className="text-white/80 text-[0.96rem] mb-7">
          20 minutes. We&apos;ll audit your podcast and show you exactly what&apos;s being left on the table.
        </p>
        <a href="#book" className="inline-flex items-center gap-2 bg-white px-8 py-3.5 rounded-full font-bold text-[0.88rem] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]" style={{ color: "var(--indigo)" }}>
          Book Your Free Audit
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </a>
      </div>
    </section>
  );
}

/* ===== CASE STUDIES ===== */
export function CaseStudies() {
  const cases = [
    { metric: "24x", metricLabel: "Follower Growth", name: "Dr. Avi Patel", role: "3D Dentists / The Lifestyle Practice", results: [["Instagram", "2K → 48K"], ["YouTube", "300 → 13K subs"], ["Timeline", "~8 months"]] },
    { metric: "100K+", metricLabel: "Views per Clip", name: "Dr. Ellie Halibian", role: "Dental Specialist & Content Creator", results: [["Clip performance", "20K–100K+ views"], ["Hook rework", "Complete overhaul"], ["Viral clips", "Multiple"]] },
    { metric: "38.5K", metricLabel: "Views in 28 Days", name: "Beyond the Arches", role: "Dental Implant Podcast & Brand", results: [["Reel views", "10K+ per reel"], ["Strategy", "Hook reworks"], ["First month", "38.5K total views"]] },
  ];
  return (
    <section id="case-studies" className="py-[120px] relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader
          tag="Case Studies"
          title="Healthcare professionals we've worked with. Not hypotheticals."
          description="Every client here is a practicing clinician. We understand the compliance considerations, the patient sensitivity, and the professional standards your content needs to meet."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="rounded-[22px] overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(79,109,245,0.04)]"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div className="h-[190px] flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0e1018, var(--bg))" }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(79,109,245,0.12) 0%, rgba(59,79,212,0.04) 40%, transparent 65%)" }} />
                  <div className="relative z-[2] text-center">
                    <div className="gradient-text text-[3rem] leading-none" style={{ fontFamily: "var(--font-serif)" }}>{c.metric}</div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--text-dim)" }}>{c.metricLabel}</div>
                  </div>
                </div>
                <div className="p-[24px_22px]">
                  <div className="font-bold text-[0.96rem] mb-0.5">{c.name}</div>
                  <div className="text-[0.72rem] mb-4" style={{ color: "var(--text-dim)" }}>{c.role}</div>
                  {c.results.map(([label, value], ri) => (
                    <div key={ri} className="flex justify-between items-center py-2.5" style={{ borderBottom: ri < c.results.length - 1 ? "1px solid var(--border)" : "none" }}>
                      <span className="text-[0.8rem]" style={{ color: "var(--text-muted)" }}>{label}</span>
                      <span className="font-bold text-[0.82rem]" style={{ color: "var(--blue-bright)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIAL ===== */
export function Testimonial() {
  return (
    <section className="py-[100px] relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(79,109,245,0.04) 0%, transparent 50%)" }} />
      <div className="max-w-[1180px] mx-auto px-7">
        <Reveal className="max-w-[700px] mx-auto text-center relative">
          <div className="gradient-text text-[7rem] leading-[0.3] mb-7 opacity-[0.15]" style={{ fontFamily: "var(--font-serif)" }}>&ldquo;</div>
          <p className="text-[clamp(1.12rem,2vw,1.45rem)] leading-[1.65] mb-8 italic" style={{ fontFamily: "var(--font-serif)" }}>
            I was skeptical because most agencies don&apos;t understand healthcare. They want you to do trending audio and point at things. These guys understood from day one that my content needs to build clinical credibility, not just get views. The referrals I&apos;m getting now from other dentists who found me through Instagram? That never happened before.
          </p>
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[0.85rem]" style={{ background: "linear-gradient(135deg, var(--blue), var(--indigo))", boxShadow: "0 0 20px rgba(79,109,245,0.2)" }}>AP</div>
            <div className="text-left">
              <strong className="block text-[0.86rem]">Dr. Avi Patel</strong>
              <span className="text-[0.72rem]" style={{ color: "var(--text-dim)" }}>3D Dentists / The Lifestyle Practice</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===== PROCESS ===== */
export function Process() {
  const steps = [
    { num: "01", title: "Free Audit", desc: "We review your current podcast, social presence, and competitive landscape. You get a clear picture of what's working, what's not, and where the growth is." },
    { num: "02", title: "Strategy", desc: "We build a plan around your clinical specialty, your patient demographic, and the professional reputation you want to build. Not a generic template." },
    { num: "03", title: "We Take Over", desc: "Production, clipping, social, distribution. You keep seeing patients. We keep building your presence. One check-in per week, that's it." },
    { num: "04", title: "Measurable Growth", desc: "New patient inquiries, referral partner engagement, consultation bookings. We track what actually impacts your practice, not just what looks good on a dashboard." },
  ];
  return (
    <section id="how-it-works" className="py-[120px] relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader
          tag="How It Works"
          title="We designed this to respect your time."
          description='You&apos;re running a practice. You don&apos;t have 3 hours a week to "review content calendars." Here&apos;s how we keep your involvement to the absolute minimum.'
        />
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {steps.map((s, i) => (
              <GlassCard key={i} className="p-[30px_22px] text-center">
                <div className="gradient-text-dim text-[3rem] leading-none mb-3.5" style={{ fontFamily: "var(--font-serif)" }}>{s.num}</div>
                <h4 className="text-[0.9rem] font-bold mb-2.5">{s.title}</h4>
                <p className="text-[0.82rem] leading-[1.6]" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===== AUDIENCE ===== */
export function Audience() {
  const audiences = [
    { icon: "🏥", title: "Physicians & Specialists with Podcasts", desc: "You started the podcast to share clinical perspectives, attract referrals, and build thought leadership. We make sure the right people actually hear it." },
    { icon: "🦷", title: "DSOs & Multi-Location Dental Groups", desc: "You have 10, 50, 200 doctors across locations. Each one has expertise worth surfacing. We turn that into a content system that builds authority across your entire network." },
    { icon: "🧬", title: "Healthcare Educators & Thought Leaders", desc: "CME speakers, published researchers, clinical trainers. Your knowledge shapes how other professionals practice. We make sure it reaches them outside the lecture hall." },
  ];
  return (
    <section className="py-[120px] relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <SectionHeader tag="Who This Is For" title="We work with clinicians who want to be known for their work. Not their TikTok." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {audiences.map((a, i) => (
            <Reveal key={i} delay={i * 100}>
              <GlassCard className="p-[34px_26px] text-center" glowPosition="bottom">
                <div className="text-[1.8rem] mb-4">{a.icon}</div>
                <h3 className="text-[0.96rem] font-bold mb-2.5">{a.title}</h3>
                <p className="text-[0.86rem] leading-[1.6]" style={{ color: "var(--text-muted)" }}>{a.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== FINAL CTA ===== */
export function FinalCta() {
  return (
    <section id="book" className="py-[140px] text-center relative overflow-hidden z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(79,109,245,0.08) 0%, rgba(59,79,212,0.03) 35%, transparent 55%)" }} />
      <div className="max-w-[1180px] mx-auto px-7 relative">
        <h2 className="text-[clamp(2rem,3.8vw,3rem)] leading-[1.2] mb-4.5" style={{ fontFamily: "var(--font-serif)" }}>
          Your patients are searching for someone they trust.
          <br />
          <em className="gradient-text italic">Make sure they find you.</em>
        </h2>
        <p className="max-w-[500px] mx-auto text-[1rem] leading-[1.65] mb-9" style={{ color: "var(--text-muted)" }}>
          20 minutes. No pitch deck, no pressure. Just a straightforward conversation about your podcast and where the growth is.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          className="inline-flex items-center gap-2.5 px-10 py-[18px] rounded-full text-white font-bold text-[0.98rem] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,109,245,0.35),0_8px_24px_rgba(79,109,245,0.2)]"
          style={{ background: "var(--blue)" }}
        >
          Book Your Free Audit Call
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </a>
        <p className="mt-5 text-[0.72rem]" style={{ color: "var(--text-dim)" }}>
          No contracts. No jargon. Just a conversation between people who understand healthcare.
        </p>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
export function Footer() {
  return (
    <footer className="py-9 text-center relative z-[1]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <p className="text-[0.72rem]" style={{ color: "var(--text-dim)" }}>
          © 2026 <a href="#" style={{ color: "var(--blue-bright)" }} className="no-underline">Prime Craft Media</a>. Healthcare Podcast Growth Division.
        </p>
      </div>
    </footer>
  );
}

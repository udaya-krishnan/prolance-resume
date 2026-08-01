import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, LayoutGrid, Layers, PenTool,
  Globe2, ShieldCheck, Eye, X,
} from "lucide-react";

const templates = [
  {
    title: "Classic Professional",
    tag: "Psychology & Counselling",
    image: "/templates/resume.jpeg",
  },
  {
    title: "Modern Minimal",
    tag: "IT & Tech",
    image: "/templates/resume2.jpeg",
  },
  {
    title: "Executive Format",
    tag: "Senior & Leadership",
    image: "/templates/resume4.jpeg",
  },
  {
    title: "Clean Clinical",
    tag: "Healthcare & Nursing",
    image: "/templates/resume3.jpeg",
  },
  {
    title: "Hospitality & Culinary",
    tag: "Culinary & Hotel Operations",
    image: "/templates/resume7.jpeg",
  },
  {
    title: "Offshore Engineering",
    tag: "Engineering & Energy",
    image: "/templates/resume6.jpeg",
  },
  {
    title: "Modern Two Column",
    tag: "Education & Aviation",
    image: "/templates/resume5.jpeg",
  },
];

const formats = [
  {
    icon: LayoutGrid,
    title: "Reverse Chronological",
    tag: "Most common",
    desc: "Your work history listed most recent first, organised around clear job titles and achievement bullets. The safest, most ATS friendly structure for mid career and senior professionals with a consistent work history.",
    bestFor: "Mid career & senior professionals",
  },
  {
    icon: Layers,
    title: "Skills Based",
    tag: "For freshers & career changers",
    desc: "Leads with a skills and projects summary before work experience, so relevant capability is visible immediately, built for graduates, career switchers, or anyone with limited formal experience.",
    bestFor: "Freshers, graduates & career changers",
  },
  {
    icon: PenTool,
    title: "Combination Format",
    tag: "For leadership roles",
    desc: "Blends a strong skills or achievements summary at the top with a detailed reverse chronological history below, built for senior professionals whose career spans multiple functions or industries.",
    bestFor: "Senior & leadership track professionals",
  },
  // {
  //   icon: ImageIcon,
  //   title: "Infographic Resume",
  //   tag: "Premium add on",
  //   desc: "A visually structured, one page companion resume with icon led sections and skill visualisations, designed to complement (never replace) your ATS safe master resume for portfolio and networking use.",
  //   bestFor: "Design, creative & client facing roles",
  // },
  {
    icon: Globe2,
    title: "International & Gulf Formats",
    tag: "Region specific",
    desc: "Country specific structure and conventions: no photo or date of birth for US & UK resumes, Europass compatible formatting for EU markets, and Gulf format CVs for UAE, Saudi Arabia, Qatar, Kuwait & Bahrain.",
    bestFor: "UK, USA, Canada, Australia, Europe & Gulf applicants",
  },
];

const industries = [
  "💻 IT & Software Development",
  "🏥 Healthcare & Nursing",
  "🏦 Finance & Banking",
  "⚙️ Engineering: Civil, Mechanical, Electrical",
  "📊 Marketing & Sales",
  "🛢️ Oil, Gas & Energy",
  "🏗️ Construction & Project Management",
  "🚚 Logistics & Supply Chain",
  "⚖️ Legal & Compliance",
  "🏨 Hospitality & Tourism",
  "🎓 Education & Teaching",
  "✈️ Aviation",
  "💊 Pharma & Life Sciences",
  "🎨 Design & Creative Arts",
  "📱 Digital Marketing & SEO",
  "🏭 Manufacturing",
  "🔐 Cybersecurity",
  "📡 Telecom",
  "👨‍🎓 Freshers & Recent Graduates",
  "🌍 Non Profit & Development Sector",
];

export default function ResumeTemplates() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Resume Templates & Formats
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            The Right <span className="text-gradient-brand">Format</span>, Not Just a Template.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            We don't hand you a fixed template. Every resume is built on the ATS safe structure that best
            fits your career stage, industry, and target market, then written from scratch around it.
          </p>
        </div>
      </section>

      {/* TEMPLATE GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Real Examples</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A Few of Our Resume Formats</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real resumes we've written for real clients. Tap any preview to see the full page.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {templates.map((t) => (
            <div
              key={t.title}
              className="reveal group relative flex w-full max-w-sm flex-none flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10 sm:w-72"
            >
              {/* Half height cropped preview */}
              <button
                onClick={() => setPreviewImage(t.image)}
                className="relative block h-64 w-full overflow-hidden"
                aria-label={`Preview ${t.title}`}
              >
                <img
                  src={t.image}
                  alt={`${t.title} resume template preview`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                {/* Fade out to signal there is more below */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--brand-ink)]/0 transition group-hover:bg-[color:var(--brand-ink)]/40">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[color:var(--brand-deep)] opacity-0 shadow-lg transition group-hover:opacity-100">
                    <Eye className="h-3.5 w-3.5" /> Preview Full Resume
                  </span>
                </div>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/60">
                  {t.tag}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{t.title}</h3>
                <button
                  onClick={() => setPreviewImage(t.image)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)]"
                >
                  Preview Full Resume <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              aria-label="Close preview"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-foreground shadow-lg transition hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto">
              <img src={previewImage} alt="Full resume preview" className="w-full object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* FORMATS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {formats.map((f) => (
            <div
              key={f.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                  <f.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/60">
                  {f.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
              <p className="mt-4 flex items-start gap-2 text-sm font-medium text-[color:var(--brand-deep)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]" />
                Best for: {f.bestFor}
              </p>
            </div>
          ))}

          {/* Guarantee card filling the grid */}
          <div className="reveal relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] p-7 text-white">
            <ShieldCheck className="h-8 w-8 text-[color:var(--brand-cyan)]" />
            <h3 className="mt-4 font-display text-xl font-semibold">Every Format, ATS Score 80+ Guaranteed</h3>
            <p className="mt-3 text-sm text-white/75">
              Whichever structure fits your career, it's tested against major ATS score checkers before
              delivery. Below 80, we rewrite it at no charge.
            </p>
            <Link
              to="/pricing"
              className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[color:var(--brand-cyan)]"
            >
              View pricing plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SAMPLE LAYOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">See It In Action</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A Format That Reads Clean to Both Humans and ATS Software
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every resume we write follows the same underlying discipline: a clear summary up top, skills
              grouped for fast scanning, achievement led experience bullets, and education or languages kept
              short and easy to parse. No tables, no text boxes, no graphics that confuse ATS parsers,
              just a structure that gets you past the filter and read by a human.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                "Single column layout that parses cleanly on every major ATS",
                "Section headers ATS software recognises instantly",
                "Achievement bullets, not duty lists",
                "Skills grouped for fast recruiter scanning",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-deep)]"
            >
              Get your resume written this way <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        
          <div className="reveal relative flex justify-center">
            <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-15 blur-2xl" />

            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
              <img
                src="/templates/resume7.jpeg"
                alt="Sample ATS optimised resume written by Prolance Resume"
                className="mx-auto w-80 object-contain"
              />

              <div className="flex items-center justify-between border-t border-border bg-white px-5 py-3">
                {/* <span className="text-[11px] font-medium text-muted-foreground">
                  Tested against Workday, Taleo, Greenhouse, iCIMS
                </span> */}
                <span className="rounded-full gradient-brand px-2.5 py-1 text-[10px] font-bold text-white">
                  ATS 80+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Formats Matched to 20+ Industries</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Format is only half the story. Our writers pair the right structure with the exact language,
            keywords, and conventions recruiters in your field expect.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind}
              className="reveal flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium transition hover:border-[color:var(--brand)] hover:shadow-sm"
            >
              {ind}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-2xl shadow-[color:var(--brand)]/30 md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Not Sure Which Format Fits You?</h2>
              <p className="mt-3 text-white/85">
                Message us your current role, experience, and target market, and we will tell you exactly which
                format we would write for you, free of charge.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.04]"
              >
                WhatsApp Us for a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
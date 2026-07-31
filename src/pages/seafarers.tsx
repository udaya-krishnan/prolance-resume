// import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Anchor,
  Ship,
  ShieldCheck,
  FileText,
  Award,
  Download,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "999",
    popular: false,
    features: [
      "Professional ATS Resume",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Interview Prep Prompt Guide",
    ],
    delivery: "Delivery in 48 Hours",
  },
  {
    name: "Standard",
    price: "1,299",
    popular: false,
    features: [
      "Professional ATS Resume",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Interview Prep Prompt Guide",
    ],
    delivery: "Delivery in 48 Hours",
  },
  {
    name: "Premium",
    price: "2,499",
    popular: true,
    features: [
      "Professional ATS Resume",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Interview Prep Prompt Guide",
      "LinkedIn Optimisation",
    ],
    delivery: "Delivery in 48–72 Hours",
  },
];

const steps = [
  {
    icon: Ship,
    step: "01",
    title: "Tell Us Your Goal",
    desc: "Share your current resume or details and let us know: Sea Job or Shore Job. We tailor every document to your specific goal and rank.",
  },
  {
    icon: FileText,
    step: "02",
    title: "We Craft Your Documents",
    desc: "Our maritime resume experts write your resume, LinkedIn profile, or cover letter tailored to your goal and rank from Cadet to Master Mariner.",
  },
  {
    icon: Anchor,
    step: "03",
    title: "Receive & Apply",
    desc: "Get your polished documents and start applying with confidence, at sea or on shore. Delivered in Word + PDF, ready to send immediately.",
  },
];

const ranks = [
  "Cadet",
  "Officer",
  "Chief Officer",
  "Master Mariner",
  "Junior Engineer",
  "Second Engineer",
  "Chief Engineer",
  "Bosun",
  "AB Seaman",
  "Shore Job Transition",
];

const whatsappFeatures = [
  { icon: "📢", text: "Daily shore job postings" },
  { icon: "⚓", text: "Exclusive to the seafarer community" },
  { icon: "📲", text: "Instant updates, be the first to apply" },
  { icon: "✅", text: "Free to join" },
];

export default function Seafarers() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Background Blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[500px] w-[500px] animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
          <div className="absolute top-20 right-0 h-[460px] w-[460px] animate-blob rounded-full bg-[color:var(--brand-cyan)]/25 blur-3xl [animation-delay:-8s]" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-blob rounded-full bg-[color:var(--brand-deep)]/20 blur-3xl [animation-delay:-4s]" />
        </div>

        {/* 2-Column Container */}
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
          {/* LEFT COLUMN: Content */}
          <div className="reveal text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <Anchor className="h-3.5 w-3.5 text-[color:var(--brand)]" />
              Prolance Resume — Exclusively for Seafarers
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-5xl xl:text-6xl">
              Whether It's Your Next{" "}
              <span className="text-gradient-brand">Sea Job</span> or Your First{" "}
              <span className="text-gradient-brand">Shore Job</span>, We'll Get
              Your Resume Ready.
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Professional Resume Writing, LinkedIn Optimisation, and Cover
              Letter Writing built exclusively for Deck and Engine seafarers,
              for both Sea Jobs and Shore Jobs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
              >
                Get My Resume Made{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAtquyK0IBnlZc8p03Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg
                  className="h-4 w-4 fill-[#25D366]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.237a9.98 9.98 0 0 0 4.779 1.22h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0 0 12.012 2zm0 1.664c4.587 0 8.324 3.733 8.325 8.32a8.27 8.27 0 0 1-2.438 5.886 8.272 8.272 0 0 1-5.887 2.438h-.004a8.318 8.318 0 0 1-4.238-1.166l-.304-.18-3.111.736.822-3.033-.198-.314a8.297 8.297 0 0 1-1.291-4.367c0-4.587 3.738-8.32 8.324-8.32zm4.557 11.23c-.25-.125-1.48-.73-1.709-.813-.229-.083-.396-.125-.563.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.852 6.852 0 0 1-2.012-1.241 7.545 7.545 0 0 1-1.391-1.733c-.146-.25-.015-.385.11-.51.112-.112.25-.291.375-.437.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429-.146-.007-.312-.008-.479-.008a.922.922 0 0 0-.667.312c-.229.25-.875.855-.875 2.084 0 1.229.896 2.417 1.021 2.584.125.166 1.762 2.69 4.27 3.772.597.257 1.063.41 1.427.526.6.19 1.146.163 1.577.099.48-.071 1.48-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.166-.479-.291z" />
                </svg>
                Join Our WhatsApp Channel
              </a>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              From Cadet to Master Mariner, from Junior Engineer to Chief
              Engineer we know exactly what recruiters look for, on ship and
              on shore.
            </p>

            {/* Trust Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
                Sea Job Specialists
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
                Shore Job Transition Experts
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
                48 Hour Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
                30 Days Support
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Elements */}
          <div className="reveal relative flex items-center justify-center lg:justify-end">
            {/* Subtle Glow Behind Image */}
            <div className="absolute inset-0 scale-90 rounded-[3rem] bg-[color:var(--brand-cyan)]/15 blur-3xl" />

            {/* Floating Deck/Engine Rank Badge */}
            <div className="absolute -left-4 top-10 z-20 hidden animate-float items-center gap-2.5 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand text-white shadow-md">
                <Anchor className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">
                  Chief Officer / Engineer
                </div>
                <div className="text-[10px] text-muted-foreground">
                  STCW & Matrix Compliant
                </div>
              </div>
            </div>

            {/* Floating Transition Pill */}
            <div className="absolute -right-2 bottom-12 z-20 hidden animate-float items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-2 shadow-xl backdrop-blur [animation-delay:-3s] sm:flex">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-foreground">
                Sea to Shore Ready
              </span>
            </div>

            {/* Main Visual Card Container */}
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-border/60">
              {/* Mock Header Chrome Bar */}
              <div className="flex items-center justify-between border-b border-border bg-gray-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[11px] font-medium text-muted-foreground">
                    maritime_cv_pro.pdf
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-200">
                  VERIFIED FORMAT
                </span>
              </div>

              {/* Inner Content Card (Simulated Maritime Resume Structure) */}
              <div className="p-6 space-y-4">
                {/* Profile Bar */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center border border-border">
                    <Award className="h-6 w-6 text-[color:var(--brand)]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm">
                      Capt. Rajesh Sharma
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Master Mariner (FG) | Marine Superintendent Target
                    </p>
                  </div>
                </div>

                {/* Sea Service Summary Box */}
                <div className="rounded-xl border border-border bg-slate-50/70 p-3 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-bold text-foreground">
                    <span>Sea Experience Matrix</span>
                    <span className="text-[color:var(--brand)]">12+ Years</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground pt-1">
                    <div className="bg-white p-1.5 rounded border border-border/60">
                      <span className="block font-semibold text-foreground">
                        Vessel Types
                      </span>
                      VLCC, Suezmax, Aframax
                    </div>
                    <div className="bg-white p-1.5 rounded border border-border/60">
                      <span className="block font-semibold text-foreground">
                        Compliance
                      </span>
                      ISM, ISPS, MARPOL, MLC
                    </div>
                  </div>
                </div>

                {/* Resume Body Placeholder Lines */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-foreground">
                    <span>Key Competencies</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  </div>
                  <div className="h-2 w-full rounded bg-gray-100" />
                  <div className="h-2 w-11/12 rounded bg-gray-100" />
                  <div className="h-2 w-4/5 rounded bg-gray-100" />
                </div>

                {/* Bottom Action CTA Strip inside preview */}
                <div className="pt-2 flex items-center justify-between border-t border-border/80">
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                    <FileText className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
                    Includes Cover Letter
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-lg gradient-brand px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                    <Download className="h-3 w-3" /> Sample PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RANKS STRIP ── */}
      <section className="border-y border-border/60 bg-white/50 py-5 backdrop-blur">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {[...ranks, ...ranks].map((r, i) => (
              <span key={i} className="flex items-center gap-2 opacity-70">
                <Anchor className="h-3.5 w-3.5" /> {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
            Resume Packages
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Built for Seafarers. Priced Fairly.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No hidden charges. Every package includes a professionally written
            maritime resume tailored to your rank and goal.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-1 ${
                p.popular
                  ? "border-transparent gradient-brand text-white shadow-2xl shadow-[color:var(--brand)]/30"
                  : "border-border bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  ⭐ Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-bold">
                  ₹{p.price}
                </span>
              </div>
              <p
                className={`mt-1 text-xs ${p.popular ? "text-white/70" : "text-muted-foreground"}`}
              >
                ⚡ {p.delivery}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-white" : "text-[color:var(--brand)]"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:scale-[1.02] ${
                  p.popular
                    ? "bg-white text-[color:var(--brand-deep)]"
                    : "gradient-brand text-white"
                }`}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Templates note */}
        <div className="reveal mt-6 rounded-2xl border border-border bg-white/60 p-5 text-center backdrop-blur">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-[color:var(--brand)]">
              📄 Resume Templates Included
            </span>{" "}
            — Every package comes with 4–5 professionally designed maritime
            resume templates to choose from.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 left-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand)] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand-cyan)] blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              Simple 3-Step Process
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.title}
                className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full gradient-brand text-sm font-bold">
                  {s.step}
                </div>
                <s.icon className="mt-2 h-8 w-8 text-[color:var(--brand-cyan)]" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CHANNEL ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal overflow-hidden rounded-3xl border border-border bg-white">
          <div className="grid lg:grid-cols-2">
            {/* Left: content */}
            <div className="p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                WhatsApp Community
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Looking for a Shore Job? Join Our Exclusive Seafarer WhatsApp
                Channel
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get instant shore job updates, straight to your phone, every
                single day. No spam, no noise just real shore-based
                opportunities curated for the seafarer community.
              </p>

              <ul className="mt-6 space-y-3">
                {whatsappFeatures.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="text-lg">{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="https://whatsapp.com/channel/0029VbAtquyK0IBnlZc8p03Z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-[1.03]"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join Now — It's Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Right: visual */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#25D366]/10 to-[color:var(--brand)]/10 p-10">
              <div className="flex flex-col items-center gap-5">
                {/* WhatsApp icon big */}
                <div className="grid h-24 w-24 place-items-center rounded-3xl bg-[#25D366] shadow-2xl shadow-[#25D366]/40">
                  <svg
                    className="h-14 w-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">
                    Seafarer Shore Job Channel
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Daily updates · Free to join · Seafarers only
                  </div>
                </div>

                {/* Notification bubbles */}
                <div className="w-full max-w-xs space-y-2.5">
                  {[
                    {
                      job: "Marine Superintendent",
                      co: "DP World, Dubai",
                      time: "Just now",
                    },
                    {
                      job: "Port Captain",
                      co: "Adani Ports, Mumbai",
                      time: "2 min ago",
                    },
                    {
                      job: "Marine Surveyor",
                      co: "Bureau Veritas, Chennai",
                      time: "5 min ago",
                    },
                  ].map((n) => (
                    <div
                      key={n.job}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm"
                    >
                      <div className="h-2 w-2 shrink-0 rounded-full bg-[#25D366]" />
                      <div className="flex-1 min-w-0">
                        <div className="truncate text-xs font-semibold text-foreground">
                          {n.job}
                        </div>
                        <div className="truncate text-[10px] text-muted-foreground">
                          {n.co}
                        </div>
                      </div>
                      <div className="shrink-0 text-[9px] text-muted-foreground">
                        {n.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
            Who We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Every Rank. Every Goal.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From your first sea contract to your final shore-based role, we
            write the career documents that get you there.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {ranks.map((r) => (
            <div
              key={r}
              className="reveal flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium transition hover:border-[color:var(--brand)] hover:shadow-sm"
            >
              <Anchor className="h-3.5 w-3.5 shrink-0 text-[color:var(--brand)]" />
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-2xl shadow-[color:var(--brand)]/30 md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          {/* Anchor watermark */}
          <Anchor className="absolute right-16 top-1/2 h-48 w-48 -translate-y-1/2 text-white/5" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Your Next Sea Job or Shore Job Starts With a Strong Resume.
              </h2>
              <p className="mt-3 text-white/85">
                Let's build career documents that work as hard as you do
                whether you're heading back onboard or making the move to shore.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/70">
                <span>⚓ Sea Job Specialists</span>
                <span>🏢 Shore Job Transition Experts</span>
                <span>⚡ 48 Hour Delivery</span>
                <span>✅ 30 Days Free Editing</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.04]"
              >
                Get My Resume Made <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAtquyK0IBnlZc8p03Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg
                  className="h-4 w-4 fill-current text-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.237a9.98 9.98 0 0 0 4.779 1.22h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0 0 12.012 2zm0 1.664c4.587 0 8.324 3.733 8.325 8.32a8.27 8.27 0 0 1-2.438 5.886 8.272 8.272 0 0 1-5.887 2.438h-.004a8.318 8.318 0 0 1-4.238-1.166l-.304-.18-3.111.736.822-3.033-.198-.314a8.297 8.297 0 0 1-1.291-4.367c0-4.587 3.738-8.32 8.324-8.32zm4.557 11.23c-.25-.125-1.48-.73-1.709-.813-.229-.083-.396-.125-.563.125-.166.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.852 6.852 0 0 1-2.012-1.241 7.545 7.545 0 0 1-1.391-1.733c-.146-.25-.015-.385.11-.51.112-.112.25-.291.375-.437.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.429-.146-.007-.312-.008-.479-.008a.922.922 0 0 0-.667.312c-.229.25-.875.855-.875 2.084 0 1.229.896 2.417 1.021 2.584.125.166 1.762 2.69 4.27 3.772.597.257 1.063.41 1.427.526.6.19 1.146.163 1.577.099.48-.071 1.48-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.166-.479-.291z" />
                </svg>
                Join WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

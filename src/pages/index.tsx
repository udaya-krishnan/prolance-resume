import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, FileText, Briefcase,
  Star, Users, Trophy, Quote, ShieldCheck, Zap,
  Rocket, Target, Link2, Sparkle,
} from "lucide-react";
import { useEffect, useState } from "react";

function useCounter(target: number, ms = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return n;
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const n = useCounter(value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-brand md:text-5xl">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const services = [
  { icon: FileText, title: "ATS-Friendly Resume Writing", desc: "Professionally written, keyword-rich resumes optimised for ATS platforms and tailored to your target role, industry, and experience level. Available for India, Gulf, and international markets." },
  { icon: Link2, title: "LinkedIn Profile Optimisation", desc: "A complete LinkedIn makeover — headline, about section, skills, experience, and keyword strategy designed to attract recruiter InMails and increase your profile visibility by up to 3x." },
  { icon: Briefcase, title: "Cover Letter Writing", desc: "Persuasive, role-specific cover letters that complement your resume and give recruiters a compelling reason to call you. Tailored to the company culture and job requirements." },
  { icon: Rocket, title: "SOP Writing", desc: "Admission-winning Statements of Purpose for universities in the UK, Canada, Australia, Germany, and Ireland. Personal narratives that connect your academic journey with your future aspirations." },
];

const steps = [
  { icon: Target, title: "Start on WhatsApp", desc: "Message us for a free consultation. Tell us your target role and market — we'll recommend the right package instantly." },
  { icon: Zap, title: "Pick Your Plan", desc: "Choose from our Starter, Standard, and Premium plans based on your career stage and needs." },
  { icon: Sparkle, title: "Share Your Details", desc: "Fill out our short career brief or share your existing resume. Your assigned writer crafts a tailored, ATS-optimised document." },
  { icon: ShieldCheck, title: "Get Your Resume", desc: "Receive your professionally written resume within 24–48 hours. Includes 30 days of editing support and exclusive AI Guides with Premium." },
];

const testimonials = [
  {
    name: "Arya Ajith",
    meta: "Google Review · 2 months ago",
    text: "Afsal handled my CV and cover letter professionally, sharing a draft first and making sure everything matched exactly what I needed.",
  },
  {
    name: "Alex P Abraham",
    meta: "Google Review · 5 months ago",
    text: "They prepared my friend's resume with excellent professionalism — well-structured, impactful, and tailored perfectly, plus a fully optimised LinkedIn profile.",
  },
  {
    name: "Praisey Vilayil",
    meta: "Google Review · a month ago",
    text: "Afsal understood my profile, gave great suggestions, and made my CV look clean and professional. Very helpful and quick.",
  },
  {
    name: "Jeena Unni",
    meta: "Google Review · 2 months ago",
    text: "Highly recommend Prolance Resume for freshers and job seekers — their AI resume service gave me a clean, professional, attractive resume in no time.",
  },
  {
    name: "Uday",
    meta: "Google Review · 5 months ago",
    text: "Purchased the standard package — perfect CV, cover letter, and motivation letter. I know I'll crack my interview with this resume.",
  },
  {
    name: "Jisvin George",
    meta: "Google Review · 7 months ago",
    text: "Quick, professional, and very supportive throughout the process. Truly appreciate their effort and attention to detail.",
  },
];

// const partners = ["Google", "Microsoft", "Amazon", "Stripe", "Meta", "Adobe", "Swiggy", "Razorpay", "Zomato", "Flipkart"];

const pricing = [
  {
    name: "Starter",
    price: "899",
    desc: "Fresh graduates & early careers",
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Delivery in 24–48 Hours",
    ],
  },
  {
    name: "Standard",
    price: "1,299",
    desc: "Mid-career professionals",
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Resume Customisation Prompts",
      "Delivery in 48 Hours",
    ],
  },
  {
    name: "Premium",
    price: "1,499",
    originalPrice: "2,000",
    savingLabel: "Save 25%",
    desc: "Senior professionals — Most Popular",
    popular: true,
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Resume Customisation Prompts",
      "Interview Prep Prompt Guide",
      "Additional Infographic Resume",
      "Delivery in 48 Hours",
    ],
  },
];

const whyUs = [
  { icon: Zap, title: "24–48 Hour Delivery", desc: "Need your resume urgently? Same-day delivery available for priority orders. All standard orders delivered within 24–48 hours in Word and PDF formats." },
  { icon: ShieldCheck, title: "ATS Score 80+ Guaranteed", desc: "Every resume we deliver is tested to achieve a minimum ATS score of 80+, verified against Workday, Taleo, Greenhouse, and iCIMS." },
  { icon: Sparkle, title: "30 Days Editing Support", desc: "Your career doesn't stop after delivery. We provide 30 days of free editing support after you receive your resume." },
  { icon: Target, title: "Resume Customisation AI Prompts", desc: "Every package includes our exclusive AI Prompt set — tested prompts you can use with Claude, ChatGPT, and Gemini to tailor your resume for any job description." },
  { icon: Trophy, title: "98% Interview Callback Rate", desc: "Our clients consistently report interview calls within 1–2 weeks. We track outcomes and continuously refine our writing process based on real hiring data." },
  { icon: Users, title: "20+ Industry Specialists", desc: "From IT and healthcare to finance, oil & gas, engineering, and education — dedicated writers who know exactly what recruiters want to see." },
];

const resumeMistakes = [
  "No Clear Career Branding",
  "AI-Generated, Generic Content",
  "ATS-Breaking Formatting",
  "Missing Recruiter Keywords",
  "Duties Listed, Not Achievements",
  "One Resume Sent Everywhere",
  "LinkedIn Out of Sync With Your Resume",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand)]/30 blur-3xl" />
          <div className="absolute top-20 right-0 h-[460px] w-[460px] animate-blob rounded-full bg-[color:var(--brand-cyan)]/30 blur-3xl [animation-delay:-8s]" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-blob rounded-full bg-[color:var(--brand-deep)]/25 blur-3xl [animation-delay:-4s]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--brand-cyan)]" />
              India's Leading ATS Resume Writing Service
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              Your Resume Should <span className="text-gradient-brand">Open Doors</span>, Not Get Filtered Out.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              We Don't Just Write Resumes, We Brand You. ATS resumes, cover letters &amp; LinkedIn optimization
              with 1:1 consultation, 24-hour delivery, and expert support — built for jobs in India, Gulf, UK,
              Canada, Australia, and Europe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
              >
                Get My Resume Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
              >
                View Pricing Plans
              </Link>
            </div>
            {/* Trust bar */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
                Same-Day Delivery Available
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
                ATS Score 80+ Guaranteed
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
                30 Days Editing Support
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
                Accepted in 30+ Countries
              </div>
            </div>
          </div>

          {/* Visual mock */}
          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-20 blur-2xl" />
            <div className="relative animate-float rounded-3xl glass p-6 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 text-xs text-muted-foreground">resume_aarav_mehta.pdf</div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl font-bold">Aarav Mehta</div>
                    <div className="text-sm text-[color:var(--brand)]">Senior Product Manager</div>
                  </div>
                  <div className="rounded-full gradient-brand px-3 py-1 text-[10px] font-bold text-white">ATS · 98%</div>
                </div>
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] via-[color:var(--brand)] to-[color:var(--brand-cyan)]" />
                <div className="grid gap-2">
                  {[
                    "Led 0→1 launch reaching 1M users in 6 months",
                    "Drove 38% revenue growth via experimentation",
                    "Built & mentored team of 9 PMs across 3 geos",
                  ].map((l) => (
                    <div key={l} className="flex items-start gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[color:var(--brand)]" />
                      {l}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Strategy", "Roadmapping", "SQL", "A/B Testing", "Figma", "Jira"].map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-1/4 hidden animate-float rounded-2xl glass px-3 py-2 text-xs font-medium shadow-lg [animation-delay:-2s] sm:block">
              <Trophy className="mr-1 inline h-3.5 w-3.5 text-[color:var(--brand)]" /> 98% interview callback rate
            </div>
            <div className="absolute -right-4 bottom-1/4 hidden animate-float rounded-2xl glass px-3 py-2 text-xs font-medium shadow-lg [animation-delay:-5s] sm:block">
              <Users className="mr-1 inline h-3.5 w-3.5 text-[color:var(--brand)]" /> 10,000+ resumes delivered
            </div>
          </div>
        </div>

        {/* Marquee */}
        {/* <div className="border-y border-border/60 bg-white/50 py-5 backdrop-blur">
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="opacity-70">{p}</span>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal grid grid-cols-2 gap-8 rounded-3xl border border-border bg-white/60 p-10 backdrop-blur md:grid-cols-6">
          <Stat value={10000} suffix="+" label="Resumes Delivered" />
          <Stat value={80} suffix="+" label="ATS Score Assured" />
          <Stat value={899} label="Starting Price (₹)" />
          <Stat value={49} suffix="/5★" label="Client Rating" />
          <Stat value={30} suffix="+" label="Countries Accepted" />
          <Stat value={20} suffix="+" label="Industries Covered" />
        </div>
      </section>

      {/* RESUME MISTAKES */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="reveal rounded-3xl border border-border bg-white/60 p-10 backdrop-blur">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Common Problems</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Are You Making These Resume Mistakes?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Most professionals don't realise their resume is being rejected automatically before any recruiter sees it.
              Our expert writers fix all of this and deliver a job-winning resume within 24 hours*.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resumeMistakes.map((m) => (
              <div key={m} className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                <span className="mt-0.5 text-red-400">✗</span>
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">What We Do</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Complete Career Document Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A complete career toolkit, crafted by senior writers and ex-recruiters with deep industry knowledge.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="absolute inset-x-0 -top-px h-px gradient-brand opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)]"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PROLANCE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Why Prolance Resume</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            ATS-Optimized · Human-Crafted. Every resume is written by an experienced career professional
            then rigorously tested for ATS compatibility before delivery.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="absolute inset-x-0 -top-px h-px gradient-brand opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 left-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand)] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand-cyan)] blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Your Resume, Ready in 4 Steps</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute -top-4 left-6 grid h-8 w-8 place-items-center rounded-full gradient-brand text-xs font-bold">
                  0{i + 1}
                </div>
                <s.icon className="h-7 w-7 text-[color:var(--brand-cyan)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Stories</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Real Results from Real Clients</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal relative rounded-2xl border border-border bg-white p-7 transition hover:shadow-xl"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[color:var(--brand)]/15" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-brand font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Simple, Experience-Based Pricing</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">No hidden charges. No upsells. Just results.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl border p-8 transition hover:-translate-y-1 ${
                p.popular
                  ? "border-transparent gradient-brand text-white shadow-2xl shadow-[color:var(--brand)]/30"
                  : "border-border bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                {p.originalPrice && (
                  <span className={`pb-1 text-sm line-through ${p.popular ? "text-white/50" : "text-muted-foreground"}`}>
                    ₹{p.originalPrice}
                  </span>
                )}
                <span className="font-display text-4xl font-bold">₹{p.price}</span>
                <span className={`pb-1 text-sm ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>/ project</span>
              </div>
              {p.savingLabel && (
                <span className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                  {p.savingLabel}
                </span>
              )}
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.popular ? "text-white" : "text-[color:var(--brand)]"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className={`mt-4 text-xs ${p.popular ? "text-white/60" : "text-muted-foreground"}`}>
                Express Delivery (24 hrs): +₹300
              </p>
              <Link
                to="/contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.popular
                    ? "bg-white text-[color:var(--brand-deep)] hover:scale-[1.02]"
                    : "gradient-brand text-white hover:scale-[1.02]"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        {/* LinkedIn add-on note */}
        <div className="reveal mt-8 rounded-2xl border border-border bg-white/60 p-6 text-center backdrop-blur">
          <p className="text-sm font-semibold text-[color:var(--brand)]">LinkedIn Profile Optimisation</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Available as a standalone service at <strong>₹1,999</strong>, or add to any resume package for up to <strong>30% off</strong>.
            Includes headline rewrite, About section, experience rewrites, skills (top 50), SEO audit, banner design &amp; more.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">100% Satisfaction Guarantee — we revise until you love it.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-2xl shadow-[color:var(--brand)]/30 md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Get Shortlisted?</h2>
              <p className="mt-3 text-white/85">
                Join thousands of professionals across India, Gulf, and the world who landed their dream roles
                with Prolance Resume. Starting at just ₹899 — with same-day delivery available.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                <span>🔒 Secure &amp; Confidential</span>
                <span>⚡ Same-Day Delivery Available</span>
                <span>✓ 30 Days Editing Support</span>
                <span>🌍 Accepted in 30+ Countries</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.04]"
              >
                WhatsApp Us — Free Consultation <ArrowRight className="h-4 w-4" />
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
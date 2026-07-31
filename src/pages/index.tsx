import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, FileText, Briefcase,
  Star, Users, Trophy, Quote, ShieldCheck, Zap,
  Rocket, Target, Link2, Sparkle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnnouncementBar } from "../components/site/AnnouncementBar";

function useCounter(target: number, ms = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const isDecimal = !Number.isInteger(target);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const current = p * target;
      setN(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return n;
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const n = useCounter(value);
  const isDecimal = !Number.isInteger(value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-brand md:text-5xl">
        {isDecimal ? n.toFixed(1) : n.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const services = [
  { icon: FileText, title: "ATS-Friendly Resume Writing", desc: "Professionally written, keyword-rich resumes optimised for ATS platforms and tailored to your target role, industry, and experience level. Available for India, Gulf, and international markets." },
  { icon: Link2, title: "LinkedIn Profile Optimisation", desc: "A complete LinkedIn makeover including headline, about section, skills, experience, and keyword strategy designed to attract recruiter InMails and increase your profile visibility by up to 3x." },
  { icon: Briefcase, title: "Cover Letter Writing", desc: "Persuasive, role-specific cover letters that complement your resume and give recruiters a compelling reason to call you. Tailored to the company culture and job requirements." },
  { icon: Rocket, title: "SOP Writing", desc: "Admission-winning Statements of Purpose for universities in the UK, Canada, Australia, Germany, and Ireland. Personal narratives that connect your academic journey with your future aspirations." },
];

const steps = [
  { icon: Target, title: "Start on WhatsApp", desc: "Message us for a free consultation. Tell us your target role and market, and we will recommend the right package instantly." },
  { icon: Zap, title: "Pick Your Plan", desc: "Choose from our Starter, Standard, and Premium plans based on your career stage and needs." },
  { icon: Sparkle, title: "Share Your Details", desc: "Fill out our short career brief or share your existing resume. Your assigned writer crafts a tailored, ATS-optimised document." },
  { icon: ShieldCheck, title: "Get Your Resume", desc: "Receive your professionally written resume within 24 to 48 hours. Includes 30 days of editing support and exclusive AI Guides with Premium." },
];

const testimonials = [
  {
    name: "Akhil John K.Y",
    role: "Google Review · 6 weeks ago",
    text: "I had a great experience with Prolance Resume. Their team was professional, responsive, and understood my career goals well. They delivered a well-structured, ATS-optimized resume that highlighted my skills and experience effectively. The quality of work and attention to detail exceeded my expectations. I would definitely recommend Prolance Resume to anyone seeking a polished and impactful resume.",
  },
  {
    name: "Arya Ajith",
    role: "Google Review · 10 weeks ago",
    text: "I recently used Prolance for my CV and cover letter, and I had a great experience. An employee named Afsal handled my work professionally and made everything exactly according to my requirements. They shared a draft first and made sure I was satisfied with every detail and correction before finalizing it. The final CV and cover letter looked very professional, and I received everything within just 2 days. I highly recommend Prolance to anyone looking for quality CV and cover letter services.",
  },
  {
    name: "Arun Kumar",
    role: "Google Review · 11 weeks ago",
    text: "Highly recommended! Very well-organized, professional, and customer-friendly service. The team was supportive, responsive, and ensured a smooth experience from start to finish. Truly appreciate their excellent service and attention to detail. Wishing the team continued success.",
  },
  {
    name: "Deekshit Shetty",
    role: "Google Review · 23 weeks ago",
    text: "I had a great experience with this CV building service. They are very professional and understood my experience clearly, helped me to restructure my CV in a more professional and ATS-friendly format. The final version looks much more polished and confident. I would definitely recommend them to anyone looking to improve their resume.",
  },
  {
    name: "Anu",
    role: "Google Review · 32 weeks ago",
    text: "I had a really good experience with their resume service. They were very patient, understood my requirements clearly, and customized the resume according to my profile. The final resume looked professional, well structured, and confident. I'm genuinely satisfied with their work and would definitely recommend them to anyone looking for a well made resume.",
  },
  {
    name: "Mohamed Nishad",
    role: "Google Review · 34 weeks ago",
    text: "Absolutely fantastic! Made creating a professional resume quick and easy. The templates look great, and I love the final result. Highly recommend it!",
  },
  {
    name: "Jisvin George",
    role: "Google Review · 34 weeks ago",
    text: "Had a great experience getting my resume done by them. They were quick, professional, and very supportive throughout the process. Truly appreciate their effort and attention to detail. Thank you for the excellent service!",
  },
  {
    name: "Kajal Kadam",
    role: "Google Review · 39 weeks ago",
    text: "I had a great experience with Prolance Resume. They completely transformed my resume, making it more professional and ATS-friendly. The team understood my background well and highlighted my skills perfectly. Highly recommend!!",
  },
  {
    name: "Aarav Mehta",
    role: "Google Review · 41 weeks ago",
    text: "Three interview calls in the first week after the new resume went live. The ROI was unreal.",
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
      "Delivery in 24 to 48 Hours",
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
    desc: "Senior professionals (Most Popular)",
    popular: true,
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Cover Letter",
      "Resume Customisation Prompts",
      "Interview Prep Prompt Guide",
      "Provided in Any 2 Templates",
      "Delivery in 48 Hours",
    ],
  },
];

const whyUs = [
  { icon: Zap, title: "24 to 48 Hour Delivery", desc: "Need your resume urgently? Same-day delivery available for priority orders. All standard orders delivered within 24 to 48 hours in Word and PDF formats." },
  { icon: ShieldCheck, title: "ATS Score 80+ Guaranteed", desc: "Every resume we deliver is tested to achieve a minimum ATS score of 80+." },
  { icon: Sparkle, title: "30 Days Editing Support", desc: "Your career doesn't stop after delivery. We provide 30 days of free editing support after you receive your resume." },
  { icon: Target, title: "Resume Customisation AI Prompts", desc: "Every package includes our exclusive AI Prompt set, which includes tested prompts you can use with Claude, ChatGPT, and Gemini to tailor your resume for any job description." },
  { icon: Trophy, title: "98% Interview Callback Rate", desc: "Our clients consistently report interview calls within 1 to 2 weeks. We track outcomes and continuously refine our writing process based on real hiring data." },
  { icon: Users, title: "20+ Industry Specialists", desc: "From IT and healthcare to finance, oil & gas, engineering, and education, we have dedicated writers who know exactly what recruiters want to see." },
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
              We Don't Just Write Resumes, We Brand You. ATS resumes, cover letters, and LinkedIn optimization
              with 1:1 consultation, 24-hour delivery, and expert support, built for jobs in India, Gulf, UK,
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

          {/* ── ATS Resume Image Visual ── */}
          <div className="reveal relative flex items-center justify-center py-8">

            {/* Background glow */}
            <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-20 blur-2xl" />

            {/* ── Floating badge: ATS Score top left ── */}
            <div className="absolute -left-4 top-6 z-20 hidden animate-float items-center gap-2 rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur [animation-delay:-1s] sm:flex">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white shadow-sm">
                90+
              </span>
              <div>
                <div className="text-[11px] font-bold text-foreground">ATS Score 90+</div>
                <div className="text-[9px] text-muted-foreground">Guaranteed on every resume</div>
              </div>
            </div>

            {/* ── Floating badge: Interview Rate bottom left ── */}
            <div className="absolute -left-4 bottom-6 z-20 hidden animate-float items-center gap-2 rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur [animation-delay:-4s] sm:flex">
              <Trophy className="h-5 w-5 shrink-0 text-[color:var(--brand)]" />
              <div>
                <div className="text-[11px] font-bold text-foreground">98% Interview</div>
                <div className="text-[9px] text-muted-foreground">Callback Rate</div>
              </div>
            </div>

            {/* ── Floating badge: Resumes delivered top right ── */}
            <div className="absolute -right-4 top-6 z-20 hidden animate-float items-center gap-2 rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur [animation-delay:-6s] sm:flex">
              <Users className="h-5 w-5 shrink-0 text-[color:var(--brand)]" />
              <div>
                <div className="text-[11px] font-bold text-foreground">10,000+</div>
                <div className="text-[9px] text-muted-foreground">Resumes delivered</div>
              </div>
            </div>

            {/* ── Floating badge: 30 Days Support bottom right ── */}
            <div className="absolute -right-4 bottom-6 z-20 hidden animate-float items-center gap-2 rounded-2xl border border-border bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur [animation-delay:-3s] sm:flex">
              <ShieldCheck className="h-5 w-5 shrink-0 text-green-500" />
              <div>
                <div className="text-[11px] font-bold text-foreground">30 Days</div>
                <div className="text-[9px] text-muted-foreground">Free editing support</div>
              </div>
            </div>

            {/* ── Resume image card ── */}
            <div className="relative w-full max-w-sm animate-float overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-border/60 lg:max-w-md">

              {/* Window chrome bar */}
              <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 flex-1 text-[11px] text-muted-foreground">resume_prolance.pdf</span>
                <div className="rounded-full gradient-brand px-2.5 py-0.5 text-[10px] font-bold text-white">
                  ATS / 94%
                </div>
              </div>

              {/* Actual resume image */}
              <div className="relative">
                <img
                  src="/templates/resume5.jpeg"
                  alt="ATS-optimised resume sample by Prolance Resume"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "480px" }}
                />

                {/* Gradient fade at bottom so it fades out cleanly */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

                {/* ATS score overlay strip at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                  <div className="rounded-xl border border-border bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-muted-foreground">ATS Compatibility Score</span>
                      <span className="text-[10px] font-bold text-green-600">94 / 100</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[color:var(--brand)] to-green-400"
                        style={{ width: "94%" }}
                      />
                    </div>
                    <div className="mt-1.5 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-green-500" />
                      <span className="text-[9px] text-muted-foreground">
                        Passes Workday, Taleo, Greenhouse, and iCIMS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
          <Stat value={4.9} suffix="/5★" label="Client Rating" />
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
            ATS-Optimized, Human-Crafted. Every resume is written by an experienced career professional
            and then rigorously tested for ATS compatibility before delivery.
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Real Reviews</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Real Results from Real Clients</h2>
          {/* Google Reviews badge */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm">
            {/* Google G icon */}
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm font-bold text-foreground">4.9</span>
              </div>
              <div className="text-[11px] text-muted-foreground">Verified Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal relative flex flex-col rounded-2xl border border-border bg-white p-6 transition hover:shadow-xl"
            >
              {/* Google G top-right */}
              <svg className="absolute right-5 top-5 h-4 w-4 shrink-0 opacity-40" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>

              {/* Stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-brand text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="reveal mt-8 text-center">
          <a
            href="https://g.co/kgs/prolanceresume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground/70 shadow-sm transition hover:shadow-md"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            See all reviews on Google
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
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
                <span className={`pb-1 text-sm ${p.popular ? "text-white/70" : "text-muted-foreground"}`}></span>
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
          <p className="mt-2 text-xs text-muted-foreground">100% Satisfaction Guarantee, we revise until you love it.</p>
        </div>
        <AnnouncementBar/>
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
                with Prolance Resume. Starting at just ₹899, with same-day delivery available.
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
                WhatsApp Us, Free Consultation <ArrowRight className="h-4 w-4" />
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
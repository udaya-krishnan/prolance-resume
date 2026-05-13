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
  { icon: FileText, title: "Resume Writing", desc: "ATS-optimized, recruiter-loved resumes tailored to your target role." },
  { icon: Link2, title: "LinkedIn Optimization", desc: "Profiles that attract inbound recruiter messages on autopilot." },
  { icon: Briefcase, title: "Cover Letters", desc: "Persuasive openers that get hiring managers to read past line one." },
  { icon: Rocket, title: "Career Coaching", desc: "1:1 strategy sessions to plan your next 12 months with clarity." },
];

const steps = [
  { icon: Target, title: "Discovery", desc: "We deep-dive into your goals, target roles, and unique story." },
  { icon: Zap, title: "Drafting", desc: "Senior writers craft a custom, role-aligned first draft." },
  { icon: Sparkle, title: "Refinement", desc: "Two rounds of revisions to perfect every line." },
  { icon: ShieldCheck, title: "Delivery", desc: "Final ATS-tested files in PDF + editable formats." },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Product Manager · Google", text: "Three interview calls in the first week after the new resume went live. The ROI was unreal." },
  { name: "Priya Nair", role: "Data Scientist · Microsoft", text: "They translated five chaotic years into a story that actually made sense to recruiters." },
  { name: "Rohan Kapoor", role: "Senior Engineer · Stripe", text: "The LinkedIn rewrite alone got me three inbound messages from FAANG recruiters." },
  { name: "Ishita Rao", role: "Marketing Lead · Swiggy", text: "Worth every rupee. Felt like working with a personal brand strategist, not a writer." },
];

const partners = ["Google", "Microsoft", "Amazon", "Stripe", "Meta", "Adobe", "Swiggy", "Razorpay", "Zomato", "Flipkart"];

const pricing = [
  {
    name: "Starter",
    price: "2,499",
    desc: "Fresh graduates & early careers",
    features: ["1-page resume", "ATS optimization", "1 revision", "PDF + DOCX delivery"],
  },
  {
    name: "Professional",
    price: "4,999",
    desc: "Mid-career professionals",
    popular: true,
    features: ["1-2 page resume", "LinkedIn rewrite", "Cover letter", "2 revisions", "30-min strategy call"],
  },
  {
    name: "Executive",
    price: "9,999",
    desc: "Senior leaders & executives",
    features: ["Multi-page CV", "Full LinkedIn refresh", "Cover letter + bio", "Unlimited revisions", "60-min coaching"],
  },
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
              Trusted by 5,000+ professionals across India
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              Resumes that <span className="text-gradient-brand">open doors</span> at the world's best companies.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Premium, human-crafted resumes, LinkedIn profiles and career coaching — built in India,
              built for global careers. ATS-tested. Recruiter-approved. Interview-winning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
              >
                Get Your Resume <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
              >
                See Services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                4.9/5 on Google
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" />
                Money-back guarantee
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
              <Trophy className="mr-1 inline h-3.5 w-3.5 text-[color:var(--brand)]" /> 87% interview rate
            </div>
            <div className="absolute -right-4 bottom-1/4 hidden animate-float rounded-2xl glass px-3 py-2 text-xs font-medium shadow-lg [animation-delay:-5s] sm:block">
              <Users className="mr-1 inline h-3.5 w-3.5 text-[color:var(--brand)]" /> 5,000+ clients
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-white/50 py-5 backdrop-blur">
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="opacity-70">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal grid grid-cols-2 gap-8 rounded-3xl border border-border bg-white/60 p-10 backdrop-blur md:grid-cols-4">
          <Stat value={5000} suffix="+" label="Resumes delivered" />
          <Stat value={87} suffix="%" label="Interview success rate" />
          <Stat value={120} suffix="+" label="Companies hired into" />
          <Stat value={48} label="Hour avg. turnaround" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Everything you need to land the offer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A complete career toolkit, crafted by senior writers and ex-recruiters from top tech companies.
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

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[color:var(--brand-ink)] py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 left-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand)] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 animate-blob rounded-full bg-[color:var(--brand-cyan)] blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">A premium process, end to end</h2>
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
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Real wins from real clients</h2>
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
                  <div className="text-xs text-muted-foreground">{t.role}</div>
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
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Simple, transparent pricing</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">No hidden fees. Pick a plan that matches your career stage.</p>
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
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-bold">₹{p.price}</span>
                <span className={`pb-1 text-sm ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>/ project</span>
              </div>
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
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-2xl shadow-[color:var(--brand)]/30 md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to land your next role?</h2>
              <p className="mt-3 text-white/85">Get a free 15-minute consultation. No commitment, just clarity.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.04]"
            >
              Book a free call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
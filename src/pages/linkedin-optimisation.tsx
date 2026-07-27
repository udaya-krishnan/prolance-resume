import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Link2, Users, ShieldCheck,
  Search, Image, MessageCircle, Sparkle, PenLine, ListChecks, Eye,
} from "lucide-react";

const included = [
  { icon: PenLine, title: "Keyword-optimised headline rewrite", desc: "A headline built around the exact terms recruiters search for in your role and industry." },
  { icon: Sparkle, title: "Compelling About / Summary section", desc: "A narrative that positions your experience, strengths, and career direction — not a resume copy-paste." },
  { icon: ListChecks, title: "Experience section rewrites", desc: "Achievement-led rewrites of every role, aligned with your resume and optimised for recruiter search." },
  { icon: CheckCircle2, title: "Skills section — top 50 for your role", desc: "The 50 skills most likely to surface your profile in recruiter searches for your target roles." },
  { icon: Image, title: "Custom banner design", desc: "A professional banner image tailored to your industry and personal brand." },
  { icon: Search, title: "Profile SEO keyword audit", desc: "A full audit of your existing profile against the keywords recruiters in your field actually search." },
  { icon: Users, title: "Recommendations strategy", desc: "Guidance on who to ask, and what to ask for, to build credible, relevant recommendations." },
  { icon: Eye, title: "Open-to-work visibility settings guide", desc: "How to configure visibility so the right recruiters see you — without alerting your current employer." },
  { icon: MessageCircle, title: "WhatsApp support & revisions", desc: "Direct access to your writer for revisions until the profile feels right." },
];

export default function LinkedInOptimisation() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand)]/30 blur-3xl" />
          <div className="absolute top-10 right-0 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand-cyan)]/25 blur-3xl [animation-delay:-6s]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <Link2 className="h-3.5 w-3.5 text-[color:var(--brand)]" />
              LinkedIn Optimisation
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              A Profile That Gets <span className="text-gradient-brand">Found</span>, Not Just Viewed.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              A complete LinkedIn makeover — headline, About section, skills, experience, and keyword strategy
              designed to attract recruiter InMails and increase your profile visibility by up to 3x.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
              >
                WhatsApp Us — Free Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white"
              >
                View Pricing Plans
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" /> Delivered in 2–3 Business Days</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" /> 100% Satisfaction Guarantee</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[color:var(--brand)]" /> Up to 3x Profile Visibility</div>
            </div>
          </div>

          {/* Visual mock */}
          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-20 blur-2xl" />
            <div className="relative animate-float rounded-3xl glass p-6 shadow-2xl">
              <div className="h-16 rounded-xl bg-gradient-to-r from-[color:var(--brand-deep)] via-[color:var(--brand)] to-[color:var(--brand-cyan)]" />
              <div className="-mt-8 ml-4 grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-secondary font-display text-lg font-bold">
                AM
              </div>
              <div className="mt-3">
                <div className="font-display text-lg font-bold">Aarav Mehta</div>
                <div className="text-sm text-[color:var(--brand)]">Senior Product Manager · Ex-Google</div>
                <div className="mt-1 text-xs text-muted-foreground">1,200+ connections · Open to work</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Product Strategy", "Roadmapping", "0→1 Launch", "SQL", "A/B Testing"].map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-border/60 p-3 text-xs text-foreground/70">
                "Product leader with a track record of scaling 0→1 products to 1M+ users. Currently exploring
                Senior PM / Group PM roles in consumer tech..."
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 hidden animate-float rounded-2xl glass px-3 py-2 text-xs font-medium shadow-lg [animation-delay:-5s] sm:block">
              <Search className="mr-1 inline h-3.5 w-3.5 text-[color:var(--brand)]" /> 3x more recruiter searches
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">What's Included</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">The Complete Makeover</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every element of your profile that a recruiter sees, rewritten and optimised — not just a polish.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((f) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="absolute inset-x-0 -top-px h-px gradient-brand opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="reveal relative overflow-hidden rounded-3xl border border-transparent gradient-brand p-10 text-white md:p-12">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">LinkedIn Profile Optimisation</h3>
              <p className="mt-3 text-white/85">
                A full rewrite of your headline, About section, experience, skills, and banner — with a
                keyword strategy built for your target role and market.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0" /> Delivery in 2–3 business days</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0" /> WhatsApp support & revisions included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0" /> 100% satisfaction guarantee — we revise until you love it</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Standalone Price</p>
              <div className="mt-2 font-display text-4xl font-bold">₹1,999</div>
              <p className="mt-1 text-xs text-white/70">one-time · per profile</p>
              <div className="mt-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
                Up to 30% off when added to any resume package
              </div>
              <a
                href="https://wa.me/916360817439"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.02]"
              >
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/pricing"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                View resume + LinkedIn bundles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal rounded-2xl border border-border bg-white/60 p-8 text-center backdrop-blur">
          <p className="text-sm font-semibold text-[color:var(--brand)]">Not sure if you need LinkedIn, a resume, or both?</p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Message us on WhatsApp — tell us your target role and market, and we'll recommend the right combination for you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/916360817439"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/30 transition hover:scale-[1.03]"
            >
              WhatsApp Us — Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition hover:bg-white/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
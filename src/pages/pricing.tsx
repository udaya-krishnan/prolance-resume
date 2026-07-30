// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Sparkle, Clock, Zap,
   FileText, Globe2, MessageSquareText, BookOpenCheck,
} from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "899",
    desc: "Fresh graduates & early careers",
    delivery: "24–48 Hours",
    popular: false,
  },
  {
    name: "Standard",
    price: "1,299",
    desc: "Mid-career professionals",
    delivery: "48 Hours",
    popular: false,
  },
  {
    name: "Premium",
    price: "1,499",
    originalPrice: "2,000",
    savingLabel: "Save 25%",
    desc: "Senior professionals",
    delivery: "48 Hours",
    popular: true,
  },
];

const featureMatrix = [
  { label: "ATS-Optimised Resume", starter: true, standard: true, premium: true },
  { label: "Assured ATS Score 80+", starter: true, standard: true, premium: true },
  { label: "30 Days Editing Support", starter: true, standard: true, premium: true },
  { label: "Word + PDF Delivery", starter: true, standard: true, premium: true },
  { label: "Cover Letter", starter: false, standard: true, premium: true },
  { label: "Resume Customisation AI Prompts", starter: false, standard: true, premium: true },
  { label: "Interview Prep Prompt Guide", starter: false, standard: false, premium: true },
  { label: "Additional Infographic Resume", starter: false, standard: false, premium: true },
];

const featureDetails = [
  {
    icon: FileText,
    title: "ATS-Optimised Resume",
    desc: "Professionally written resume tested to achieve a minimum ATS score of 80+. Includes industry-specific keyword research, achievement-based content writing, clean ATS-safe formatting, and a career summary tailored to your target role and industry.",
  },
  {
    icon: ShieldCheck,
    title: "Assured ATS Score 80+",
    desc: "Your resume is tested against major ATS score checkers before delivery. If it scores below 80, we rewrite it at no charge, included in every package, every tier.",
  },
  {
    icon: Clock,
    title: "30 Days Editing Support",
    desc: "For 30 days after delivery, your resume remains a living document. Update a job title, add a certification, or tweak your skills, just message your writer on WhatsApp and we'll handle it, free of charge.",
  },
  {
    icon: Sparkle,
    title: "Resume Customisation AI Prompts",
    desc: "A Prolance exclusive included in Standard & Premium packages. A curated set of tested AI prompts that let you tailor your resume to any job description in minutes, using Claude, ChatGPT, or Gemini, without losing the quality of your original document.",
  },
  {
    icon: MessageSquareText,
    title: "Cover Letter (Standard & Premium)",
    desc: "A role-specific, persuasive cover letter written from scratch for your target company and role: not a generic template, but a custom document tailored to the job description, company culture, and recruiter expectations.",
  },
  {
    icon: BookOpenCheck,
    title: "Premium PDF Guides",
    desc: "Premium unlocks three downloadable guides: an AI-Powered Interview Preparation guide (role-specific questions, STAR-method frameworks, salary negotiation scripts), a LinkedIn Content Prompt guide, and a Resume Customisation guide.",
  },
];

// const faqs = [
//   {
//     q: "What makes Prolance Resume different from other resume writing services in India?",
//     a: "Five core commitments: every resume is prepared after a detailed one-on-one consultation, an ATS score of 80+ is guaranteed on every resume, 30 days of free editing support is included post-delivery, same-day delivery is available, and our exclusive AI prompt set helps you customise your resume for any job description independently.",
//   },
//   {
//     q: "What does ATS-friendly mean, and why does it matter?",
//     a: "ATS stands for Applicant Tracking System — software used by over 75% of Indian and global employers to automatically filter resumes before a human reads them. An ATS-friendly resume is formatted and keyworded to pass this automated screening.",
//   },
//   {
//     q: "How quickly will I receive my resume?",
//     a: "Standard orders are delivered within 24–48 hours of receiving your career details. Priority same-day delivery is available for an additional ₹300.",
//   },
//   {
//     q: "What is the starting price for a Prolance Resume?",
//     a: "Our Starter package begins at ₹899. Standard packages start at ₹1,299, and Premium packages at ₹1,499.",
//   },
//   {
//     q: "What are the three package tiers and what is the difference?",
//     a: "Starter includes your ATS-optimised resume, the ATS Score 80+ guarantee, 30 days of editing support, and Word + PDF delivery. Standard adds a cover letter and Resume Customisation AI Prompts. Premium adds the Interview Prep Prompt Guide and an Additional Infographic Resume, bundled at a significant saving versus buying individually.",
//   },
//   {
//     q: "What are the Resume Customisation AI Prompts included in every package?",
//     a: "A Prolance exclusive — a curated set of tested AI prompts included at no extra cost in Standard & Premium packages. These let you tailor your resume to any specific job description using Claude, ChatGPT, or Gemini — without losing the professional quality of your original Prolance document.",
//   },
//   {
//     q: "What are the three Premium PDF guides?",
//     a: "The AI-Powered Interview Preparation Guide contains role-specific interview questions, STAR-method answer frameworks, and salary negotiation scripts. The LinkedIn Content Prompt Guide includes tested prompts for growing your LinkedIn presence. The Resume Customisation Guide teaches you how to independently tailor your resume for different job applications — all delivered as downloadable PDFs.",
//   },
//   {
//     q: "What is the LinkedIn Profile Optimisation service and how is it priced?",
//     a: "A complete LinkedIn profile makeover covering your headline, about section, experience rewrites, skills section, SEO keyword audit, banner guidance, and recommendations strategy. Available standalone at ₹1,999, or as an add-on to any resume package for up to 30% off.",
//   },
//   {
//     q: "Do you write resumes for international job markets?",
//     a: "Yes. We specialise in country-specific resume formats for the UK, USA, Canada, Australia, New Zealand, and GCC countries including UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain — following each market's formatting conventions, keyword norms, and structural requirements, including no-photo and no-date-of-birth rules where applicable.",
//   },
//   {
//     q: "What does the 30 Days Editing Support cover?",
//     a: "For 30 days after delivery, you can request free edits to your resume — update a job title, add a certification, tweak your skills for a different role, or restructure any section. Just message your assigned writer on WhatsApp and we'll make the changes at no additional cost.",
//   },
//   {
//     q: "What industries do you cover?",
//     a: "20+ industries including IT and software development, healthcare and nursing, finance and banking, engineering, oil and gas, marketing, hospitality, education, legal, logistics, pharma, cybersecurity, construction, telecom, digital marketing, and freshers across all fields.",
//   },
//   {
//     q: "What if I am not happy with my resume?",
//     a: "We offer unlimited revisions until you're completely satisfied, at no additional cost. Your assigned writer stays with you throughout the process and works closely with you to get the resume exactly where you want it.",
//   },
//   {
//     q: "Is my personal information safe with Prolance Resume?",
//     a: "Absolutely. We never share your personal information with any third party. All communication is handled directly between you and your assigned writer via WhatsApp, and we follow strict data security practices throughout.",
//   },
//   {
//     q: "Can freshers and recent graduates use Prolance Resume?",
//     a: "Yes — and we highly recommend it. Our Starter package at ₹899 is specifically designed for students and recent graduates who have limited experience but want a resume that stands out through skills, projects, certifications, and academic achievements.",
//   },
// ];

function FeatureCell({ included }: { included: boolean }) {
  return included ? (
    <CheckCircle2 className="mx-auto h-4 w-4 text-[color:var(--brand)]" />
  ) : (
    <span className="mx-auto block text-sm text-muted-foreground/40">—</span>
  );
}

export default function Pricing() {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Pricing
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Simple, <span className="text-gradient-brand">Experience-Based</span> Pricing.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            No hidden charges. No upsells. Just results, with an assured ATS score of 80+ on every resume we deliver.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((p) => (
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
              <p className={`mt-3 text-xs font-medium ${p.popular ? "text-white/70" : "text-[color:var(--brand)]"}`}>
                Delivery in {p.delivery}
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

        <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-[color:var(--brand)]" /> Express Delivery (24 Hours): +₹300</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" /> ATS Score 80+ Guaranteed</span>
        </div>
      </section>

      {/* FEATURE COMPARISON TABLE */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="reveal overflow-hidden rounded-3xl border border-border bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="p-4 text-left font-display font-semibold">What's included</th>
                  <th className="p-4 text-center font-display font-semibold">Starter</th>
                  <th className="p-4 text-center font-display font-semibold text-[color:var(--brand)]">Standard</th>
                  <th className="p-4 text-center font-display font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((f, i) => (
                  <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-secondary/20"}>
                    <td className="p-4 text-foreground/80">{f.label}</td>
                    <td className="p-4 text-center"><FeatureCell included={f.starter} /></td>
                    <td className="p-4 text-center"><FeatureCell included={f.standard} /></td>
                    <td className="p-4 text-center"><FeatureCell included={f.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL RESUME + LINKEDIN ADD-ON */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-white p-8">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">International Resume</h3>
            <p className="mt-1 text-sm font-medium text-[color:var(--brand)]">From ₹1,699</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "Region-compliant content (no photo/DOB for US & UK)",
                "Europass-compatible for EU markets",
                "Country-specific formatting for USA, UK, Australia, Canada & Europe",
                "30 Days Editing Support",
                "Word + PDF Delivery",
                "Cover letter included",
                "Delivery in 48–72 hours",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-deep)]">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal rounded-3xl border border-transparent gradient-brand p-8 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur">
              <Sparkle className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">LinkedIn Profile Optimisation</h3>
            <p className="mt-1 text-sm font-medium text-white/90">₹1,999 standalone · up to 30% off with any resume package</p>
            <p className="mt-4 text-sm text-white/80">
              A complete profile makeover covering your headline, About section, experience rewrites, top-50 skills,
              custom banner, SEO keyword audit, and recommendations strategy. Delivered in 2–3 business days.
            </p>
            <Link
              to="/linkedin-optimisation"
              className="mt-6 inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition hover:scale-[1.02]"
            >
              See what's included <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE DETAILS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Details</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What Each Feature Actually Means</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureDetails.map((f) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Pricing Questions, Answered</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={f.q} className="reveal overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-display text-sm font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-[color:var(--brand)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </section> */}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] p-10 text-white md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 animate-blob rounded-full bg-[color:var(--brand-cyan)]/30 blur-2xl" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Still not sure which plan fits?</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Message us on WhatsApp for a free consultation. Tell us your target role and market, and
            we'll recommend the right package instantly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/916360817439"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[color:var(--brand-deep)]"
            >
              WhatsApp Us for a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
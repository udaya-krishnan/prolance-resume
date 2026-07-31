import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

const categories = [
  "All",
  "Why Prolance",
  "Pricing & Packages",
  "Process & Delivery",
  "Markets, Industries & Who It's For",
];

const faqs = [
  {
    category: "Why Prolance",
    q: "What makes Prolance Resume different from other resume writing services in India?",
    a: "Five core commitments: every resume is prepared after a detailed one-on-one consultation, an ATS score of 80+ is guaranteed on every resume, 30 days of free editing support is included post-delivery, same-day delivery is available, and our exclusive AI prompt set helps you customise your resume for any job description independently.",
  },
  {
    category: "Why Prolance",
    q: "What does ATS-friendly mean, and why does it matter?",
    a: "ATS stands for Applicant Tracking System — software used by over 75% of Indian and global employers to automatically filter resumes before a human reads them. An ATS-friendly resume is formatted and keyworded to pass this automated screening.",
  },
  {
    category: "Why Prolance",
    q: "Is my personal information safe with Prolance Resume?",
    a: "Absolutely. We never share your personal information with any third party. All communication is handled directly between you and your assigned writer via WhatsApp, and we follow strict data security practices throughout.",
  },
  {
    category: "Pricing & Packages",
    q: "What is the starting price for a Prolance Resume?",
    a: "Our Starter package begins at ₹899. Standard packages start at ₹1,299, and Premium packages at ₹1,499.",
  },
  {
    category: "Pricing & Packages",
    q: "What are the three package tiers and what is the difference?",
    a: "Starter includes your ATS-optimised resume, the ATS Score 80+ guarantee, 30 days of editing support, and Word + PDF delivery. Standard adds a cover letter and Resume Customisation AI Prompts. Premium adds the Interview Prep Prompt Guide and an Additional Infographic Resume, bundled at a significant saving versus buying individually.",
  },
  {
    category: "Pricing & Packages",
    q: "What are the Resume Customisation AI Prompts included in every package?",
    a: "A Prolance exclusive — a curated set of tested AI prompts included at no extra cost in Standard & Premium packages. These let you tailor your resume to any specific job description using Claude, ChatGPT, or Gemini — without losing the professional quality of your original Prolance document.",
  },
  {
    category: "Pricing & Packages",
    q: "What are the three Premium PDF guides?",
    a: "The AI-Powered Interview Preparation Guide contains role-specific interview questions, STAR-method answer frameworks, and salary negotiation scripts. The LinkedIn Content Prompt Guide includes tested prompts for growing your LinkedIn presence. The Resume Customisation Guide teaches you how to independently tailor your resume for different job applications — all delivered as downloadable PDFs.",
  },
  {
    category: "Pricing & Packages",
    q: "What is the LinkedIn Profile Optimisation service and how is it priced?",
    a: "A complete LinkedIn profile makeover covering your headline, about section, experience rewrites, skills section, SEO keyword audit, banner guidance, and recommendations strategy. Available standalone at ₹1,999, or as an add-on to any resume package for up to 30% off.",
  },
  {
    category: "Process & Delivery",
    q: "How quickly will I receive my resume?",
    a: "Standard orders are delivered within 24–48 hours of receiving your career details. Priority same-day delivery is available for an additional ₹300.",
  },
  {
    category: "Process & Delivery",
    q: "What does the 30 Days Editing Support cover?",
    a: "For 30 days after delivery, you can request free edits to your resume — update a job title, add a certification, tweak your skills for a different role, or restructure any section. Just message your assigned writer on WhatsApp and we'll make the changes at no additional cost.",
  },
  {
    category: "Process & Delivery",
    q: "What if I am not happy with my resume?",
    a: "We offer unlimited revisions until you're completely satisfied, at no additional cost. Your assigned writer stays with you throughout the process and works closely with you to get the resume exactly where you want it.",
  },
  {
    category: "Markets, Industries & Who It's For",
    q: "Do you write resumes for international job markets?",
    a: "Yes. We specialise in country-specific resume formats for the UK, USA, Canada, Australia, New Zealand, and GCC countries including UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain — following each market's formatting conventions, keyword norms, and structural requirements, including no-photo and no-date-of-birth rules where applicable.",
  },
  {
    category: "Markets, Industries & Who It's For",
    q: "What industries do you cover?",
    a: "20+ industries including IT and software development, healthcare and nursing, finance and banking, engineering, oil and gas, marketing, hospitality, education, legal, logistics, pharma, cybersecurity, construction, telecom, digital marketing, and freshers across all fields.",
  },
  {
    category: "Markets, Industries & Who It's For",
    q: "Can freshers and recent graduates use Prolance Resume?",
    a: "Yes — and we highly recommend it. Our Starter package at ₹899 is specifically designed for students and recent graduates who have limited experience but want a resume that stands out through skills, projects, certifications, and academic achievements.",
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const visible = faqs
    .map((f, i) => ({ ...f, originalIndex: i }))
    .filter((f) => activeCategory === "All" || f.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            FAQ
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-gradient-brand">Questions</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            Everything you need to know about pricing, delivery, and how Prolance Resume works.
            Can't find your answer? Message us on WhatsApp - we respond within the hour.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="reveal flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] ${
                cat === activeCategory
                  ? "border-transparent gradient-brand text-white"
                  : "border-border bg-white text-foreground/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="space-y-3">
          {visible.map((f) => {
            const isOpen = openIndex === f.originalIndex;
            return (
              <div key={f.q} className="reveal overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : f.originalIndex)}
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white shadow-2xl shadow-[color:var(--brand)]/30 md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Still Have Questions?</h2>
              <p className="mt-3 text-white/85">
                Message us on WhatsApp — tell us your target role and market, and we'll answer directly
                and recommend the right package for you.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916360817439?text=Hi%20Prolance%20Resume!%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.04]"
              >
                <MessageCircle className="h-4 w-4" />
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
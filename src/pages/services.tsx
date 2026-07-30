import { Link } from "react-router-dom";
import { FileText, Briefcase, Rocket, GraduationCap, Globe2, ArrowRight, CheckCircle2, Link2 } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "ATS-Friendly Resume Writing",
    price: "From ₹899",
    desc: "Professionally written, keyword-rich resumes optimised for ATS platforms and tailored to your target role, industry, and experience level. Available for India, Gulf, and international job markets.",
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Resume Customisation AI Prompts",
      "Every package includes exclusive AI Prompt set (works with Claude, ChatGPT & Gemini)",
    ],
  },
  {
    icon: Link2,
    title: "LinkedIn Profile Optimisation",
    price: "₹1,999 standalone / Up to 30% off with any resume package",
    desc: "A complete LinkedIn makeover covering your headline, about section, skills, experience section, and keyword strategy, designed to attract recruiter InMails and increase your profile visibility by up to 3x.",
    features: [
      "Keyword-optimised headline rewrite",
      "Compelling About / Summary section",
      "Experience section rewrites",
      "Skills section: top 50 for your role",
      "Custom banner design",
      "Profile SEO keyword audit",
      "Recommendations strategy",
      "Open-to-work visibility settings guide",
      "WhatsApp support & revisions",
      "Delivery in 2–3 Business Days",
    ],
  },
  {
    icon: Briefcase,
    title: "Cover Letter Writing",
    price: "Included in Standard & Premium packages",
    desc: "Persuasive, role-specific cover letters that complement your resume and give recruiters a compelling reason to call you. Tailored to the company culture, job requirements, and recruiter expectations.",
    features: [
      "Role-specific, persuasive cover letter",
      "Written from scratch for your target company",
      "Tailored to the job description & company culture",
      "Not a generic template: 100% custom",
      "Word + PDF delivery",
    ],
  },
  {
    icon: Rocket,
    title: "SOP Writing for University Admissions",
    price: "Contact us for pricing",
    desc: "Admission-winning Statements of Purpose for universities in the UK, Canada, Australia, Germany, and Ireland.",
    features: [
      "Structured, personal narratives",
      "Connects your academic journey with future aspirations",
      "Tailored to university & course requirements",
      "UK, Canada, Australia, Germany & Ireland",
      "Professionally written by career experts",
    ],
  },
  {
    icon: GraduationCap,
    title: "Fresher & Recent Graduate Resume",
    price: "From ₹899 (Starter package)",
    desc: "Our Starter package is specifically designed for students and recent graduates who have limited experience but want a resume that stands out through skills, projects, certifications, and academic achievements.",
    features: [
      "ATS-Optimised Resume",
      "Assured ATS Score 80+",
      "Skills, projects & certifications highlighted",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Delivery in 24–48 Hours",
    ],
  },
  {
    icon: Globe2,
    title: "International Resume",
    price: "From ₹1,699",
    desc: "Country-specific resume formats for UK, USA, Canada, Australia, New Zealand, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and all European markets, with the right format, keywords, and conventions.",
    features: [
      "Region-compliant content (no photo/DOB for US & UK)",
      "Europass-compatible for EU markets",
      "Country-specific formatting",
      "ATS Score 80+ Guaranteed",
      "30 Days Editing Support",
      "Word + PDF Delivery",
      "Delivery in 48–72 Hours",
    ],
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
  "🌍 Non-Profit & Development Sector",
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Services
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Complete Career <span className="text-gradient-brand">Document Services</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            ATS-Optimized · Human-Crafted. From your first resume to an international CV, we have a tailored
            offering for every stage of your career, with ATS Score 80+ guaranteed on every resume.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-[color:var(--brand)]">{s.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-deep)] transition group-hover:gap-2"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* EXPRESS DELIVERY NOTE */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal rounded-2xl border border-border bg-white/60 p-6 text-center backdrop-blur">
          <p className="text-sm font-semibold text-[color:var(--brand)]">⚡ Express Delivery (24 Hours)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Need your resume urgently? Priority same-day delivery is available on an additional charge of <strong>₹300</strong>.
            All standard orders are delivered within <strong>24–48 hours</strong> in Word and PDF formats, ready to apply immediately.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Resume Expertise Across Every Major Industry</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our writers specialise in crafting ATS-optimised resumes for professionals across 20+ industries,
            using the exact language, keywords, and formats that recruiters in your field expect.
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

      {/* SATISFACTION GUARANTEE */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="reveal grid gap-4 rounded-3xl border border-border bg-white/60 p-8 backdrop-blur sm:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-[color:var(--brand)]">100%</div>
            <div className="mt-1 text-sm font-semibold">Satisfaction Guarantee</div>
            <div className="mt-1 text-xs text-muted-foreground">We revise until you love it</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[color:var(--brand)]">ATS 80+</div>
            <div className="mt-1 text-sm font-semibold">Score Guaranteed</div>
            <div className="mt-1 text-xs text-muted-foreground">Tested before every delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[color:var(--brand)]">30 Days</div>
            <div className="mt-1 text-sm font-semibold">Free Editing Support</div>
            <div className="mt-1 text-xs text-muted-foreground">Your resume stays a living document</div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] p-10 text-white md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 animate-blob rounded-full bg-[color:var(--brand-cyan)]/30 blur-2xl" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Not sure which service you need?</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Message us on WhatsApp for a free consultation. Tell us your target role and market, and
            we'll recommend the right package for you instantly.
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
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
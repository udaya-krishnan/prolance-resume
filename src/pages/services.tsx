import { Link } from "react-router-dom";
import { FileText, Briefcase, Rocket, GraduationCap, Globe2, ArrowRight, CheckCircle2, Link2 } from "lucide-react";

const services = [
  { icon: FileText, title: "Resume Writing", price: "From ₹2,499",
    features: ["ATS-optimized format", "Role-specific keywords", "Quantified impact bullets", "PDF + DOCX delivery"] },
  { icon: Link2, title: "LinkedIn Optimization", price: "From ₹1,999",
    features: ["Keyword-rich headline", "Story-driven About", "Featured section build", "Recommendations strategy"] },
  { icon: Briefcase, title: "Cover Letters", price: "From ₹999",
    features: ["Hook-led opener", "Tailored per company", "1-page polished draft", "Editable file delivery"] },
  { icon: Rocket, title: "Career Coaching", price: "From ₹3,499 / hr",
    features: ["1:1 strategy session", "Personalized 90-day plan", "Salary negotiation playbook", "Async follow-ups"] },
  { icon: GraduationCap, title: "Student & Fresher Pack", price: "From ₹1,499",
    features: ["Fresher-focused resume", "Internship-ready CV", "LinkedIn starter setup", "Mock interview tips"] },
  { icon: Globe2, title: "Global / Overseas CV", price: "From ₹5,999",
    features: ["Country-specific formats", "USA, UK, EU, AUS variants", "Visa-aware phrasing", "Recruiter outreach plan"] },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Services
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Career services, <span className="text-gradient-brand">re-imagined</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            From your first resume to a global executive CV — we have a tailored offering for every stage of your career.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-lg shadow-[color:var(--brand)]/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-[color:var(--brand)]">{s.price}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-deep)] transition group-hover:gap-2">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] p-10 text-white md:p-16">
          <div className="absolute -right-10 -top-10 h-60 w-60 animate-blob rounded-full bg-[color:var(--brand-cyan)]/30 blur-2xl" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Not sure what you need?</h2>
          <p className="mt-3 max-w-xl text-white/80">Book a free 15-minute call and we'll recommend the right package for your goals.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[color:var(--brand-deep)]">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
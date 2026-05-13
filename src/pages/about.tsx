import { Link } from "react-router-dom";
import { Heart, Users, Award, Target, ArrowRight } from "lucide-react";

const values = [
  { icon: Heart, title: "Human-first", desc: "No templates. No AI slop. Real writers who actually read your story." },
  { icon: Award, title: "Premium quality", desc: "We obsess over every word. Two-round revision policy on every project." },
  { icon: Target, title: "Outcome-led", desc: "We measure success in interview calls, not file deliveries." },
  { icon: Users, title: "Clients for life", desc: "Most of our work comes from referrals — that's our north star." },
];

const team = [
  { name: "Ananya Iyer", role: "Founder & Lead Writer", bio: "Ex-recruiter at two unicorns. 10+ years in talent acquisition." },
  { name: "Vikram Shah", role: "Head of Coaching", bio: "ICF-certified coach. Helped 800+ professionals navigate transitions." },
  { name: "Neha Kulkarni", role: "Senior Writer", bio: "MBA + journalism background. Specializes in product & marketing." },
  { name: "Karthik Reddy", role: "Tech Resume Specialist", bio: "Ex-engineer at a FAANG company. Knows what tech recruiters scan for." },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand-cyan)]/30 blur-3xl" />
          <div className="absolute top-10 right-0 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand)]/30 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
              About Prolance
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              We help India's best <span className="text-gradient-brand">tell their story</span>.
            </h1>
            <p className="mt-6 text-muted-foreground">
              Prolance Resume started in 2019 with one frustration: brilliant Indian professionals
              were being overlooked because their resumes didn't do them justice. We set out to fix that.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we're a team of senior writers, ex-recruiters and career coaches working with
              clients across 30+ countries — from new graduates to C-suite leaders.
            </p>
          </div>
          <div className="reveal relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-20 blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {[
                { k: "5,000+", v: "Clients served" },
                { k: "30+", v: "Countries" },
                { k: "4.9/5", v: "Avg. rating" },
                { k: "87%", v: "Interview rate" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl glass p-6 text-center">
                  <div className="font-display text-3xl font-bold text-gradient-brand">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">What we believe</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Our values</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="reveal rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">The team</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Senior people. No juniors. No outsourcing.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="reveal rounded-2xl border border-border bg-white p-6 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full gradient-brand text-2xl font-bold text-white">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-xs font-medium text-[color:var(--brand)]">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="reveal relative overflow-hidden rounded-3xl gradient-brand p-10 text-white md:p-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's build your next chapter together.</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[color:var(--brand-deep)]">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
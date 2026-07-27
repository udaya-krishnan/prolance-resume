import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "../lib/blog-data";

const categories = ["All", "ATS Guide", "Resume Tips", "LinkedIn", "Gulf Jobs", "IT Careers", "Finance Careers", "Freshers", "Career Basics"];

export default function Blogs() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Career Blog
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Resume & Career Advice <span className="text-gradient-brand">That Gets You Hired</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            Practical guides on ATS resumes, LinkedIn optimisation, and job hunting — written by senior career
            professionals for Indian professionals targeting India, Gulf, and global markets.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="reveal flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] ${
                cat === "All"
                  ? "border-transparent gradient-brand text-white"
                  : "border-border bg-white text-foreground/70"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blogs/${p.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
            >
              {/* Cover */}
              <div className={`relative h-44 bg-gradient-to-br ${p.cover}`}>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-[color:var(--brand)]">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>

                {/* Keywords */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {p.readTime}
                  </span>
                </div>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)] transition group-hover:gap-2">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA below blogs */}
        <div className="reveal mt-16 rounded-3xl border border-border bg-white/60 p-8 text-center backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Ready to Get Shortlisted?</p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            Stop reading. Start applying — with a resume that works.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Get a professionally written, ATS-optimised resume starting at just ₹899. Delivered in 24–48 hours
            with 30 days of free editing support.
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
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition hover:bg-white/80"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
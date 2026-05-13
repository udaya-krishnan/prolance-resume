import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "../lib/blog-data";

export default function Blogs() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-[420px] w-[420px] animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">Blog</span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Career advice that <span className="text-gradient-brand">actually works</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            Tactical guides written by senior recruiters and resume writers — no fluff, no recycled LinkedIn takes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blogs/${p.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.cover}`}>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold transition group-hover:text-[color:var(--brand))]">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)] transition group-hover:gap-2">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
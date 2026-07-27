import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { posts } from "../lib/blog-data";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article>
      {/* HERO HEADER */}
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.cover} text-white`}>
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/85">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
          {/* Keywords */}
          <div className="mt-5 flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium backdrop-blur"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Excerpt / lead paragraph */}
        <p className="font-display text-xl leading-relaxed text-foreground/90">{post.excerpt}</p>

        {/* Body paragraphs */}
        <div className="mt-8 space-y-6 leading-relaxed text-foreground/80">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* In-article CTA */}
        <div className="mt-14 rounded-3xl gradient-brand p-8 text-white">
          <h3 className="font-display text-2xl font-bold">Want a resume that lands interviews?</h3>
          <p className="mt-2 text-white/85">
            Get a professionally written, ATS-optimised resume starting at just ₹899.
            Delivered in 24–48 hours with 30 days of free editing support.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://wa.me/916360817439"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.03]"
            >
              WhatsApp Us — Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/60">
            ATS Score 80+ Guaranteed · Same-Day Delivery Available · Accepted in 30+ Countries
          </p>
        </div>
      </div>

      {/* KEEP READING */}
      {others.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="font-display text-2xl font-bold">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blogs/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-32 bg-gradient-to-br ${p.cover}`}>
                  <div className="flex h-full items-end p-4">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-deep)]">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold leading-snug transition group-hover:text-[color:var(--brand)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)] transition group-hover:gap-2">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
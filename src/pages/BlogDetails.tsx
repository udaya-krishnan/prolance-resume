import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { posts } from "../lib/blog-data";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blogs" replace />;

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article>
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.cover} text-white`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/85">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-display text-xl leading-relaxed text-foreground/90">{post.excerpt}</p>
        <div className="mt-8 space-y-6 text-foreground/80 leading-relaxed">
          {post.content.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-14 rounded-3xl gradient-brand p-8 text-white">
          <h3 className="font-display text-2xl font-bold">Want a resume that lands interviews?</h3>
          <p className="mt-2 text-white/85">We'll craft yours in under 48 hours.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--brand-deep)]">
            Get started
          </Link>
        </div>
      </div>

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
                <div className={`h-32 bg-gradient-to-br ${p.cover}`} />
                <div className="p-5">
                  <h3 className="font-display font-semibold transition group-hover:text-[color:var(--brand))]">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
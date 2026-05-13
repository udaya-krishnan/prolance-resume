import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin,Globe, Share2, Users , Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--brand-ink)] text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[color:var(--brand)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[color:var(--brand-cyan)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Prolance Resume</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            India's premium resume writing & career services studio. We craft documents that
            open doors at top global companies.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, Users].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/services" className="hover:text-white">Resume Writing</Link></li>
            <li><Link to="/services" className="hover:text-white">LinkedIn Optimization</Link></li>
            <li><Link to="/services" className="hover:text-white">Cover Letters</Link></li>
            <li><Link to="/services" className="hover:text-white">Career Coaching</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@prolanceresume.in</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Prolance Resume. All rights reserved.</p>
          <p>Crafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
}

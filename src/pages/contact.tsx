import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,

  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "ATS Resume Writing — Starter (₹899)",
  "ATS Resume Writing — Standard (₹1,299)",
  "ATS Resume Writing — Premium (₹1,499)",
  "International Resume — Gulf/UK/USA/AU (₹1,699)",
  "LinkedIn Profile Optimisation (₹1,999)",
  "Cover Letter Writing",
  "SOP Writing for University Admissions",
  "Not sure — recommend the right package for me",
];

const targetMarkets = [
  "India (any city)",
  "UAE / Dubai",
  "Saudi Arabia",
  "Qatar",
  "Kuwait / Bahrain",
  "UK",
  "USA / Canada",
  "Australia / New Zealand",
  "Europe",
  "Other",
];

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "select";
  options?: string[];
}) {
  if (as === "select") {
    return (
      <div>
        <label className="text-sm font-medium text-foreground/80">
          {label}
        </label>
        <select
          name={name}
          className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-1 focus:ring-[color:var(--brand)]"
        >
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-1 focus:ring-[color:var(--brand)]"
      />
    </div>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      market: formData.get("market"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        toast.success(
          "Message sent! We'll get back to you within a few hours via WhatsApp or email.",
        );
        form.reset();
      } else {
        toast.error(
          "Something went wrong. Please try WhatsApp instead, or try again in a moment.",
        );
      }
    } catch (err) {
      toast.error(
        "Couldn't send your message. Please try WhatsApp instead, or try again in a moment.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-0 h-96 w-96 animate-blob rounded-full bg-[color:var(--brand-cyan)]/25 blur-3xl" />
          <div className="absolute top-10 right-0 h-96 w-96 animate-blob rounded-full bg-[color:var(--brand)]/25 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Contact Us
          </span>
          <h1 className="reveal mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Start with a{" "}
            <span className="text-gradient-brand">Free Consultation</span>.
          </h1>
          <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
            Tell us your target role and market - we'll recommend the right
            package instantly. Message us on WhatsApp for the fastest response.
          </p>
          {/* Trust bar */}
          <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
              ATS Score 80+ Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
              24–48 Hour Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
              30 Days Free Editing
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--brand)]" />{" "}
              Secure & Confidential
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-white p-8 shadow-xl shadow-[color:var(--brand)]/5"
            >
              <h2 className="font-display text-xl font-bold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond within a few hours. For the fastest reply, WhatsApp
                us directly.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name *"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <Field
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
                <Field
                  label="WhatsApp Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 6360817439"
                />
                <Field
                  label="Service Interested In"
                  name="service"
                  as="select"
                  options={serviceOptions}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Target Job Market"
                    name="market"
                    as="select"
                    options={targetMarkets}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-foreground/80">
                  Tell us about your goals *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Share your current role, target role, years of experience, and what you're looking to achieve. The more detail you give, the better we can help."
                  className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand)] focus:ring-1 focus:ring-[color:var(--brand)]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/30 transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Your information is secure and confidential. We never share
                your details with third parties.
              </p>
            </form>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* WhatsApp — primary CTA */}
            <div className="rounded-3xl gradient-brand p-7 text-white">
              <h3 className="font-display text-xl font-bold">
                Fastest way to reach us
              </h3>
              <p className="mt-2 text-sm text-white/85">
                Message us on WhatsApp for an instant free consultation. Tell us
                your target role and market - we'll recommend the right package
                right away.
              </p>
              <a
                href="https://wa.me/916360817439?text=Hi%20Prolance%20Resume!%20I%20am%20interested%20in%20your%20resume%20writing%20services.%20Can%20you%20recommend%20the%20right%20package%20for%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[color:var(--brand-deep)] transition hover:scale-[1.02]"
              >
                <svg
                  className="h-4 w-4"
                  fill="#25D366"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us - Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>

              <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 6360817439
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@prolanceresume.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Kakkanad, Kochi, Kerala, India
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  Mon–Sun, 9 AM – 9 PM IST
                </li>
              </ul>
            </div>

            {/* Pricing quick reference */}
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-display text-base font-bold">
                Quick Pricing Reference
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { name: "Starter Resume", price: "₹899" },
                  { name: "Standard Resume", price: "₹1,299" },
                  { name: "Premium Resume", price: "₹1,499" },
                  { name: "International Resume", price: "₹1,699" },
                  { name: "LinkedIn Optimisation", price: "₹1,999" },
                  { name: "Express Delivery (add-on)", price: "+₹300" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-foreground/70">{item.name}</span>
                    <span className="font-semibold text-[color:var(--brand)]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                All packages include ATS Score 80+ guarantee and 30 days editing
                support.
              </p>
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-border bg-white/60 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Typical Response Time
                  </div>
                  <div className="text-xs text-muted-foreground">
                    WhatsApp: Within 1 hour · Email: Within 3 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

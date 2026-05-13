import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

function Field({ label, name, type = "text", placeholder, required, as, options }: {
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
        <label className="text-sm font-medium">{label}</label>
        <select name={name} className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm outline-none transition">
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
  }
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} name={name} placeholder={placeholder} required={required} className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm outline-none transition" />
    </div>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent — we'll get back within a few hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <div className="min-h-screen">

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's talk careers.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Drop a message and we'll respond within a few hours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-5">

          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl border bg-white p-8 shadow-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" placeholder="Aarav Mehta" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field label="Phone (optional)" name="phone" type="tel" placeholder="+91 ..." />
                <Field label="Service" name="service" as="select" options={["Resume Writing", "LinkedIn Optimization", "Cover Letter", "Career Coaching", "Other"]} />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium">Tell us about your goals</label>
                <textarea name="message" required rows={5} placeholder="A few sentences about your current role..." className="mt-1.5 w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition" />
              </div>
              <button type="submit" disabled={loading} className="mt-6 w-full rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-60">
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-3xl gradient-brand p-7 text-white">
              <h3 className="text-xl font-bold">Reach us directly</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4" />
                  <span>hello@prolanceresume.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4" />
                  <span>+91 6360817439</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4" />
                  <span>Mon-Sat 10 AM - 7 PM IST</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between rounded-3xl border bg-white p-6">
              <div>
                <div className="text-lg font-semibold">Chat on WhatsApp</div>
                <p className="text-sm text-gray-500">Fastest way to reach us</p>
              </div>
              <a href="https://wa.me/+916360817439" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
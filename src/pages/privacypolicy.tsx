export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: `Prolance Resume ("Prolance Resume", "we", "us", or "our") provides resume writing, cover letter writing, LinkedIn profile optimisation, and career advisory services, including a dedicated career services offering for Merchant Navy professionals (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or use our Services.

By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect only the information reasonably necessary to provide our Services.`,
      subsections: [
        {
          title: "2.1 Account Information",
          items: ["Full name", "Email address", "Contact Number / WhatsApp"],
        },
        {
          title: "2.2 Resume and Career Content",
          items: [
            "Details you provide for the preparation of your resume, cover letter, or LinkedIn profile, such as your work history, educational qualifications, certifications, skills, and career objectives.",
            "For Merchant Navy professionals, sea-service related details, certificates of competency, and other maritime credentials that you choose to submit for the purpose of preparing your documents.",
            "Any documents you upload to us (e.g., existing resumes, certificates) for reference in preparing your Services.",
          ],
        },
        {
          title: "2.3 Information We Do Not Collect",
          content:
            "We do not knowingly collect payment card details, government identity numbers, biometric data, or other sensitive personal information beyond what is necessary to prepare your career documents. Where such details appear incidentally in documents you upload, we treat them with the same confidentiality obligations described in this Policy.",
        },
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect to:",
      items: [
        "Create, edit, and deliver your resume, cover letter, and LinkedIn profile optimisation",
        "Provide Merchant Navy career services tailored to your maritime background",
        "Communicate with you regarding your order, drafts, revisions, and support requests",
        "Improve and personalise our Services",
        "Send you service-related updates and, where you have opted in, promotional communications",
        "Comply with applicable legal obligations",
      ],
    },
    {
      title: "4. Legal Basis and Consent",
      content:
        "By submitting your account information and resume content to us, you consent to our collection and use of that information as described in this Privacy Policy for the purpose of delivering the Services you have requested.",
    },
    {
      title: "5. Sharing and Disclosure of Information",
      content: "We do not sell your personal information. We may share your information only in the following limited circumstances:",
      items: [
        "With our resume writers, editors, and career consultants strictly for the purpose of preparing and delivering your Services",
        "With service providers who support our technical infrastructure (e.g., hosting, email delivery), who are bound by confidentiality obligations",
        "If required to do so by law, regulation, court order, or governmental request",
        "To protect the rights, property, or safety of Prolance Resume, our users, or the public",
        "In connection with a merger, acquisition, or sale of business assets, subject to equivalent confidentiality protections",
      ],
    },
    {
      title: "6. Data Retention",
      content:
        "We retain your information and resume content for as long as your account remains active or as needed to provide you the Services, respond to support requests, and comply with our legal obligations. You may request deletion of your data at any time as described in Section 8 below.",
    },
    {
      title: "7. Data Security",
      content:
        "We implement reasonable technical and organisational safeguards, such as encrypted storage and restricted access controls, designed to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "8. Your Rights",
      content: "Subject to applicable law, you may:",
      items: [
        "Request access to the personal information we hold about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of your data",
        "Withdraw consent to non-essential communications at any time",
      ],
      footer: "To exercise any of these rights, please contact us using the details in Section 12.",
    },
    {
      title: "9. Cookies and Tracking",
      content:
        "Our website may use essential cookies required for basic functionality, such as keeping you logged in. We do not currently use third-party advertising or tracking cookies. Should this change, we will update this Policy accordingly.",
    },
    {
      title: "10. Children's Privacy",
      content:
        "Our Services are intended for individuals who are at least 18 years of age or the age of majority in their jurisdiction. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected such information, we will take steps to delete it.",
    },
    {
      title: "11. Governing Law",
      content:
        "This Privacy Policy is governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts of India.",
    },
    {
      title: "12. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised 'Last Updated' date. Continued use of our Services after such changes constitutes acceptance of the updated Policy.",
    },
    {
      title: "13. Contact Us",
      content: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:",
      contact: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-white/60 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[color:var(--brand)]/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium">
            Legal
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: August 3, 2026</p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            This policy describes how Prolance Resume collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Quick nav */}
        <div className="mb-12 rounded-2xl border border-border bg-white p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Table of Contents</h2>
          <ol className="grid gap-1.5 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.title}>
                <a
                  href={`#section-${s.title.split(".")[0].trim()}`}
                  className="text-sm text-[color:var(--brand)] hover:underline"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div
              key={s.title}
              id={`section-${s.title.split(".")[0].trim()}`}
              className="rounded-2xl border border-border bg-white p-7"
            >
              <h2 className="font-display text-xl font-bold text-foreground">{s.title}</h2>

              {s.content && (
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 whitespace-pre-line">{s.content}</p>
              )}

              {/* Bullet items */}
              {s.items && (
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {s.subsections && (
                <div className="mt-5 space-y-5">
                  {s.subsections.map((sub) => (
                    <div key={sub.title} className="rounded-xl border border-border bg-secondary/30 p-5">
                      <h3 className="text-sm font-semibold text-foreground">{sub.title}</h3>
                      {sub.content && (
                        <p className="mt-2 text-sm leading-relaxed text-foreground/75">{sub.content}</p>
                      )}
                      {sub.items && (
                        <ul className="mt-2 space-y-1.5">
                          {sub.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {s.footer && (
                <p className="mt-3 text-sm text-muted-foreground">{s.footer}</p>
              )}

              {s.contact && (
                <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-5 text-sm text-foreground/75">
                  <p className="font-semibold text-foreground">Prolance Resume</p>
                  <p className="mt-1">
                    Email:{" "}
                    <a href="mailto:hello@prolanceresume.com" className="text-[color:var(--brand)] hover:underline">
                      hello@prolanceresume.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
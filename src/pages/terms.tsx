export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "These Terms and Conditions (\"Terms\") govern your access to and use of the website and services offered by Prolance Resume (\"Prolance Resume\", \"we\", \"us\", or \"our\"), including resume writing, cover letter writing, LinkedIn profile optimisation, and our dedicated career services for Merchant Navy professionals (collectively, the \"Services\"). By accessing our website or purchasing our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.",
    },
    {
      title: "2. Description of Services",
      content: "Prolance Resume provides professional writing and advisory services, including but not limited to:",
      items: [
        "Resume/CV writing and formatting",
        "Cover letter writing",
        "LinkedIn profile optimisation",
        "Specialised career services for Merchant Navy professionals, including documents tailored to maritime industry requirements",
      ],
      footer:
        "Specific inclusions, number of revisions, and turnaround times for each package will be described on our website or order confirmation at the time of purchase.",
    },
    {
      title: "3. Eligibility",
      content:
        "You must be at least 18 years of age, or the age of majority in your jurisdiction, to use our Services. By using our Services, you represent that you meet this requirement.",
    },
    {
      title: "4. Accuracy of Information",
      content:
        "You agree to provide accurate, complete, and truthful information about your work history, qualifications, certifications, and (where applicable) maritime credentials. Prolance Resume prepares documents based solely on the information you provide and does not independently verify its accuracy. You are solely responsible for the truthfulness of the content included in your resume, cover letter, or LinkedIn profile.",
    },
    {
      title: "5. Orders, Fees, and Payment",
      items: [
        "All fees for Services will be displayed at the time of order and must be paid in full/half before work commences, unless otherwise agreed in writing.",
        "Prices are subject to change, but changes will not affect orders already confirmed.",
        "All payments are processed in Indian Rupees (INR) unless otherwise specified.",
      ],
    },
    {
      title: "6. Revisions and Delivery",
      content:
        "Each Service package includes a specified number of revisions, as communicated at the time of purchase. Requests for revisions must be submitted within the timeframe specified for your package. Additional revisions beyond the included number may incur additional charges. Delivery timelines are estimates and may vary based on the complexity of your requirements and responsiveness in providing information.",
    },
    {
      title: "7. Refunds and Cancellations",
      content:
        "Because our Services involve customised professional work, refund eligibility depends on the stage of work completed at the time of cancellation:",
      items: [
        "Full refund if cancelled before any work has commenced",
        "Partial refund, reflecting work already completed, if cancelled after work has commenced",
        "No refund once the final deliverable has been provided and accepted",
      ],
      footer:
        "Refund requests should be submitted in writing to our support contact and will be reviewed on a case-by-case basis.",
    },
    {
      title: "8. Intellectual Property",
      content:
        "Upon full payment, ownership of the final resume, cover letter, or LinkedIn content prepared specifically for you transfers to you for your personal career use. Prolance Resume retains the right to use anonymised templates, formats, and general methodologies developed in the course of providing Services for other clients. You may not resell, redistribute, or claim authorship of our proprietary templates or written methodologies.",
    },
    {
      title: "9. Confidentiality",
      content:
        "We treat the personal and career information you share with us as confidential and use it solely for the purpose of delivering your Services, in accordance with our Privacy Policy.",
    },
    {
      title: "10. No Guarantee of Employment Outcomes",
      content:
        "While we aim to prepare high-quality, professional documents, Prolance Resume does not guarantee interviews, job offers, employment, promotion, or any specific career outcome, including for Merchant Navy placements or sign-ons. Hiring and recruitment decisions rest solely with employers, recruiters, and manning agencies, over whom we have no control.",
      highlight: true,
    },
    {
      title: "11. Merchant Navy Career Services",
      content:
        "Our services for Merchant Navy professionals are limited to the preparation of career documents (resumes, cover letters, LinkedIn profiles) and related advisory support. We are not a recruitment agency, manning agent, or placement service, and we do not guarantee sign-on, berth allocation, or employment with any shipping company or manning agent unless expressly stated in a specific service package.",
    },
    {
      title: "12. User Conduct",
      content: "You agree not to:",
      items: [
        "Provide false, fraudulent, or misleading information for inclusion in your documents",
        "Use our Services for any unlawful purpose",
        "Attempt to gain unauthorised access to our systems or other users' accounts",
        "Reproduce, resell, or distribute our proprietary content or templates without authorisation",
      ],
    },
    {
      title: "13. Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, Prolance Resume shall not be liable for any indirect, incidental, special, or consequential damages, including loss of employment opportunities, arising from your use of our Services. Our total liability for any claim arising out of these Terms shall not exceed the amount you paid for the specific Service giving rise to the claim.",
    },
    {
      title: "14. Disclaimer of Warranties",
      content:
        "Our Services are provided on an \"as is\" and \"as available\" basis. We make no warranties, express or implied, regarding the fitness of our Services for a particular purpose, including but not limited to guaranteed employment outcomes.",
    },
    {
      title: "15. Termination",
      content:
        "We reserve the right to suspend or terminate your account or access to our Services at our discretion, including for violation of these Terms, without prior notice.",
    },
    {
      title: "16. Governing Law and Jurisdiction",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of India.",
    },
    {
      title: "17. Changes to These Terms",
      content:
        "We may revise these Terms from time to time. Updated Terms will be posted on our website with a revised \"Last Updated\" date. Continued use of our Services after such changes constitutes your acceptance of the revised Terms.",
    },
    {
      title: "18. Contact Us",
      content: "For questions regarding these Terms, please contact us at:",
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
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: August 3, 2026</p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Please read these Terms and Conditions carefully before using Prolance Resume's services.
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
                  href={`#section-t${s.title.split(".")[0].trim()}`}
                  className="text-sm text-[color:var(--brand)] hover:underline"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s) => (
            <div
              key={s.title}
              id={`section-t${s.title.split(".")[0].trim()}`}
              className={`rounded-2xl border p-7 ${
                s.highlight
                  ? "border-amber-200 bg-amber-50"
                  : "border-border bg-white"
              }`}
            >
              <h2 className={`font-display text-xl font-bold ${s.highlight ? "text-amber-800" : "text-foreground"}`}>
                {s.title}
              </h2>

              {s.highlight && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  ⚠️ Important Notice
                </div>
              )}

              {s.content && (
                <p className={`mt-3 text-sm leading-relaxed ${s.highlight ? "text-amber-900/80" : "text-foreground/75"}`}>
                  {s.content}
                </p>
              )}

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
                  <p className="mt-0.5">
                    Call:{" "}
                    <a href="tel:+916360817439" className="text-[color:var(--brand)] hover:underline">
                      +91 6360817439
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
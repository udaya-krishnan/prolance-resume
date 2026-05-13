export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string; // gradient class
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "ats-friendly-resume-2026",
    title: "How to Write an ATS-Friendly Resume in 2026",
    excerpt:
      "The applicant tracking landscape has shifted again. Here's exactly how to format, phrase, and structure your resume so it lands on a recruiter's desk.",
    date: "May 02, 2026",
    readTime: "7 min read",
    category: "Resume Tips",
    cover: "from-[color:var(--brand-deep)] via-[color:var(--brand)] to-[color:var(--brand-cyan)]",
    content: [
      "Modern ATS systems no longer just scan keywords — they parse semantic context. That means stuffing skills no longer works; you need clean structure paired with role-aligned phrasing.",
      "Use a single-column layout, standard section headings (Experience, Education, Skills), and consistent date formats. Avoid tables, text inside images, and decorative columns.",
      "Mirror the job description's vocabulary in your bullet points without copying verbatim. Lead each bullet with an action verb and quantify impact wherever possible.",
      "Finally, save as a PDF unless the portal explicitly asks for .docx — and always run your file through a free ATS checker before submitting.",
    ],
  },
  {
    slug: "linkedin-profile-glow-up",
    title: "The 9-Step LinkedIn Profile Glow-Up Recruiters Notice",
    excerpt:
      "From your headline to your featured section — a tactical playbook to make recruiters reach out to you instead of the other way around.",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    category: "LinkedIn",
    cover: "from-[color:var(--brand-cyan)] via-[color:var(--brand)] to-[color:var(--brand-deep)]",
    content: [
      "Your LinkedIn headline is real estate — don't waste it on a job title. Pair your role with the value you create and the audience you serve.",
      "The About section should read like a story, not a CV. Open with a hook, share your trajectory in 2-3 paragraphs, and close with a clear call-to-action.",
      "Use the Featured section to pin proof — case studies, talks, articles, or media. Recruiters skim; visuals win.",
    ],
  },
  {
    slug: "cover-letter-mistakes",
    title: "5 Cover Letter Mistakes That Are Killing Your Applications",
    excerpt:
      "Most cover letters are forgettable. These five fixes turn yours into a memorable opening pitch hiring managers actually read.",
    date: "Mar 30, 2026",
    readTime: "5 min read",
    category: "Career Advice",
    cover: "from-[color:var(--brand)] via-[color:var(--brand-deep)] to-[color:var(--brand-ink)]",
    content: [
      "Mistake #1: Repeating your resume. Use the cover letter to add context, not to summarize.",
      "Mistake #2: Generic openers like 'I am writing to apply…'. Lead with a specific story tied to the company.",
      "Mistake #3: Writing about yourself instead of the company's problem. Flip the frame.",
    ],
  },
];

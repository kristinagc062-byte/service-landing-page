import { Bot, FileText, Megaphone } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "AI-Powered Marketing Strategy",
    text: "Build a clearer marketing strategy based on your business goals and customers.",
  },
  {
    icon: FileText,
    title: "AI Content Creation",
    text: "Create consistent, engaging content without spending hours figuring out what to post.",
  },
  {
    icon: Megaphone,
    title: "Lead Generation",
    text: "Use smarter campaigns and marketing systems to attract and nurture potential customers.",
  },
];

export function Benefits() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Smarter Marketing System
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-5xl">
            Marketing Should Work Smarter, Not Harder.
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
            AI can help businesses create a more consistent marketing system
            without adding more confusion or busywork.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              className="rounded-[1.5rem] border border-brand-primary/15 bg-white p-5 shadow-soft"
              key={title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-black text-brand-ink">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { AlertCircle } from "lucide-react";

const problems = [
  "Relying too much on word-of-mouth",
  "Not getting consistent online inquiries",
  "Unsure what content to post",
  "Spending money on marketing without knowing what works",
];

export function Problem() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-brand-primary/15 bg-white p-7 shadow-soft sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-warm text-brand-primary">
          <AlertCircle aria-hidden="true" className="h-6 w-6" />
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-black text-brand-ink sm:text-4xl">
          Is Your Business Struggling to Get Consistent Customers?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
          Many small businesses have great products or services but still
          struggle to get consistent inquiries online.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              className="rounded-2xl border border-brand-primary/10 bg-brand-soft/55 px-4 py-4 text-sm font-bold leading-6 text-brand-ink"
              key={problem}
            >
              {problem}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

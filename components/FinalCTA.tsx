import { ArrowDown } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-brand-primary/15 bg-brand-soft p-7 text-center shadow-soft sm:p-10">
        <h2 className="text-3xl font-black text-brand-ink sm:text-5xl">
          Ready to Start Marketing Smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
          Get the free guide and discover how AI can become part of your
          marketing strategy.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-base font-black text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#471541] focus:outline-none focus:ring-4 focus:ring-brand-primary/20"
            href="#book-call"
          >
            Book Your Free Strategy Call
            <ArrowDown aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

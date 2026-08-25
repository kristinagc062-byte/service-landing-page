import { ArrowDown, Bot, Megaphone, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="premium-grid absolute inset-x-0 top-0 h-[34rem] opacity-80" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mx-auto inline-flex rounded-full border border-brand-primary/15 bg-white/80 px-4 py-2 text-sm font-bold text-brand-primary shadow-sm backdrop-blur">
          Practical AI marketing for growing businesses
        </p>
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-black tracking-normal text-brand-ink sm:text-6xl lg:text-7xl">
          Turn Your Marketing Into a{" "}
          <span className="text-brand-primary">Customer-Getting System</span>{" "}
          With AI
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-balance text-xl font-semibold leading-8 text-brand-ink sm:text-2xl sm:leading-10">
          Stop relying only on word-of-mouth. Use AI-powered marketing
          strategies to attract more attention, generate qualified leads, and
          build a stronger online presence.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-base font-black text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#471541] focus:outline-none focus:ring-4 focus:ring-brand-primary/20"
            href="#book-call"
          >
            Get My Free Marketing Guide
            <ArrowDown aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-brand-muted">
          No complicated process. Just practical marketing guidance for growing
          businesses.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            [Bot, "AI strategy"],
            [Megaphone, "More attention"],
            [TrendingUp, "Business growth"],
          ].map(([Icon, label]) => (
            <div
              className="flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/15 bg-white/75 px-4 py-3 text-sm font-black text-brand-ink shadow-sm backdrop-blur"
              key={label as string}
            >
              <Icon aria-hidden="true" className="h-4 w-4 text-brand-primary" />
              {label as string}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

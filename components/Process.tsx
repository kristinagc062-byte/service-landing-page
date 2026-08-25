const steps = [
  {
    title: "Strategy",
    text: "Clear marketing direction instead of random posting.",
  },
  {
    title: "Consistency",
    text: "Create and distribute useful content consistently.",
  },
  {
    title: "Growth",
    text: "Focus marketing efforts on generating real business opportunities.",
  },
];

export function Process() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Why Digital Kristina?
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-5xl">
            Built for Clearer, More Consistent Marketing
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
            We combine AI, marketing strategy, content, and lead generation to
            help businesses build a stronger and more consistent online
            marketing system.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              className="relative rounded-[1.5rem] border border-brand-primary/15 bg-white p-6 shadow-soft"
              key={step.title}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-black text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

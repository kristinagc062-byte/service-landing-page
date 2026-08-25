type UrgencyProps = {
  copy?: string;
};

export function Urgency({ copy }: UrgencyProps) {
  if (!copy) {
    return null;
  }

  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-brand-primary/15 bg-brand-soft p-6 text-center">
        <p className="text-base font-bold leading-7 text-brand-ink">{copy}</p>
      </div>
    </section>
  );
}

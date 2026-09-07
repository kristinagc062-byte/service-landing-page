import { FlodeskForm } from "@/components/FlodeskForm";

export function CTAForm() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8" id="book-call">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="text-center lg:sticky lg:top-8 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Book Free Consultation
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-5xl">
            Book Free Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Discover practical ways to use AI and marketing to attract more
            customers, improve your online presence, and create a more
            consistent customer acquisition process.
          </p>
          <div className="mt-7 rounded-[1.5rem] border border-brand-primary/15 bg-brand-soft/70 p-6 text-left shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              One-to-One Consultation
            </p>
            <h3 className="mt-3 text-2xl font-black text-brand-ink">
              Get a One-to-One Marketing Consultation
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Get personalized guidance for your business and discover how
              AI-powered marketing can help you attract more customers and grow
              online.
            </p>
          </div>
          <div className="mt-7 rounded-[1.5rem] border border-brand-primary/15 bg-white p-6 text-left shadow-soft">
            <h3 className="text-xl font-black text-brand-ink">
              Simple Guidance for Growing Businesses
            </h3>
            <p className="mt-3 leading-7 text-brand-muted">
              Submit your details and we&apos;ll guide you toward smarter,
              practical marketing ideas for your business.
            </p>
          </div>
        </div>

        <FlodeskForm />
      </div>
    </section>
  );
}

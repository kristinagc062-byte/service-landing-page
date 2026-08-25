import Image from "next/image";

export function BrandLine() {
  return (
    <div className="px-5 pb-10 text-center sm:px-6 lg:px-8">
      <Image
        alt="Digital Kristina AI Marketing Agency"
        className="mx-auto h-auto w-28 object-contain opacity-90 sm:w-36"
        height={370}
        src="/digital-kristina-logo.png"
        width={674}
      />
      <p className="mx-auto max-w-xl text-sm font-semibold leading-6 text-brand-muted">
        Smarter Marketing. Powered by AI. Built for Growth.
      </p>
    </div>
  );
}

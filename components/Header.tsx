import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-10 px-5 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
        <div aria-label="Digital Kristina AI Marketing Agency">
        <Image
          alt="Digital Kristina AI Marketing Agency"
            className="h-auto w-40 object-contain sm:w-48 lg:w-56"
          height={370}
          priority
          src="/digital-kristina-logo.png"
          width={674}
        />
      </div>
        <p className="shrink-0 text-xs font-black uppercase tracking-[0.16em] text-brand-primary sm:text-sm">
          AI Marketing Agency
        </p>
      </div>
    </header>
  );
}

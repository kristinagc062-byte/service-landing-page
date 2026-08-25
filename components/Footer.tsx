import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { href: siteConfig.facebookUrl, label: "Facebook" },
].filter((link) => link.href);

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-8 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl border-t border-brand-primary/10 pt-8">
        <Image
          alt="Digital Kristina AI Marketing Agency"
          className="mx-auto h-auto w-28 object-contain sm:w-36"
          height={370}
          src="/digital-kristina-logo.png"
          width={674}
        />
        {footerLinks.length > 0 ? (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {footerLinks.map((link) => (
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-primary/15 px-5 text-sm font-black text-brand-primary transition hover:bg-brand-soft focus:outline-none focus:ring-4 focus:ring-brand-primary/15"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-brand-muted">
          Have something to say? We&apos;d love to hear from you.
        </p>
        <p className="mt-6 text-xs leading-6 text-brand-muted">
          © 2026 Digital Kristina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

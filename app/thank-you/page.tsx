import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { BrandLine } from "@/components/BrandLine";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Thank You - Consultation Booked",
  description:
    "Your AI marketing consultation request has been received. Watch what happens next and chat with digital Kristina on WhatsApp.",
  openGraph: {
    title: "Thank You - Consultation Booked | digital Kristina",
    description:
      "Your request has been received. Continue with digital Kristina on WhatsApp.",
    url: "/thank-you",
  },
};

export default function ThankYouPage() {
  const videoUrl = siteConfig.consultationVideoUrl;
  const whatsappUrl = siteConfig.whatsappUrl;

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <section className="relative px-5 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="premium-grid absolute inset-x-0 top-0 h-96 opacity-70" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-primary shadow-glow">
            <CheckCircle2 aria-hidden="true" className="h-8 w-8" />
          </div>
          <h1 className="text-balance text-4xl font-black tracking-normal text-brand-ink sm:text-5xl">
            Thank You! Your Request Has Been Received
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-brand-ink">
            You&apos;re one step closer to getting the right marketing strategy
            for your business.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-brand-muted">
            We&apos;ve received your details successfully. Please watch the short
            video below to understand what happens next.
          </p>

          <section className="mt-10 rounded-[2rem] border border-brand-primary/15 bg-white p-4 text-left shadow-soft sm:p-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                Watch This Before You Continue
              </p>
              <h2 className="mt-3 text-2xl font-black text-brand-ink sm:text-3xl">
                Video Coming Soon
              </h2>
              <p className="mt-3 text-base leading-7 text-brand-muted">
                A short video will be added here later so you can see exactly
                what happens next. For now, this space is ready for your real
                consultation video.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-brand-primary/15 bg-gradient-to-br from-brand-soft via-white to-[#fbf4f9]">
              <div className="aspect-video w-full">
                {videoUrl ? (
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                    src={videoUrl}
                    title="Watch this before your consultation"
                  />
                ) : (
                  <div className="flex h-full min-h-48 items-center justify-center px-5 text-center text-brand-primary">
                    <div>
                      <PlayCircle
                        aria-hidden="true"
                        className="mx-auto h-14 w-14"
                      />
                      <p className="mt-4 text-lg font-black text-brand-ink">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-[2rem] border border-brand-primary/15 bg-white p-6 text-left shadow-soft sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-secondary">
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-brand-ink">
                    Have Questions? Chat With Us Directly on WhatsApp
                  </h2>
                  <p className="mt-2 leading-7 text-brand-muted">
                    Click the button below and send us a message. We&apos;ll be
                    happy to help.
                  </p>
                </div>
              </div>
              <div>
                {whatsappUrl ? (
                  <a
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-base font-black text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-[#471541] focus:outline-none focus:ring-4 focus:ring-brand-primary/20 sm:w-auto"
                    href={whatsappUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                    Chat With Us on WhatsApp
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </a>
                ) : (
                  <div
                    aria-disabled="true"
                    className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-slate-200 px-6 py-4 text-base font-black text-slate-600 sm:w-auto"
                  >
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                    Add WhatsApp Link
                  </div>
                )}
              </div>
            </div>
          </section>

          <p className="mt-10 text-2xl font-black text-brand-primary">
            We&apos;re excited to connect with you!
          </p>
        </div>
      </section>
      <BrandLine />
    </main>
  );
}

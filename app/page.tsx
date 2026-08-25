import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Marketing Guide",
  description:
    "Get a free AI marketing guide and discover practical ways to attract more customers with Digital Kristina.",
  openGraph: {
    title: "Free AI Marketing Guide | Digital Kristina",
    description:
      "Turn your marketing into a customer-getting system with practical AI-powered marketing guidance.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <CTAForm />
      <Footer />
    </main>
  );
}

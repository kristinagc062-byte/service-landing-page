import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-kristina.vercel.app"),
  title: {
    default: "Free AI Marketing Guide | Digital Kristina",
    template: "%s | digital Kristina",
  },
  description:
    "Get a free AI marketing guide from Digital Kristina and learn practical ways to attract more customers online.",
  openGraph: {
    title: "Get Your Free AI Marketing Guide",
    description:
      "Practical AI marketing guidance for growing businesses that want more attention, qualified leads, and a stronger online presence.",
    url: "https://digital-kristina.vercel.app",
    siteName: "Digital Kristina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Guide | Digital Kristina",
    description:
      "Discover how AI can become part of your marketing strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

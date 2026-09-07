import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const metaPixelId = "1464596725498657";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            alt=""
            height="1"
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

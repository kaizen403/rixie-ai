import "./globals.css";
import "@fontsource/lexend/latin.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rixie AI: Flip on autopilot and AI’s got the rest.",
  description:
    "Rixie AI: Flip on autopilot and AI’s got the rest. Let Rixie handle your routine effortlessly.",
  keywords: [
    "AI task management",
    "virtual assistant",
    "autopilot",
    "Rixie AI",
  ],
  openGraph: {
    title: "Rixie AI: Flip on autopilot and AI’s got the rest.",
    description:
      "Rixie AI: Flip on autopilot and AI’s got the rest. Let Rixie handle your routine effortlessly.",
    url: "https://rixie.in",
    siteName: "Rixie AI",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Rixie AI logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="AI task management, virtual assistant, autopilot, Rixie AI"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://rixie.in" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className="font-lexend">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


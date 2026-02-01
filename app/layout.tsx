import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
  variable: "--font-sans", 
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", 
  display: "swap",
});

const siteName = "Instituto Zavarise";
const siteDescription = "Saúde integrativa, bem-estar e cuidado especializado.";
const siteUrl = "https://institutozavarise.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    siteName,
    description: siteDescription,
    locale: "pt_BR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F7F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-dvh antialiased bg-[#F9F7F5] text-[#5E4B35]">
        <AOSProvider />
        {children}
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Instituto Zavarise",
  description: "Excelência em saúde e bem-estar com atendimento humanizado, tecnologia de ponta e uma experiência sofisticada.",
  metadataBase: new URL("https://www.institutozavarise.com.br")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="bg-[var(--background)] font-[var(--font-sans)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
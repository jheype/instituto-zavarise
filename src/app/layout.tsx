import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Instituto Zavarise",
  description:
    "Excelência em saúde e bem-estar com atendimento humanizado, tecnologia de ponta e uma experiência sofisticada.",
  metadataBase: new URL("https://www.institutozavarise.com.br")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
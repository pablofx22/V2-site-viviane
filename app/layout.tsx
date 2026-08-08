import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-google",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans-google",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Viviane Seguro | Biomédica Esteta em Porto Alegre",
  description:
    "Procedimentos estéticos de alto padrão em Porto Alegre. Toxina botulínica, preenchimento facial, bioestimuladores e muito mais. Agende sua avaliação com a Dra. Viviane Seguro — Biomédica Esteta.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dra. Viviane Seguro | Biomédica Esteta em Porto Alegre",
    description:
      "Procedimentos estéticos de alto padrão em Porto Alegre. Agende sua avaliação.",
    type: "website",
    url: "https://dravivianeseguro.com.br",
    siteName: "Dra. Viviane Seguro",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
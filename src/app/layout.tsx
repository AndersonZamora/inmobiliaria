import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Ana Inmobiliaria | Inmobiliaria en Cajamarca',
    default: 'Ana Inmobiliaria | Inmobiliaria en Cajamarca'
  },
  description: 'Inmobiliaria: Venta y alquiler de casas, departamentos, terrenos en Cajamarca.',
  openGraph: {
    title: {
      template: '%s - Ana Inmobiliaria | Inmobiliaria en Cajamarca',
      default: 'Ana Inmobiliaria | Inmobiliaria en Cajamarca'
    },
    description: "Si estás buscando invertir en un lugar de ensueño, ¡esta es tu oportunidad! Nuestra inmobiliaria te ofrece lotes de terreno y departamentos en las mejores zonas de Cajamarca",
    images: '/imgs/inmobiliaria.jpg',
    authors: 'CinCout Technology',
    emails: 'cincout.technology@gmail.com',
    locale:'es_ES',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <meta name="google-site-verification" content="WyhCghnN9dtVjHOCD1Bqg3vYPMlw80UsLzn306zZSqA" />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}

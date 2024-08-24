import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Inmobiliaria| Ana',
    default: 'Inicio - Inmobiliaria | Ana'
  },
  description: "Inmobiliaria Ana en cajamarca",
  openGraph: {
    title: {
      template: '%s - Inmobiliaria| Ana',
      default: 'Inicio - Inmobiliaria | Ana'
    },
    description: "Si estás buscando invertir en un lugar de ensueño, ¡esta es tu oportunidad! Nuestra inmobiliaria te ofrece lotes de terreno y departamentos en las mejores zonas de Cajamarca",
    images: '/imgs/inmobiliaria.jpg',
    authors: 'CinCout Technology',
    emails: 'cincout.technology@gmail.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <meta name="google-site-verification" content="EeEL6YMTfcgl0bo53-7OP8-dVW5_SMOOT9cKeFvcrZQ" />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}

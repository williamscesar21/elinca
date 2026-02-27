import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ELINCA - Electrónica Industrial C.A. | Automatización Industrial",
  description:
    "Más de 30 años liderando la automatización industrial en Venezuela y España. System integrator certificado para Siemens, Schneider Electric, Rockwell Automation y AVEVA.",
  keywords:
    "automatización industrial, PLC, SCADA, HMI, Siemens, Schneider Electric, Rockwell, AVEVA, Venezuela, integración de sistemas, tableros eléctricos",
  authors: [{ name: "ELINCA - Electrónica Industrial C.A." }],
  openGraph: {
    title: "ELINCA - Automatización Industrial",
    description: "30+ años automatizando el futuro de la industria",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

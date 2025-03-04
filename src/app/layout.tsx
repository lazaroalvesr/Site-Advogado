import type { Metadata } from "next";
import { Marcellus, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/_components/Header";

const geisMarcellus = Marcellus({
  weight: ['400'],
  variable: '--font-marcellus',
});

const geistRoboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Adriano D. Signer Advogados – Consultoria Jurídica e Soluções Legais Personalizadas",
  description: `Site moderno e responsivo para o escritório Adriano D. Signer Advogados, 
  projetado para oferecer uma navegação intuitiva e destacar as áreas de atuação jurídicas com clareza. 
  Contém informações de contato, localização e facilita o acesso aos serviços especializados, com um layout 
  profissional e fácil de navegar.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/icons/icone.png" type="image/png" />
      </head>
      <body
        className={`${geisMarcellus.variable} ${geistRoboto.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

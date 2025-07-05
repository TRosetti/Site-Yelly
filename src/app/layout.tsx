import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // escolha os pesos que você vai usar
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Yelly - Máquininha até 70% off e as melhores taxas!",
  description: "A revolução da maquininha com a melhor taxa do mercado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hwr7pja.css" />
      </head>
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

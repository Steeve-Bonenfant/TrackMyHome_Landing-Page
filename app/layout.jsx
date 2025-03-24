import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "TrackMyHome",
  description:
    "Suivez chaque étape de la construction de votre maison grâce à notre plateforme dédiée. Trouvez facilement les meilleurs constructeurs près de chez vous pour réaliser votre projet en toute sérénité.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

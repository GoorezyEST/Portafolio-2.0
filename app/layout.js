import { ThemeProvider } from "@/context/GlobalComponent";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://franco-espinosa-portafolio.vercel.app/"),
  title: "Franco Espinosa - Portafolio",
  description:
    "Mi nombre es Franco Espinosa, soy un desarrollador de Argentina que aprovecha cada día para expandir mis conocimientos y enfrentar desafíos que pongan a prueba mis habilidades.",
  openGraph: {
    title: "Franco Espinosa - Portafolio",
    description:
      "Mi nombre es Franco Espinosa, soy un desarrollador de Argentina que aprovecha cada día para expandir mis conocimientos y enfrentar desafíos que pongan a prueba mis habilidades.",
    sitename: "Franco Espinosa - Portafolio",
    url: "https://franco-espinosa-portafolio.vercel.app/",
  },
  keywords: [
    "franco espinosa",
    "Franco Espinosa",
    "portafolio",
    "Portafolio",
    "Mar del Plata",
    "Argentina",
  ],
  verification: {
    google: "oGTabLT5X7vXrCB9SzgMaX3TX3Djdnh0UTh-rE5XuAI"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

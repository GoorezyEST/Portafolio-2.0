import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Franco Espinosa - Portafolio",
  description:
    "Mi nombre es Franco Espinosa, soy un desarrollador de Argentina que aprovecha cada día para expandir mis conocimientos y enfrentar desafíos que pongan a prueba mis habilidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

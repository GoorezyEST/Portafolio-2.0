import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Franco Espinosa - Portafolio</title>
        <meta
          name="description"
          content="Mi nombre es Franco Espinosa, soy un desarrollador de Argentina que aprovecha
          cada día para expandir mis conocimientos y enfrentar desafíos
          que pongan a prueba mis habilidades."
        />

        <meta property="og:title" content="Franco Espinosa - Portafolio" />
        <meta
          property="og:description"
          content="Mi nombre es Franco Espinosa, soy un desarrollador de Argentina que aprovecha
          cada día para expandir mis conocimientos y enfrentar desafíos
          que pongan a prueba mis habilidades."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://i.imgur.com/jxluJJg.png"
        />
        <meta property="og:site_name" content="Franco Espinosa - Portafolio" />
        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="Franco Espinosa, franco espinosa, frontend, portafolio, Portafolio, Argentina, programador, desarrollador, argentino"
        />
        <meta name="author" content="Franco Espinosa - Portafolio" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta
          name="keywords"
          content="Sultan Badri, portfolio, web developer, software engineer, front-end, full-stack"
        />
        <meta property="og:title" content="Sultan Badri | Portfolio" />
        <meta
          property="og:description"
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sultanbadri.vercel.app/" />
        <meta
          property="og:image"
          content="https://sultanbadri.vercel.app/favicon/favicon.ico"
        />
        <meta
          property="og:image:alt"
          content="Sultan Badri Portfolio Favicon"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sultan Badri | Portfolio" />
        <meta
          name="twitter:description"
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta
          name="twitter:image"
          content="https://sultanbadri.vercel.app/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

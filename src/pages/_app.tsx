import Head from "next/head";

import Layout from "@src/components/layout/layout.component";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import "@src/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tri Denda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

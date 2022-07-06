import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simul Vivere -- Ostello Le Ginestre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
      title="Le Donne Costruttrici di Pace."
      description="Le Donne Costruttrici di Pace.
      Premio Donne in Prima Fila,
      Consegnato Da Dacia Mariani."
      canonical="https://simul-vivere.vercel.app/"
      openGraph={{
        url: 'https://simul-vivere.vercel.app/',
        title: 'Le Donne Costruttrici di Pace.',
        description: 'Le Donne Costruttrici di Pace, Premio Donne in Prima Fila, Consegnato Da Dacia Mariani.',
        images: [
          {
            url: 'https://simul-vivere.vercel.app/assets/dacia.jpeg',
            width: 1080,
            height: 600,
            alt: 'Dacia Mariani',
            type: 'image/jpeg',
          },
          
        ],
        site_name: 'Ostello le Ginestre',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />


      <Layout>
        <Hero />
        <Feature />
        
      </Layout>
    </>
  );
}

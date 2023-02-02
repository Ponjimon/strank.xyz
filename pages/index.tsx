import Head from 'next/head';
import React from 'react';
import { NextSeo } from 'next-seo';
import strank from './strank.png';

const title = 'Stockholm Snakes - Get Strank or Go Home';
const description = 'Strank Snakes from Stockholm';
const url = 'https://strank.xyz/';

const Index = () => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `${url}/strank.png`,
            width: 1024,
            height: 1024,
            alt: 'Stockholm Snakes Logo - Strank',
            type: 'image/png',
          },
        ],
      }}
    />
    <div
      className="w-screen h-screen bg-black"
      style={{
        background: `url('${strank.src}') no-repeat center`,
        backgroundSize: 'cover',
      }}
    />
  </>
);

export default Index;

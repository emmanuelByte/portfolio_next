import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import { useLoader } from '../context/loadingContext';
import usePageTransition from '../hooks/pageTransition';
const Home: NextPage = () => {
  const isLoading = usePageTransition();
  return (
    <div className="flex sm:min-h-[calc(100vh-5rem)] h-full flex-col py-2 px-10 no-scrollbar">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<HeroSection />}
    </div>
  );
};

export default Home;

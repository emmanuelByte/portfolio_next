import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeContext from '../context/themeContext';
import Nav from '../components/Header/Nav';
import LoadingContext, { useLoader } from '../context/loadingContext';
import { AnimatePresence } from 'framer-motion';

import '../styles/scss/_mixins.scss';
import '@animxyz/core';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <LoadingContext>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            //
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          }}
        >
          <div className="bg-primary-dark text-primary-light">
            <Nav />
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </LoadingContext>
    </ThemeContext>
  );
}

export default MyApp;

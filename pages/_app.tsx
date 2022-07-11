import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeContext from '../context/themeContext';
import Nav from '../components/Header/Nav';
import LoadingContext, { useLoader } from '../context/loadingContext';
import { AnimatePresence } from 'framer-motion';
import Aos from '../context/Aos';
import 'aos/dist/aos.css';
import '../styles/scss/_mixins.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <LoadingContext>
        <Aos>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => {
              //
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
              }
            }}
          >
            <div className="bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark">
              <Nav />
              <Component {...pageProps} />
            </div>
          </AnimatePresence>
        </Aos>
      </LoadingContext>
    </ThemeContext>
  );
}

export default MyApp;

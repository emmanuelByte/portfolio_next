import React, { useRef } from 'react';
import { useTheme } from '../../context/themeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useLoader } from '../../context/loadingContext';
import { useRouter } from 'next/router';
import { Cross as Hamburger } from 'hamburger-react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import useControls from '../../hooks/useControls';
// @ts-ignore
import { useClickOutside } from 'react-click-outside-hook';
import useOnClickOutside from 'use-onclickoutside';
const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoading, toggleIsLoading } = useLoader();
  const router = useRouter();
  const handlePush = (path: string) => {
    if (router.pathname !== path) {
      toggleIsLoading(true);
      setTimeout(() => {
        router.push(path);
      }, 2000);
    }
  };
  const [mobileIsOpen, setMobileIsOpen] = React.useState(false);
  const controls = useControls(mobileIsOpen);
  const leftVariation = {
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
      scale: [0.6, 0.8, 1.2, 1],
      transitionEnd: {
        padding: '1.25rem 2.5rem',
      },
    },
    hidden: {
      opacity: 0,
      x: -100,

      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      scale: 0,
    },
  };
  const rightVariation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
      scale: [0.6, 0.8, 1.2, 1],
      transitionEnd: {
        padding: '1.25rem 2.5rem',
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      scale: 0,
    },
  };

  const ref = React.useRef(null);
  // useOnClickOutside(ref, () => {
  //   setMobileIsOpen(false);
  // });

  return (
    <div className="text-primary-light font-bold cursor-pointer">
      <div className="w-full hidden sm:flex justify-between h-20 items-center px-10">
        <div
          className="logo hover:text-primary-light/50"
          onClick={() => handlePush('/')}
        >
          Home
        </div>
        <ul className="hidden sm:flex gap-x-5 items-center">
          <li
            className="hover:text-primary-light/50"
            onClick={() => handlePush('/experience')}
          >
            Experience
          </li>
          <li
            className="hover:text-primary-light/50"
            onClick={() => handlePush('/highlights')}
          >
            Highlight
          </li>
          <li
            className="hover:text-primary-light/50"
            onClick={() => handlePush('/contact')}
          >
            Contact Me
          </li>

          {/* <button
          onClick={toggleTheme}
          className="text-primary-light dark:text-primary-dark"
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button> */}
        </ul>
      </div>

      <div className="relative sm:hidden flex flex-col">
        <div className="flex justify-between w-full px-5 py-5 items-center">
          <div
            className="logo hover:text-primary-light/50"
            onClick={() => handlePush('/')}
          >
            Home
          </div>
          <Hamburger toggle={setMobileIsOpen} toggled={mobileIsOpen} />
        </div>
        <AnimatePresence>
          {mobileIsOpen && (
            <motion.div
              className="overflow-hidden fixed w-full h-fit top-[90px]"
              ref={ref}
              onClick={() => {
                setMobileIsOpen(false);
              }}
            >
              <motion.ul
                className="bg-secondary text-primary-light w-full"
                animate={controls}
                variants={leftVariation}
                exit="hidden"
              >
                <li
                  className="hover:text-primary-light/50"
                  onClick={() => handlePush('/experience')}
                >
                  Experience
                </li>
              </motion.ul>
              <motion.ul
                className="bg-secondary text-primary-light w-full"
                animate={controls}
                variants={rightVariation}
                exit="hidden"
              >
                <li
                  className="hover:text-primary-light/50"
                  onClick={() => handlePush('/highlights')}
                >
                  Highlight
                </li>
              </motion.ul>
              <motion.ul
                className="bg-secondary text-primary-light w-full"
                animate={controls}
                variants={leftVariation}
                exit="hidden"
              >
                <li
                  className="hover:text-primary-light/50"
                  onClick={() => handlePush('/contact')}
                >
                  Contact Me
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;

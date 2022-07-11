import React from 'react';
import { useTheme } from '../../context/themeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useLoader } from '../../context/loadingContext';
import { useRouter } from 'next/router';
const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoading, toggleIsLoading } = useLoader();
  const router = useRouter();
  const handlePush = (path: string) => {
    if (router.pathname !== path) {
      toggleIsLoading(true);
      setTimeout(() => {
        router.push(path);
      }, 1000);
    }
  };

  return (
    <div
      className="w-full flex justify-between h-20 items-center px-10 text-primary-light font-bold cursor-pointer"
      //   onClick={() => toggleIsLoading(true)}
    >
      <div
        className="logo hover:text-primary-light/50"
        onClick={() => handlePush('/')}
      >
        Home
      </div>
      <ul className="flex gap-x-5 items-center">
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
        <button
          onClick={toggleTheme}
          className="text-primary-light dark:text-primary-dark"
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Nav;

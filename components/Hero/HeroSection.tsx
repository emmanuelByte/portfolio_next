import { ArrowCircleDownIcon, ArrowDownIcon } from '@heroicons/react/outline';
import React from 'react';
import ReactAcrText from 'arc-text';
import { useRouter } from 'next/router';
import { useLoader } from '../../context/loadingContext';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const [textElement, setTextElement] = React.useState<HTMLDivElement | null>(
    null
  );
  React.useEffect(() => {
    setTimeout(() => {
      const textEle = document.getElementById('curve-text') as HTMLDivElement;
      if (textEle) {
        setTextElement(textEle);
        const arc = new ReactAcrText(textEle);
        arc.direction(1);
      }
    }, 0);
  }, []);
  const [count, setCount] = React.useState(0);
  const [stopCount, setStopCount] = React.useState(false);
  React.useEffect(() => {
    let interval: any;

    if (textElement && !stopCount) {
      interval = setInterval(() => {
        const nextCount = count + 1;
        setCount(nextCount % 360);
        textElement.style.transform = `rotate(${count}deg)`;
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [textElement, count, stopCount]);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const { isLoading, toggleIsLoading } = useLoader();
  const handlePush = (path: string) => {
    if (router.pathname !== path) {
      toggleIsLoading(true);
      setTimeout(() => {
        router.push(path);
      }, 2000);
    }
  };
  const handleMouseOver = () => {
    setStopCount(true);
  };
  const handleMouseOut = () => {
    setStopCount(false);
  };
  return (
    <div className="pt-14 flex flex-col justify-between space-y-6 no-scrollbar overflow-hidden">
      <div className="space-y-6 overflow-hidden text-2xl sm:text-7xl">
        <motion.h1
          animate={{
            opacity: [0.2, 0.5, 0.7, 1],
            y: 0,
            scale: [0.9, 1.1, 1.2, 1],
          }}
          initial={{ opacity: 0, y: -2000, scale: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: 'easeInOut',
            type: 'keyframes',
          }}
          className="font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-200 to-white"
        >
          I am Name
        </motion.h1>
        <motion.h1
          animate={{ opacity: [0.2, 0.5, 0.7, 1], x: 0, scale: [1, 1.5, 1] }}
          initial={{ opacity: 0, x: -2000, scale: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: 'easeInOut',
            type: 'keyframes',
          }}
          className="font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-light to-primary-dark/20"
        >
          I Build Software That Run
        </motion.h1>
        <motion.h1
          animate={{ opacity: [0.2, 0.5, 0.7, 1], y: 0, scale: [1, 1.5, 1] }}
          initial={{ opacity: 0, y: 2000, scale: 0 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: 'easeInOut',
            type: 'keyframes',
          }}
          className="font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-dark/50 to-secondary-dark"
        >
          On Web Browsers.
        </motion.h1>
      </div>
      <div className="absolute -right-10 bottom-1/3 rotate-90 !my-0">
        <motion.h4
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.1, 1.2, 1], opacity: 1 }}
          transition={{
            delay: 1,
            // @ts-ignore
            duration: 2.5,
            ease: 'easeInOut',
            type: 'keyframes',
            repeat: Infinity,
          }}
          className="text-sm sm:text-base"
        >
          example@gmail.com
        </motion.h4>
      </div>

      <button
        className={`absolute bottom-2 h-fit overflow-hidden mt-10 text-primary-light/50 hover:text-primary-light no-scrollbar sm:w-full m-w-[450px] -translate-x-1/2 left-1/2 w-1/2 `}
        onClick={() => handlePush('/experience')}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h3
          id="curve-text"
          className="overflow-hidden w-full h-full font-Gothink-bold text-sm sm:text-base"
        >
          Click to the next Section.
        </h3>
        <ArrowDownIcon className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </button>
    </div>
  );
};

export default HeroSection;

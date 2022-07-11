import { ArrowCircleDownIcon, ArrowDownIcon } from '@heroicons/react/outline';
import React from 'react';
import ReactAcrText from 'arc-text';
import { useRouter } from 'next/router';
import { useLoader } from '../../context/loadingContext';
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
      }, 1000);
    }
  };
  const handleMouseOver = () => {
    console.log('Mouse In');
    setStopCount(true);
  };
  const handleMouseOut = () => {
    console.log('Mouse Out');
    setStopCount(false);
  };
  return (
    <div className="pt-14 flex flex-col justify-between space-y-6 no-scrollbar">
      <div className="space-y-6">
        <h1
          className="text-7xl font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-200 to-white"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          I&apos;m &qout;Name&qout;,
        </h1>
        <h1
          className="text-7xl font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-light to-primary-dark/20"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          I Build Software That Run
        </h1>
        <h1
          className="text-7xl font-Satoshi font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-dark/50 to-secondary-dark"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          On Web Browsers.
        </h1>
      </div>
      <div className="absolute -right-10 bottom-1/3 rotate-90 !my-0">
        <h4 className="">example@gmail.com</h4>
      </div>

      <button
        className={`absolute bottom-2 h-fit overflow-hidden mt-10 text-primary-light/50 hover:text-primary-light no-scrollbar w-full m-w-[450px] -translate-x-1/2 left-1/2`}
        onClick={() => handlePush('/experience')}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h3
          id="curve-text"
          className="overflow-hidden w-full font-Gothink-bold"
        >
          Click to the next Section.
          <span className="w-1 h-1 rounded-full bg-current text-current"></span>{' '}
        </h3>
        <ArrowDownIcon className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </button>
    </div>
  );
};

export default HeroSection;

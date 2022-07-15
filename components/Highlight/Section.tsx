import React, { useState } from 'react';
import useInView from '../../hooks/useInView';
import Stepper from '../Stepper/Stepper';
import Styles from '../../styles/scss/Stepper.module.scss';
import classNames from 'classnames';
import useResize from '../../hooks/useResize';
import useDeviceType from '../../hooks/useDeviceType';
import useControls from '../../hooks/useControls';
import { motion } from 'framer-motion';

const Section = ({ index, item }: { index: number; item: any }) => {
  const { ref, entry, inView } = useInView({ threshold: 0.5 });
  const isArray = Array.isArray(item);
  const device = useDeviceType();
  const [data, setData] = useState({
    first: isArray ? item[0] : item,
    second: isArray && item[1],
  });
  const screee = useResize();
  React.useEffect(() => {
    setData({
      first: isArray ? item[0] : item,
      second: isArray && item[1],
    });
  }, [device, inView, isArray, item, screee]);
  const v = (index % 2) + 1;
  const leftVariation = {
    visible: {
      opacity: 1,
      scale: [0.9, 1.05, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
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
      scale: [0.9, 1.05, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
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
  const leftControls = useControls(inView);
  const rightControls = useControls(inView);
  return (
    <div
      className={`grid ${
        isArray ? 'grid-cols-[1.5fr,.2fr,1.5fr]' : 'grid-cols-[1.5fr,.2fr]'
      } w-full min-h-[calc(100vh-5rem)] h-full not-overflow relative`}
      ref={ref}
    >
      {/* Left */}
      <div className="absolute w-[95%] md:w-1/2 top-[0px] bg-white h-[2px]">
        <div className="relative h-full w-full">
          <div
            className={classNames(
              'w-[4rem] h-[2px] rounded-full bg-secondary-dark absolute left-0 top-1/2 -translate-y-1/2 ',
              Styles[`current-flow-right${v}`]
            )}
          />

          <div className="w-8 h-8 rounded-full bg-white absolute left-0 top-1/2 -translate-y-1/2">
            <div className="relative h-full w-full">
              <div className={Styles.circle}></div>
            </div>
          </div>
        </div>
        <h1 className="ml-20">2022 March</h1>
      </div>
      {/* Right */}
      {data.second && (
        <div className="absolute w-[95%] md:w-1/2 right-0 top-[0px] bg-white h-[2px] text-right">
          <div className="relative h-full w-full">
            <div
              className={classNames(
                'w-[4rem] h-[2px] rounded-full bg-secondary-dark absolute right-0 top-1/2 -translate-y-1/2 ',
                Styles[`current-flow-left${v}`]
              )}
            />
            <div className="w-8 h-8 rounded-full bg-white absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative h-full w-full">
                <div
                  className={classNames(Styles.circle, Styles.circle2)}
                ></div>
              </div>
            </div>
          </div>
          <h1 className="mr-20">2022 March</h1>
        </div>
      )}

      <motion.div
        className="place-self-center bg-gray-900/60 p-10 rounded shadow"
        animate={leftControls}
        variants={leftVariation}
      >
        Left Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reprehenderit cumque vel voluptate quaerat! Necessitatibus dolor hic
        repellat rerum a, optio inventore dolorum, sequi neque quod aspernatur
        maiores vero nulla alias. <br />
      </motion.div>
      <div className="mx-5 flex justify-center z-10">
        <Stepper isBig v={v} />
      </div>
      {data.second && (
        <motion.div
          animate={rightControls}
          variants={rightVariation}
          className="place-self-center bg-gray-900/60 p-10 rounded shadow"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          mollitia sed unde veritatis beatae expedita cupiditate? Fugit iste
          non, libero culpa adipisci beatae blanditiis repellendus sapiente
          recusandae vitae, iusto quia?
        </motion.div>
      )}
    </div>
  );
};

export default Section;

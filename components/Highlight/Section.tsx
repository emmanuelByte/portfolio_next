import React, { useState } from 'react';
import { useAOS } from '../../context/Aos';
import useInView from '../../hooks/useInView';
import Stepper from '../Stepper/Stepper';
import Styles from '../../styles/scss/Stepper.module.scss';
import classNames from 'classnames';
import useResize from '../../hooks/useResize';
import useDeviceType from '../../hooks/useDeviceType';
const Section = ({ index, item }: { index: number; item: any }) => {
  const AOS = useAOS() as any;
  const { ref, entry, inView } = useInView({ threshold: 0 });
  const isArray = Array.isArray(item);
  const device = useDeviceType();
  const [data, setData] = useState({
    first: isArray ? item[0] : item,
    second: isArray && item[1],
  });
  const screee = useResize();
  React.useEffect(() => {
    console.log({ item, screee, isArray, device });
    setData({
      first: isArray ? item[0] : item,
      second: isArray && item[1],
    });
    AOS.refresh();
  }, [inView, screee]);
  const v = (index % 2) + 1;

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

      <div
        data-aos="fade-right"
        className="place-self-center bg-gray-900/60 p-10 rounded shadow"
      >
        Left Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Reprehenderit cumque vel voluptate quaerat! Necessitatibus dolor hic
        repellat rerum a, optio inventore dolorum, sequi neque quod aspernatur
        maiores vero nulla alias. <br />
      </div>
      <div className="mx-5 flex justify-center z-10">
        <Stepper isBig v={v} />
      </div>
      {data.second && (
        <div
          data-aos="fade-left"
          className="place-self-center bg-gray-900/60 p-10 rounded shadow"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          mollitia sed unde veritatis beatae expedita cupiditate? Fugit iste
          non, libero culpa adipisci beatae blanditiis repellendus sapiente
          recusandae vitae, iusto quia?
        </div>
      )}
    </div>
  );
};

export default Section;

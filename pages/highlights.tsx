import React, { useState } from 'react';
import Section from '../components/Highlight/Section';
import Stepper from '../components/Stepper/Stepper';
import { useAOS } from '../context/Aos';
import usePageTransition from '../hooks/pageTransition';
import useDeviceType from '../hooks/useDeviceType';
import lodash from 'lodash';
import useResize from '../hooks/useResize';
const HighLight = () => {
  const isLoading = usePageTransition();
  const localData = [1, 2, 3, 4, 5, 6, 9];
  const screenSize = useResize() as number;
  const [data, setData] = useState<any[] | any[][]>();
  const device = useDeviceType();
  React.useEffect(() => {
    if (screenSize > 700) {
      console.log('wetin you dey find here?');
      setData(lodash.chunk(localData, 2));
    } else {
      setData(localData);
    }
  }, [screenSize]);
  return (
    <div className="flex min-h-screen h-full flex-col pb-2 pt-10 px-10 md:px-20 w-full items-center mx-auto">
      {isLoading === false && (
        <div>
          <div className="mb-20 flex flex-col text-center items-center">
            <h1>Lorem ipsum dolor sit amet consectetur, </h1>
          </div>
          {data!?.map((item, index) => (
            <Section {...{ key: index, index, item }} />
          ))}
        </div>
      )}
    </div>
  );
};
// const groupData = (data: any[], screenSize: number) => {
//   const arr = [];
//   let dArr = [];
//   if (screenSize > 700) {
//     const amount = 2;
//     console.log(screenSize);
//     const size = data.length;
//     for (let index = 0; index < size; index = index + amount) {
//       const max = size < index + amount ? size : index + amount;
//       arr.push(data.slice(index, max));
//     }
//     return arr;
//   } else return data;
// };

export default HighLight;

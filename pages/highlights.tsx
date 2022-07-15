import React, { useMemo, useState } from 'react';
import Section from '../components/Highlight/Section';
import Stepper from '../components/Stepper/Stepper';
import usePageTransition from '../hooks/pageTransition';
import useDeviceType from '../hooks/useDeviceType';
import lodash from 'lodash';
import useResize from '../hooks/useResize';
const HighLight = () => {
  const isLoading = usePageTransition();
  const localData = useMemo(() => [1, 2, 3, 4, 5, 6, 9], []);
  const screenSize = useResize() as number;
  const [data, setData] = useState<any[] | any[][]>();
  const device = useDeviceType();
  React.useEffect(() => {
    if (screenSize > 700) {
      setData(lodash.chunk(localData, 2));
    } else {
      setData(localData);
    }
  }, [localData, screenSize]);
  return (
    <div className="flex min-h-screen h-full flex-col pb-2 pt-10 px-10 md:px-20 w-full items-center mx-auto">
      {
        <div>
          <div className="mb-20 flex flex-col text-center items-center">
            <h1>Lorem ipsum dolor sit amet consectetur, </h1>
          </div>
          {data!?.map((item, index) => (
            <Section {...{ index, item }} key={index} />
          ))}
        </div>
      }
    </div>
  );
};

export default HighLight;

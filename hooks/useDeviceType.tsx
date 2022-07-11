import React, { useState } from 'react';
import useResize from './useResize';
export type DeviceTypes = 'Desktop' | 'Tablet' | 'Mobile';
const useDeviceType = () => {
  const screenSize = useResize() as number;
  const [device, setDevice] = useState<DeviceTypes>();
  React.useEffect(() => {
    if (screenSize < 700) setDevice('Mobile');
    else setDevice('Desktop');
    console.log(screenSize);
  }, [screenSize]);
  return device;
};

export default useDeviceType;

import { useAnimation } from 'framer-motion';
import React from 'react';

const useControls = (inView: boolean) => {
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return controls;
};

export default useControls;

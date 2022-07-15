import React from 'react';
import { useInView as uIv } from 'react-intersection-observer';

const useInView = (options?: any) => {
  const { ref, inView, entry } = uIv({
    /* Optional options */
    threshold: 0,
    ...options,
  });

  return { ref, inView, entry };
};
export default useInView;

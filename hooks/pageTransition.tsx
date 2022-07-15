import React from 'react';
import { useLoader } from '../context/loadingContext';

const usePageTransition = () => {
  const { toggleIsLoading, isLoading } = useLoader();
  React.useEffect(() => {
    toggleIsLoading(true);
    setTimeout(() => {
      toggleIsLoading(false);
    }, 1000);
  }, []);
  return isLoading;
};

export default usePageTransition;

import React, { useState } from 'react';

const useResize = () => {
  const [screenWidth, setScreenWidth] = useState<number>();
  React.useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', () =>
        setScreenWidth(window?.outerWidth)
      );
      setScreenWidth(window?.outerWidth);

      return () => window.removeEventListener('resize', () => {});
    }
  }, []);
  return screenWidth;
};

export default useResize;

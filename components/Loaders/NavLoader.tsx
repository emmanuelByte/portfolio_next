import React from 'react';
import { useLoader } from '../../context/loadingContext';

const NavLoader = () => {
  const { isLoading, toggleIsLoading } = useLoader();
  React.useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        toggleIsLoading(false);
      }, 2000);
    // return () => {
    //   toggleIsLoading(false);
    // };
  }, [isLoading, toggleIsLoading]);
  return (
    <div
      className={`absolute inset-0 w-full h-screen z-20 bg-secondary text-white flex items-center justify-center ${
        isLoading === undefined || isLoading ? '' : 'h-0'
      } transition-all page-nav`}
    >
      {isLoading === undefined || (isLoading && <p>Loading...</p>)}
    </div>
  );
};

export default NavLoader;
// export const NavLoaderHOC = (AuthComponent: any) => {
//   const { isLoading, toggleIsLoading } = useLoader();
//   toggleIsLoading(true);

//   function HOC(props: any) {
//     return <AuthComponent {...props} />;
//   }
//   return HOC;
// };

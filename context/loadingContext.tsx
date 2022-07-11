import React, { useContext } from 'react';
import NavLoader from '../components/Loaders/NavLoader';
type isLoading = boolean;
const Context = React.createContext<{
  isLoading: isLoading | undefined;
  toggleIsLoading: (loading?: boolean) => void;
}>({
  isLoading: false,
  toggleIsLoading: () => {},
});
const LoadingContext = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = React.useState<isLoading>();

  const toggleIsLoading = (loading?: boolean) => {
    if (loading !== undefined) {
      setIsLoading(loading);
    } else setIsLoading(!isLoading);
  };

  return (
    <Context.Provider value={{ isLoading, toggleIsLoading }}>
      <NavLoader />
      {children}
    </Context.Provider>
  );
};
export const useLoader = () => useContext(Context);

export default LoadingContext;

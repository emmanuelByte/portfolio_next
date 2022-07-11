import React from 'react';
import AOS from 'aos';
const Context = React.createContext({});
const Aos = ({ children }: { children: React.ReactNode }) => {
  const [aos, setAOS] = React.useState(AOS);
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);
  return <Context.Provider value={aos}>{children}</Context.Provider>;
};
export const useAOS = () => React.useContext(Context);

export default Aos;

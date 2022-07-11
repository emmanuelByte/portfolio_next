import React from 'react';
type Themes = 'light' | 'dark';
const Context = React.createContext<{
  theme: Themes;
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});
const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Themes>('dark');
  React.useEffect(() => {
    const defaultTheme = localStorage.getItem('theme') as Themes;
    if (defaultTheme) {
      setTheme(defaultTheme);
    }
  }, []);
  React.useEffect(() => {
    if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    localStorage.setItem('theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};
export const useTheme = () => React.useContext(Context);

export default ThemeContext;

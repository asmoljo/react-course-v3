import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// funkcija koja provjerava da li je korisik u browseru ukljucio dark mode. funkcija se poziva u useState() hook-u ispod
const getInitialDarkMode = () => {
  const prefersDarkmode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  console.log(prefersDarkmode);
  return prefersDarkmode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkeTheme = !isDarkTheme;
    setIsDarkTheme(newDarkeTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkeTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

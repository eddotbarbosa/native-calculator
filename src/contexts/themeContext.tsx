import React, {Children, createContext, useState} from 'react';

interface ThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const themeContext = createContext<ThemeContext | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = function({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      {children}
    </themeContext.Provider>
  )
};

export {themeContext, ThemeProvider};

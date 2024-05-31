import React, { createContext, useState, FC } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  userName: string;
  setUserName: (userName: string) => void;
}

const defaultContext: ThemeContextType = {
  theme: "dark",
  setTheme: () => {},
  userName: "",
  setUserName: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("dark");
  const [userName, setUserName] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme, userName, setUserName }}>
      {children}
    </ThemeContext.Provider>
  );
};

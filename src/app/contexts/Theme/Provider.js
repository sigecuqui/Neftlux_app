import { useState, useLayoutEffect, useEffect } from "react";
import ThemeContext from "./context";

const AVAILABLE_THEMES = ["light", "dark", "girly", "nature"];

const STYLES_VARIABLES = {
  light: {
    "text-color": "#000000",
    "background-color": "#f1f1f1",
    "link-color": "red",
  },
  dark: {
    "text-color": "#ffffff",
    "background-color": "black",
    "link-color": "#61dafb",
  },
  girly: {
    "text-color": "#000000",
    "background-color": "pink",
    "link-color": "darkturquoise",
  },
  nature: {
    "text-color": "#000000",
    "background-color": "darkgreen",
    "link-color": "dodgerblue",
  },
};

const ThemeProvider = ({ children, initial }) => {
  const [theme, setThemeValue] = useState(
    localStorage.getItem("theme") || initial || "light"
  );

  const setTheme = (theme) => {
    const newTheme = AVAILABLE_THEMES.includes(theme) ? theme : "light";

    setThemeValue(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useLayoutEffect(() => {
    const styleVariables = STYLES_VARIABLES[theme];

    Object.entries(styleVariables).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--${name}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        allThemes: AVAILABLE_THEMES,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
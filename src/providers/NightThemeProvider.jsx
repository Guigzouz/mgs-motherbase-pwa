// NightThemeProvider.jsx
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const NightThemeProviderContext = createContext();

const dimDarkTheme = {
  background: "#121212", // Dim dark background
  text: "#e0e0e0", // Dimmed white text
  primary: "#bb86fc", // Accent color for dark mode
};

const dimLightTheme = {
  background: "#f5f5f5", // Dim light background
  text: "#1f1f1f", // Dark text for light mode
  primary: "#6200ee", // Accent color for light mode
};

export const NightThemeProvider = ({ children }) => {
  const [nightTheme, setNightTheme] = useState(false);

  // Toggle between dark and light themes
  const toggleTheme = () => setNightTheme((prevTheme) => !prevTheme);

  // Choose the theme based on the nightTheme state
  const theme = nightTheme ? dimDarkTheme : dimLightTheme;

  return (
    <NightThemeProviderContext.Provider value={{ nightTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NightThemeProviderContext.Provider>
  );
};

export const useNightTheme = () => useContext(NightThemeProviderContext);

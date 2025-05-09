
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string; // To match next-themes, typically "class"
  // enableSystem?: boolean; // Prop not used in current simplified implementation
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // On the server, always return defaultTheme.
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    // On the client, try to read from localStorage.
    try {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
        return storedTheme;
      }
    } catch (e) {
      // If localStorage is not available or an error occurs, log and fallback.
      console.warn(`Failed to read theme from localStorage for key "${storageKey}":`, e);
    }
    // Fallback to defaultTheme if nothing in localStorage or if on server.
    return defaultTheme;
  });

  // This effect runs on the client after initial render and whenever `theme` changes.
  // It's responsible for updating the DOM (e.g., class on <html>) and localStorage.
  useEffect(() => {
    const root = window.document.documentElement;

    // Apply the theme to the document element
    if (attribute === "class") {
      root.classList.remove("light", "dark"); // Remove both possibilities to be safe
      root.classList.add(theme);
    } else {
      root.setAttribute(attribute, theme);
    }

    // Persist the new theme to localStorage
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.warn(`Failed to set theme in localStorage for key "${storageKey}":`, e);
    }
  }, [theme, storageKey, attribute]);


  const setTheme = (newTheme: Theme) => {
    if (newTheme !== "light" && newTheme !== "dark") {
      console.warn(`Attempted to set invalid theme: ${newTheme}. Theme must be "light" or "dark".`);
      return;
    }
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  const value = { theme, setTheme, toggleTheme };

  // Always render the Provider.
  // The theme value will be correct from the start on the client if localStorage is available,
  // or it will be defaultTheme, then update if localStorage had a different value.
  // `suppressHydrationWarning` on <html> in layout.tsx handles potential mismatch
  // between server-rendered class and client-side initial theme.
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    // This error should no longer occur with the provider always being rendered.
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

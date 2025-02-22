import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.querySelectorAll('.blog-light, .blog-dark').forEach((el) => {
        el.classList.toggle('blog-light', !newMode);
        el.classList.toggle('blog-dark', newMode);
      });

      return newMode;
    });
  };

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    if (darkMode)
      document.querySelectorAll('.blog-light').forEach((el) => {
        el.classList.remove('blog-light');
        el.classList.add('blog-dark');
      });
    else
      document.querySelectorAll('.blog-dark').forEach((el) => {
        el.classList.remove('blog-dark');
        el.classList.add('blog-light');
      });
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);

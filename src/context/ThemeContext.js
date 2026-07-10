import React, { createContext, useState, useContext } from 'react';

// Criamos o contexto
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Defina aqui as cores do seu design Preto e Branco
  const theme = {
    background: isDarkMode ? '#000000' : '#FFFFFF', // Fundo Preto ou Branco
    text: isDarkMode ? '#FFFFFF' : '#000000',       // Texto invertido
    buttonBg: isDarkMode ? '#333333' : '#E0E0E0',
    // Você pode adicionar as cores das suas faixas laranjas aqui se quiser mantê-las fixas
    orange: '#ff8c00' 
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar o tema facilmente nas páginas
export function useTheme() {
  return useContext(ThemeContext);
}
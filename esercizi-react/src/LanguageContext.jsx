import React, { createContext, useContext, useState } from "react";

// Creazione del contesto della lingua
const LanguageContext = createContext();

// Provider per la gestione della lingua
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Mappatura delle lingue
const messages = {
  en: "Hello, World!",
  it: "Ciao, Mondo!",
  es: "¡Hola, Mundo!",
  fr: "Bonjour, Monde!",
};
 export default LanguageProvider;
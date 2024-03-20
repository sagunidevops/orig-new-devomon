// LanguageContext.js
import Japnese from "../translation/ja.json";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export function useLayoutChangerProvider() {
  return useContext(LanguageContext);
}


export const LanguageProvider = ({ children }) => {
  const [langSelector, setLangSelector] = useState("");

  const getTranslation = (key) => {
    switch (langSelector) {
      case "Japnese":
        console.log("langSelector",langSelector)
        return Japnese[key];
      // Add cases for other languages as needed
      default:
        return "ddd";
    }
  };

  const languageHandler = (value) => {
    console.log("langSelector",value)
    setLangSelector(value)
  };
  useEffect(() => {
    getTranslation();
    console.log("hello")
  }, [langSelector]);

  const value = {
    setLangSelector,
    languageHandler,
    getTranslation,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

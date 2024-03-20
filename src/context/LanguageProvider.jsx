// LanguageContext.js
import Japnese from "../translation/ja.json";
import German from "../translation/de.json";
import Spanish from "../translation/es.json";
import Italian from "../translation/it.json";
import French from "../translation/fr.json";
import Chinese from "../translation/zh.json";
import Turkish from "../translation/tr.json";
// import English from "../translation/en.json";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export function useLayoutChangerProvider() {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
  const [langSelector, setLangSelector] = useState("English");

  const getTranslation = (key) => {
    switch (langSelector) {
      case "Japnese":
        return Japnese[key];
      case "German":
        return German[key];
      case "Spanish":
        return Spanish[key];
      case "Italian":
        return Italian[key];
      case "French":
        return French[key];
      case "Chinese ":
        return Chinese[key];
      case "Turkish":
        return Turkish[key];
      // Add cases for other languages as needed
      default:
        return key;
    }
  };

  const languageHandler = (value) => {
    console.log("langSelector", value);
    setLangSelector(value);
  };
  useEffect(() => {
    getTranslation();
    console.log("hello");
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

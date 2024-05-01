// LanguageContext.js
import Japanese from "../translation/ja.json";
import German from "../translation/de.json";
import Spanish from "../translation/es.json";
import Italian from "../translation/it.json";
import French from "../translation/fr.json";
import Chinese from "../translation/zh.json";
import Turkish from "../translation/tr.json";
import English from "../translation/en.json";

import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export function useLayoutChangerProvider() {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
  const [langSelector, setLangSelector] = useState("");

  const getTranslation = (key) => {
    switch (langSelector) {
      case "Japanese":
        return Japanese[key];
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
        return English[key];
    }
  };

  const languageHandler = (value) => {
    console.log("langSelector", value);
    setLangSelector(value);
    localStorage.setItem("lang", value);
  };
  useEffect(() => {
    getTranslation();
    const localValue = localStorage.getItem("lang");
    setLangSelector(localValue);
  }, [langSelector]);

  const value = {
    setLangSelector,
    languageHandler,
    getTranslation,
    langSelector,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

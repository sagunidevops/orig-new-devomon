// LanguageContext.js
import Japnese from "../translation/ja.json";
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
  const [langSelector, setLangSelector] = useState("en");
  // console.log("langSelectorlangSelector", langSelector);

  // const translate = (key) => {
  //   switch (langSelector) {
  //     case "Japnese":
  //       return Japnese[key];
  //     case "German":
  //       return German[key];
  //     case "Spanish":
  //       return Spanish[key];
  //     case "Italian":
  //       return Italian[key];
  //     case "French":
  //       return French[key];
  //     case "Chinese ":
  //       return Chinese[key];
  //     case "Turkish":
  //       return Turkish[key];
  //     // Add cases for other languages as needed
  //     default:
  //       return English[key];
  //   }
  // };

  const languageHandler = (value) => {
    setLangSelector(value);
    // localStorage.setItem("lang", value);
  };
  // useEffect(() => {
  //   translate();
  //   const localValue = localStorage.getItem("lang");
  //   setLangSelector(localValue);
  // }, [langSelector]);

  const translate = async (text) => {
    const res = await fetch(
      "https://translation.googleapis.com/language/translate/v2?key=AIzaSyB8GSBqb1eib8Ni61SI8WATweY7imMud7Q",

      {
        method: "post",

        body: JSON.stringify({
          q: text,
          target: langSelector,
        }),
      }
    );

    const data = await res.json();
    return data.data.translations;
  };
  const getTranslationHandler = async (text) => {
    const x = await translate(text);
    console.log("dddd", x);
  };

  const value = {
    setLangSelector,
    languageHandler,
    getTranslationHandler,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

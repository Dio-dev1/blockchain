import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

import translationEN from './locales/en/translation.json';
import translationFR from './locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationFR
  }
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
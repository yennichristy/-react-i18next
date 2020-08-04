//this is a setup file for i18next library
import i18n from 'i18next';
//react-i18n for connect its internationalization capabilities to React
import { initReactI18next } from 'react-i18next';
//i18n back-end to expect the translation file to be served
import Backend from 'i18next-xhr-backend';
 
const Lanaguage = ['en', 'id', 'ko', 'de']

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
 //default language
    lng: 'en',
    fallbackLng: 'en',
    whitelist: Lanaguage,
 
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
 
export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // Add the following lines to customize the behavior
    parseMissingKeyHandler: (key) => {
      if (key.startsWith('style:')) {
        // Convert 'style:xxx' keys to 'xxx' and return the RTL class name
        const className = key.substring(6);
        return `rtl-${className}`;
      }
      return key;
    },
    react: {
      // Add the following line to set the transKeepBasicHtmlNodesFor option
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span', 'a'],
    },
  });

export default i18n;

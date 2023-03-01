import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../assets/translation/en.json';
import ukTanslations from '../assets/translation/uk.json';
import { Language } from '../common';

i18n.use(initReactI18next).init({
  resources: {
    [Language.ENG]: {
      translation: enTranslations,
    },
    [Language.UKR]: {
      translation: ukTanslations,
    },
  },
  lng: Language.ENG,
  fallbackLng: Language.ENG,

  interpolation: {
    escapeValue: false,
  },
});

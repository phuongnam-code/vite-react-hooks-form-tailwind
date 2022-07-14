import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from './en.json';
import vi from './vi.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: en,
      vi: vi
    }
  });
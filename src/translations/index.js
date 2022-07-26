import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './en.json';
import translationVi from './vi.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === "development",
    resources: {
      en: { translation: translationEn },
      vi: { translation: translationVi },
    }
  });

export default i18n;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  // Some translation keys are intentionally empty (e.g. a heading fragment
  // that only exists in English's word order). Default i18next behavior
  // treats an empty string as "missing" and falls back to fallbackLng —
  // returnEmptyString: true keeps a deliberate "" as a real translation.
  returnEmptyString: true,
});

export default i18next;

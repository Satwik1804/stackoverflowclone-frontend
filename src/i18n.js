import i18next from 'i18next';

import en from "./locales/en/translation.json"
import es from "./locales/es/translation.json"
import fr from "./locales/fr/translation.json"
import hi from "./locales/hi/translation.json"
import pt from "./locales/pt/translation.json"
import zh from "./locales/zh/translation.json"


i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: en
    },
    es: {
      global: es
    },
    fr: {
      global: fr
    },
    hi: {
      global: hi
    },
    pt: {
      global: pt
    },
    zh: {
      global: zh
    }
  }
})

export default i18next;
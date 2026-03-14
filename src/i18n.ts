import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import resources, { supportedLanguages, type SupportedLanguageCode } from './i18n/resources';

const supportedLanguageCodes = supportedLanguages.map((language) => language.code);
const storageKey = 'agentware-locale';

function normalizeLanguage(language?: string | null): SupportedLanguageCode {
  if (!language) {
    return 'en';
  }

  const lowercased = language.toLowerCase();

  if (lowercased.startsWith('zh')) {
    return 'zh-CN';
  }

  if (lowercased.startsWith('pt')) {
    return 'pt-BR';
  }

  if (lowercased.startsWith('ja')) {
    return 'ja';
  }

  if (lowercased.startsWith('es')) {
    return 'es';
  }

  if (lowercased.startsWith('de')) {
    return 'de';
  }

  if (lowercased.startsWith('fr')) {
    return 'fr';
  }

  if (lowercased.startsWith('ko')) {
    return 'ko';
  }

  return 'en';
}

const detector = new LanguageDetector();

detector.addDetector({
  name: 'agentwareNavigator',
  lookup() {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    return normalizeLanguage(browserLanguages.find(Boolean));
  },
});

void i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguageCodes,
    load: 'currentOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'agentwareNavigator'],
      lookupLocalStorage: storageKey,
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
      convertDetectedLanguage: (language) => normalizeLanguage(language),
    },
  });

export { normalizeLanguage, storageKey };

export default i18n;

"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import resources, {
  supportedLanguages,
  type SupportedLanguageCode,
  type TranslationMessages,
} from "./resources";

export const storageKey = "agentware-locale";

export function normalizeLanguage(language?: string | null): SupportedLanguageCode {
  if (!language) {
    return "en";
  }

  const lowercased = language.toLowerCase();

  if (lowercased.startsWith("zh")) return "zh-CN";
  if (lowercased.startsWith("pt")) return "pt-BR";
  if (lowercased.startsWith("ja")) return "ja";
  if (lowercased.startsWith("es")) return "es";
  if (lowercased.startsWith("de")) return "de";
  if (lowercased.startsWith("fr")) return "fr";
  if (lowercased.startsWith("ko")) return "ko";

  return "en";
}

type LocaleContextValue = {
  languageCode: SupportedLanguageCode;
  messages: TranslationMessages;
  setLanguageCode: (languageCode: SupportedLanguageCode) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLanguage(): SupportedLanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored) {
    return normalizeLanguage(stored);
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return normalizeLanguage(browserLanguages.find(Boolean));
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [languageCode, setLanguageCodeState] = useState<SupportedLanguageCode>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(storageKey, languageCode);
    document.documentElement.lang = languageCode;
    document.documentElement.dataset.locale = languageCode;

    const meta = resources[languageCode];
    document.title = meta.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.meta.description);
    }
  }, [languageCode]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      languageCode,
      messages: resources[languageCode],
      setLanguageCode: (nextLanguage) => {
        startTransition(() => {
          setLanguageCodeState(nextLanguage);
        });
      },
    }),
    [languageCode]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return {
    ...context,
    supportedLanguages,
  };
}

import { createContext } from 'react';
import { Language } from '@/common';

interface ILanguageContext {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<ILanguageContext | null>(null);

export { LanguageContext, type ILanguageContext };

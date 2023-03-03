import { Language } from '@/common';

class LanguageService {
  private PRIVATE_LANGUAGE = Language.ENG;

  getCurrentLanguage(): Language {
    return (localStorage.getItem('lang') as Language) || this.PRIVATE_LANGUAGE;
  }

  setCurrentLanguage(lang: Language) {
    localStorage.setItem('lang', lang);
  }
}

export { LanguageService };

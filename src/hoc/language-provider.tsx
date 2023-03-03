import { ReactNode, useEffect, useState } from 'react';
import { langService } from '@/services';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '@/context';

interface ILanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState(langService.getCurrentLanguage());
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    langService.setCurrentLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };

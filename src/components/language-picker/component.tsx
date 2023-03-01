import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../common';
import s from './styles.module.scss';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(Language.ENG);

  const handleChange = (event: SelectChangeEvent) => {
    const pickedLanguage = event.target.value as Language;
    setLanguage(pickedLanguage);
    i18n.changeLanguage(pickedLanguage);
  };

  return (
    <FormControl fullWidth className={s.wrapper}>
      <InputLabel id='language-select-label'>{t('languagePicker.label')}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='language-select'
        value={language}
        label={t('languagePicker.label')}
        onChange={handleChange}
      >
        <MenuItem value={Language.ENG}>{t('language.en')}</MenuItem>
        <MenuItem value={Language.UKR}>{t('language.uk')}</MenuItem>
      </Select>
    </FormControl>
  );
};

export { LanguagePicker };

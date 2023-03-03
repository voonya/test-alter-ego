import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '@/common';
import { LanguageContext, ILanguageContext } from '@/context';
import s from './styles.module.scss';
import variables from '@/variables.module.scss';

const LanguagePicker = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext) as ILanguageContext;

  const handleChange = (event: SelectChangeEvent) => {
    const pickedLanguage = event.target.value as Language;
    setLanguage(pickedLanguage);
  };

  return (
    <FormControl className={s.wrapper} sx={{ m: 1 }}>
      <Select
        id='language-select'
        value={language}
        onChange={handleChange}
        sx={{
          fontSize: 12,
          color: variables.color,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '.MuiSvgIcon-root ': {
            fill: 'white !important',
          },
        }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={Language.ENG}>{t('language.en')}</MenuItem>
        <MenuItem value={Language.UKR}>{t('language.uk')}</MenuItem>
      </Select>
    </FormControl>
  );
};

export { LanguagePicker };

import { Logo } from '../logo';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.wrapper}>
      <Container sx={{ display: 'flex' }}>
        <Logo size='md' />
        <div className={s.infoWrapper}>
          <div className={s.contactWrapper}>
            <h3>{t('footer.contactLabel')}</h3>
            <ul>
              <li>
                mail: <a href='mailto:nikolaiev.i03@gmail.com'>nikolaiev.i03@gmail.com</a>
              </li>
              <li>
                telegram: <a href='https://t.me/n1kola1ev'>@n1kola1ev</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };

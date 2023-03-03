import { useTranslation } from 'react-i18next';
import { LoginForm } from '../components/login-form';
import { Layout } from '../layouts';
import { Container } from '@mui/material';
import s from './styles.module.scss';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container sx={{ height: '100%' }}>
        <div className={s.loginFormWrapper}>
          <h2>{t('login.formTitle')}</h2>
          <LoginForm />
        </div>
      </Container>
    </Layout>
  );
};

export { LoginPage };

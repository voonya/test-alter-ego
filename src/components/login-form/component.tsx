import { TextField, Button } from '@mui/material';
import { FormEvent, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Route } from '@/common';
import { useAppDispatch, useAppSelector } from '@/store';
import { loginUser, clearError } from '@/store/auth';
import s from './styles.module.scss';

const LoginForm = () => {
  const { t } = useTranslation();

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  const error = useAppSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const username = usernameField.current?.value;
    const password = passwordField.current?.value;

    if (!username || !password) {
      return;
    }

    dispatch(loginUser({ username, password }))
      .unwrap()
      .then(() => {
        navigate(Route.HOME);
      })
      .catch(console.log);
  };

  useEffect(() => {
    dispatch(clearError());
  }, []);

  return (
    <form onSubmit={handleSubmit} className={s.wrapper}>
      <TextField
        id='username'
        inputRef={usernameField}
        label={t('login.usernameLabel')}
        variant='filled'
      />
      <TextField
        id='password'
        inputRef={passwordField}
        label={t('login.passwordLabel')}
        variant='filled'
      />
      {error && <p>{error}</p>}
      <Button variant='contained' type='submit'>
        {t('login.submitBtn')}
      </Button>
    </form>
  );
};

export { LoginForm };

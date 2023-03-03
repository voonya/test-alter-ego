import { NAV_LINKS } from '@/common';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo, LanguagePicker } from '@/components';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Route } from '@/common';
import { useAppSelector, useAppDispatch } from '@/store';
import { logoutUser } from '@/store/auth';
import { useLocation } from 'react-router-dom';
import s from './styles.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  const loginHandler = () => {
    navigate(Route.LOGIN);
  };

  const showAuthBtns = useLocation().pathname !== Route.LOGIN;

  const renderAuthBtns = () => {
    if (user) {
      return (
        <Button onClick={logoutHandler} variant='contained'>
          {t('nav.logoutBtn')}
        </Button>
      );
    }

    return (
      <Button onClick={loginHandler} variant='contained'>
        {t('nav.loginBtn')}
      </Button>
    );
  };

  return (
    <header className={s.wrapper}>
      <Container sx={{ display: 'flex' }}>
        <Logo />
        <nav className={s.navWrapper}>
          <LanguagePicker />
          <ul className={s.navList}>
            {NAV_LINKS.map((link) => {
              if (link.private && !user) return;

              return (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? s.activeLink : '')}
                  >
                    {t(link.translateKey)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {showAuthBtns && renderAuthBtns()}
        </nav>
      </Container>
    </header>
  );
};

export { Header };

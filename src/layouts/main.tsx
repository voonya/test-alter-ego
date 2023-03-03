import { ReactNode } from 'react';
import { Header, Footer } from '../components';
import s from './styles.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.childrenWrapper}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };

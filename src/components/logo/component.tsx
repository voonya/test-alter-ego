import { Link } from 'react-router-dom';
import { Route } from '@/common';
import { getPath } from '@/helper';
import s from './styles.module.scss';

interface ILogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'lg' }: ILogoProps) => (
  <div className={[s.wrapper, s[size]].join(' ')}>
    <Link to={getPath(Route.HOME)}>SomeLogo</Link>
  </div>
);

export { Logo };

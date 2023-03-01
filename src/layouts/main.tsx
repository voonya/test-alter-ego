import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <div>header</div>
      {children}
      <div>footer</div>
    </div>
  );
};

export { Layout };

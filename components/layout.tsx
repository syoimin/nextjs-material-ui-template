import { FC, ReactNode } from 'react';
import Footer from './footer';
import Sidebar from './sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Sidebar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

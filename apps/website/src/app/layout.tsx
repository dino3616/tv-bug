import type { ReactNode } from 'react';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="en">
    <head />
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;

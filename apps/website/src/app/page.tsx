import type { ReactNode } from 'react';
import { ClientButton } from '@/component/client-button';

const RootPage = (): ReactNode => (
  <div className="flex h-screen w-screen items-center justify-center">
    <ClientButton
      color="purple"
      fontSize={{
        initial: 'md',
        mobile: 'xl',
        tablet: '3xl',
        laptop: '5xl',
        desktop: '7xl',
      }}
    />
  </div>
);

export default RootPage;

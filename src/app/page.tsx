import Image from 'next/image';
import LayOut from './components/layout';
import dynamic from 'next/dynamic';
import { SessionProvider, useSession } from 'next-auth/react';

const DynamicHomeComponent = dynamic(() => import('./components/home'), {
  ssr: false,
});

export default function Home() {
  return (
    
      <DynamicHomeComponent />
    
  );
}

'use client';

import { ReactNode } from 'react';
import { LoadingProvider } from '../contexts/LoadingContext';
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingScreen />
      {children}
      <Footer />
    </LoadingProvider>
  );
}


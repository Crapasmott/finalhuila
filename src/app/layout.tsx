// src/app/layout.tsx
import './globals.css';
import './responsive.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import ClientWrapper from '../components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

// Interfaces TypeScript
interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  metadataBase: new URL('https://electrohuila.com.co'),
  title: 'Electrohuila - Energía que transforma',
  description: 'Empresa de Energía del Huila S.A. E.S.P.',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Electrohuila - Energía que transforma',
    description: 'Empresa de Energía del Huila S.A. E.S.P.',
    url: 'https://electrohuila.com.co',
    siteName: 'Electrohuila',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrohuila - Energía que transforma',
    description: 'Empresa de Energía del Huila S.A. E.S.P.',
  },
};

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <div suppressHydrationWarning>
            <ClientWrapper />
            <FloatingWhatsAppButton />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
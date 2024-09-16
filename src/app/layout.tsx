import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/functions/GoogleAnalytics';
import StyledComponentsRegistry from '@/components/functions/StyledComponentsRegistry';
import { Header } from '@/components/features/Header';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kapibara app',
  description: '2024Tornado カピバラチームの作品',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={notoSansJP.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
        <Toaster />
      </body>
    </html>
  );
}

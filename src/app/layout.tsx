import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './registry';
import { Toaster } from '@/components/ui/toaster';

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
      <body className={notoSansJP.className}>
        <StyledComponentsRegistry>
          {children}
          <Toaster />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

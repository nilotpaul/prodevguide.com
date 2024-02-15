'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <Toaster richColors closeButton duration={2000} theme='system' />
      {children}
    </NextThemesProvider>
  );
}

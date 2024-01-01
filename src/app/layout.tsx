import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { DetailContextProvider } from '@/context/useDetailContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DetailContextProvider>
            <ResizablePanelGroup direction="horizontal" className="min-h-[100vh] border rounded-lg">
              <ResizablePanel defaultSize={20} minSize={20}>
                <Sidebar />
              </ResizablePanel>
              {children}
            </ResizablePanelGroup>
          </DetailContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

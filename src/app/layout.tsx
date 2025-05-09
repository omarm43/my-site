
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

// GeistSans and GeistMono are imported as objects.
// Their .variable property (e.g., '--font-geist-sans') provides the CSS variable name.
// These CSS variables should be applied to the <html> tag to be globally available.

export const metadata: Metadata = {
  title: 'Omar Mostafiz - Software Engineer | Portfolio',
  description: 'Portfolio of Omar Mostafiz, a Software Engineer specializing in React, Python, and Cloud technologies. Explore projects, skills, and experience.',
  keywords: 'software engineer, portfolio, omar mostafiz, react, python, cloud, web developer, full stack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the CSS variables from GeistSans and GeistMono to the <html> element.
    // This makes --font-geist-sans and --font-geist-mono available for CSS.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      {/*
        The `font-sans` class on the body will use Geist Sans if tailwind.config.ts
        is configured to use `var(--font-geist-sans)` for the `sans` fontFamily.
        `antialiased` enables subpixel antialiasing for smoother text rendering.
      */}
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

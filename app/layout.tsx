// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Swapped to a geometric font
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

// Configure the new font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Julian Nardita",
    default:
      "Julian Nardita: Software Engineer, Entrepreneur, and Problem Solver",
  },
  description:
    "I am a simple, thoughtful, efficient software engineer who builds useful things well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className="font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground md:px-12">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="main-content" className="mx-auto px-6 py-12">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

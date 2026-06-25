import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { constructMetadata } from "@/lib/metadata";
import ConditionalNavbar from "@/components/ui/conditional-navbar";
import { StructuredData } from "@/components/ui/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#080d16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (_) {}
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary pt-20">
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
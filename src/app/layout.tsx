import type { Metadata } from "next";
import { Geist, Gulzar, Noto_Kufi_Arabic } from "next/font/google";
import { createMetadata } from "@/lib/seo/metadata";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const gulzar = Gulzar({
  variable: "--font-gulzar",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${notoKufiArabic.variable} ${gulzar.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light");var l=localStorage.getItem("locale");if(l==="ar"||l==="ur"){document.documentElement.lang=l;document.documentElement.dir="rtl";document.documentElement.setAttribute("data-locale",l)}else if(l==="en"){document.documentElement.lang="en";document.documentElement.dir="ltr";document.documentElement.setAttribute("data-locale","en")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// DEFINE ALL EXTERNAL IMPORTS HERE
import type { Metadata } from "next";
import localFont from "next/font/local";
// DEFINE ALL INTERNAL IMPORTS HERE
import { TanstackProviders, ThemeProvider } from "@/providers";
import "../styles/globals.css";

// DEFINE ALL FONTS HERE
const geistSans = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Full Stack Dev Tools Documentation",
  description:
    "This is a full stack dev tools documentation for the all freshers and developers",
};


// DEFINE ALL MAIN FUNCTIONS AND EXPORT 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // DEFINE MAIN FUNCTIONS RETURN HERE
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          enableSystem
          disableTransitionOnChange
        >
          <TanstackProviders>
            {children}
          </TanstackProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}

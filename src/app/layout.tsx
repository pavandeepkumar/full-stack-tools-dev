import { TanstackProviders } from "@/providers";
import { ThemeProvider } from "@/providers/ThemeProviders";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            {/* <LayoutProvider> */}
            {children}
            {/* </LayoutProvider> */}
          </TanstackProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}

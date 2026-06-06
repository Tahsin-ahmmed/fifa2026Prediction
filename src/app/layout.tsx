import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Predictor",
  description: "Predict the outcomes of the 2026 FIFA World Cup matches.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FIFA 2026",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
}

export const viewport = {
  themeColor: "#10b981",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto max-w-screen-2xl pt-16 md:pt-20 pb-20 md:pb-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

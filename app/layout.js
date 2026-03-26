import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth — AI Finance Platform",
  description: "AI-powered financial management platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`} style={{ background: "#020817" }} suppressHydrationWarning>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>Made with 💗 by Nupur · © 2025 Welth. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

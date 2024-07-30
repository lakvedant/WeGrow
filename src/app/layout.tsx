
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from "@clerk/themes";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "@/components/PreLoader";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeGrow",
  description: "Group Investing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        variables: { colorPrimary: '#309bdc' },
        signIn: {
          variables: { colorPrimary: '#309bdc' }
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {loading ? (
            <Preloader /> // Show Preloader while loading
          ) : (
            <>
              <Navbar /> {/* Show Navbar when not loading */}
              {children}
            </>
          )}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import  {ClerkProvider} from '@clerk/nextjs'
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import { Toaster } from "@/components/ui/toaster"


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

  
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#309bdc' },
      signIn: {
        baseTheme: [ neobrutalism],
        variables: { colorPrimary: '#309bdc' }
      },
      signUp: {
        baseTheme: [ neobrutalism],
        variables: { colorPrimary: '#309bdc' }
      }
    }}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

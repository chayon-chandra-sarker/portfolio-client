import { Geist } from "next/font/google";
import "./globals.css";

import LayoutWrapper from "@/components/layout/LayoutWrapper";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Chayon Sarker | Full Stack Developer",
  description:
    "Portfolio of Chayon Chandra Sarker, a Full Stack Developer building modern web applications.",

  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <AuthProvider>
            <LayoutWrapper>{children}</LayoutWrapper>

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
              }}
            />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";
import Header from "../components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Girl2Girl",
  description: "Платформа поддержки девочек и женщин",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}

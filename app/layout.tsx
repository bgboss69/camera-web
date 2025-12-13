import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camera Web App",
  description: "Access your device camera via web browser, capture photos, and download them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

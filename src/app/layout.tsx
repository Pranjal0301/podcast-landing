import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Craft Media — Healthcare Podcast Growth",
  description: "We help healthcare podcasters, dentists, and physicians grow their audience, build authority, and turn content into patient bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

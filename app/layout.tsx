import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squishy Toybox | Slow Rise Squishy Toys",
  description:
    "Soft, slow-rise squishy toys shipped across the USA. Shop butter stick squishies from Squishy Toybox.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

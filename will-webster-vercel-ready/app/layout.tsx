import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Will Webster | Information Systems & Development",
  description: "Will Webster builds enterprise systems, automations, and accessible digital tools that connect people, process, and technology.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

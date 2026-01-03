import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.css";
import { tw } from "~/utils/tw";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const APP_NAME = "Sanity Demo";
const TITLE = "Sanity Demo with Next.js";
const DESCRIPTION =
  "A demo application showcasing Sanity CMS integrated with Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL("https://placeholder.example"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      className={tw([geistSans.variable, geistMono.variable])}
      data-scroll-behavior="smooth"
      lang="en-US"
    >
      <body className="font-sans">{children}</body>
    </html>
  );
};

export default RootLayout;

import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import clsx from "clsx";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ZeroTier | Global Area Networking",
  description:
    "ZeroTier enables secure, modern virtual networking for everyone, from startups to small and mid-size businesses to the Enterprise. ",
  icons: [
    {
      rel: "icon",
      url: "https://www.zerotier.com/favicon-32x32.png?v=a9d0fb7e82623386253444b4285976d1",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      sizes: "48x48",
      url: "https://www.zerotier.com/icons/icon-48x48.png?v=a9d0fb7e82623386253444b4285976d1",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "https://www.zerotier.com/icons/icon-72x72.png?v=a9d0fb7e82623386253444b4285976d1",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(roboto.className, "antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

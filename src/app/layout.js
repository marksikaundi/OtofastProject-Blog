import { cx } from "@/utils";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "Otofast Org",
  description: "Building stable and reliable software for the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "bg-white dark:bg-dark"
        )}
      >
        <Header/>
        (children)
      </body>
    </html>
  );
}

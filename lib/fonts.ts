import { Open_Sans } from "next/font/google";
import { Abril_Fatface } from "next/font/google";

export const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontHeading = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

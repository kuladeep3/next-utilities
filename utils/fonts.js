import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter", //css variables name
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto", //css variables name
});

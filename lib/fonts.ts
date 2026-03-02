import localFont from "next/font/local";

export const clonoid = localFont({
  src: [
    {
      path: "../public/fonts/Clonoid-Regular/Clonoid-W01-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-clonoid",
  display: "swap",
});
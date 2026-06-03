import localFont from "next/font/local";

// Display serif, high-contrast editorial (Fontshare Gambetta, self-hosted)
export const gambetta = localFont({
  src: [
    { path: "./fonts/Gambetta-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Gambetta-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Gambetta-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Gambetta-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Gambetta-Italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-gambetta",
  display: "swap",
  preload: true,
});

// Body / UI, neutral grotesque (Fontshare Switzer, self-hosted)
export const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
  preload: true,
});

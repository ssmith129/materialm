import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "@/app/context/customizerContext";
import "./api/index"
import '../utils/i18n';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "MaterialM - Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <ThemeModeScript />
      </head>
      <body className={`${inter.className}`}>
        <Flowbite theme={{ theme: customTheme }}>
          <CustomizerContextProvider>
            {children}
          </CustomizerContextProvider>
        </Flowbite>
      </body>
    </html>

  );
}




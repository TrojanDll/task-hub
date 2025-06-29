import type { Metadata } from "next";
import "./globals.scss";

import { SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Task Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

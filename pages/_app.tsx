import "@/styles/globals.css";
import "@/styles/component.scss";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import cx from "classnames";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RWBProvider>
            <div className={cx(sfPro.variable, inter.variable)}>
              <Component {...pageProps} />
            </div>
          </RWBProvider>
          <Analytics />
        </RecoilRoot>
      </QueryClientProvider>
    </SessionProvider>
  );
}

import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { unstable_IdProvider as IdProvider } from "reakit/Id";
import { theme } from "../theme/theme";
import { GlobalStyles } from "../theme/global";
import { Layout } from "../components/Layout";

const queryClient = new QueryClient();

const _app: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <IdProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </IdProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);

export default _app;

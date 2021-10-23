import React from "react";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { AppPropsType } from "next/dist/shared/lib/utils";

export default class NextjsDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): ReturnType<typeof originalRenderPage> =>
        originalRenderPage({
          enhanceApp: (App) => {
            const EnhancedApp: React.VFC<AppPropsType> = (
              props
            ): ReturnType<typeof sheet.collectStyles> =>
              sheet.collectStyles(<App {...props} />);
            return EnhancedApp;
          }
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

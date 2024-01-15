import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://kit.fontawesome.com/6608665a91.js"
            crossorigin="anonymous"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {

  render() {

    return (
      <Html lang="eng">
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="/images/favicon.png" />
          <title>YUU by Nahar</title>
          <meta name="google-site-verification" content="gsE3PGimny4Id_zd42wblw_WpkZDrpVFCsG9tQY71QU" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Permanent+Marker&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-RY9QZB0F2V"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RY9QZB0F2V', {
              page_path: window.location.pathname,
            });
          `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
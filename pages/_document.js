import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
  render() {
      
    return (
      <Html lang="eng">
        <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/favicon.png" />
        <title>yuu by nahar</title>
{/* 
        <meta property="og:title" content="Best Tech Courses with Certification - Heuristic Academy | Admission Open" />
        <meta property="og:description" content="Job Placement Opportunities with Internship Certificate & Mock Interview Assistance. Join Now!" />
        <meta property="og:image" content="/images/meta-img-main.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Heuristic Academy, Mumbai" /> */}

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
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
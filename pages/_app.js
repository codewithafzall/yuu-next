import MasterLayout from '../src/components/layouts/master';
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  )
}

export default MyApp

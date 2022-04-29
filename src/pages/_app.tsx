import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Appbar from '../components/appBar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Appbar />
     <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

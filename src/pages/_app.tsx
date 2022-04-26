import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Appbar from '../components/appBar';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Appbar />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp

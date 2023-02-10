import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout';

const App = () => ({ Component, pageProps }: AppProps) => {
  return (
   <Layout>
     <Component {...pageProps} />
   </Layout>
  )
}

App.displayName = 'nullestus';
export default App;

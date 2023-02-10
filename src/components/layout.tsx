import Header from './header';
import Footer from './footer';
import { Props } from './types';


export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header/>
      <main>{ children }</main>
      <Footer/>
    </>
  )
}

export default Layout;
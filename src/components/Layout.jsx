import Header from './Header';
import Footer from './Footer';
import Footer1 from './Footer1';
const Layout = ({children})=>{
    return(<>
     <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
       {/* <Footer /> */}
       <Footer1 />
      {/* <ScrollToTop /> */}
    </div>
    </>)
}
export default Layout;
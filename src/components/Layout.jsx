import Header from './Header';
const Layout = ({children})=>{
    return(<>
     <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer />
      <ScrollToTop /> */}
    </div>
    </>)
}
export default Layout;
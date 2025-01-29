import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy ,Suspense } from 'react';
import Layout from './components/Layout';
import { CartProvider } from './Context/CartContext';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Brands = lazy(() => import('./pages/Brands'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

// Loading component
const LoadingSpinner = () => (
  <>
    <div className="flex justify-center items-center h-screen bg-slate-900/50 fixed inset-0">
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  </div>
  </>
);


function App() {
  return (
    <Router>
      <CartProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ProductDetails />}/>
            </Routes>
        </Layout>
        </Suspense>
        </CartProvider>
    </Router>
  )
}

export default App

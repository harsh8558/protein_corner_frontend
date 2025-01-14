import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import OurStory from './pages/OurStory';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import Layout from './components/Layout';
function App() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
    </Router>
  )
}

export default App

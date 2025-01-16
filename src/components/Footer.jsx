import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black w-full text-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="w-full md:w-4/12 mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" 
                alt="Logo" 
                className="w-28"
              />
            </Link>
            <p className="text-sm mb-4">
              Your trusted source for premium protein supplements and fitness nutrition.
            </p>
              
        </div>
        <div className="flex flex-row justify-between border-2">
            <div className="flex flex-wrap gap-12 mt-14 w-3/4 border-2">
                {/* Quick Links */}
                <div className="w-full md:w-2/12 mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-emerald-500">Quick Links</h3>
                <ul className="space-y-2">
                    <li><Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link></li>
                    <li><Link to="/brands" className="hover:text-emerald-600 transition-colors">Brands</Link></li>
                    <li><Link to="/our-story" className="hover:text-emerald-600 transition-colors">Our Story</Link></li>
                    <li><Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
                </ul>
                </div>

                {/* Categories */}
                <div className="w-full md:w-3/12 mb-8 md:mb-0 ">
                <h3 className="text-lg font-semibold mb-4 text-emerald-500">Categories</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Protein Powder</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Pre-Workout</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Mass Gainers</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Creatine</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Vitamins & Minerals</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Glutamine</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Fat Burners</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">BCCA & EAA</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Other Supplements</a></li>
                </ul>
                </div>

                {/* Contact Info */}
                <div className="w-full md:w-3/12">
                <h3 className="text-lg font-semibold mb-4 text-emerald-500">Contact Us</h3>
                <ul className="space-y-2">
                    <li>123 Fitness Street</li>
                    <li>Mumbai, Maharashtra</li>
                    <li>Phone: +91 123-456-7890</li>
                    <li>Email: info@proteincorner.com</li>
                </ul>
                <div className="w-full md:w-3/12 mt-4">
                    <h3 className="text-lg font-semibold mb-4 text-emerald-500">Social</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-green-500 transition-colors">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="#" className="hover:text-green-500 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="#" className="hover:text-green-500 transition-colors">
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                    </div>
                </div>
                </div>
                <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" alt="Logo" 
                className="absolute -bottom-40 md:-bottom-3/4 -right-16  md:-right-24 max-w-full -rotate-90 md:w-1/3 opacity-50 border-2 border-red-600" />
            </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">
            {new Date().getFullYear()} Protein Corner. All rights reserved.
          </p>
          <p className="text-sm font-thin">Designed and Developed by <a href="https://github.com/Abhishek-Deshpande" className="hover:text-green-500 transition-colors">Harsh Gupta</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
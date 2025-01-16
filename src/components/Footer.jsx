import { Link } from 'react-router-dom';
import SocialHandles from './UI/SocialHandles';

const Footer = () => {
  return (
    <footer className="bg-black w-full text-gray-200 pt-8 md:pl-4 pb-6">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="w-full md:w-full mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" 
                alt="Logo"
                loading='lazy' 
                className="w-28"
              />
            </Link>
            <p className="text-md mb-4 w-80 md:w-11/12 md:text-lg text-left">
            Protein Corner is your one-stop destination for all gym and fitness supplement needs. We offer a wide range of high-quality supplements, including protein powders, pre-workouts, BCAAs, gainers, multivitamins, and more, to support muscle growth, recovery, and overall fitness. Our mission is to provide genuine products that help fitness enthusiasts, athletes, and bodybuilders achieve their health goals effectively. Stay fit, stay strong with Protein Corner!
            </p>
              
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap md:gap-16 mt-4 md:mt-10 w-3/4">
                {/* Quick Links */}
                <div className="w-full md:w-2/12 mb-8 md:mb-0">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-500">Quick Links</h3>
                <ul className="space-y-2 text-md md:text-lg">
                    <li><Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link></li>
                    <li><Link to="/brands" className="hover:text-emerald-600 transition-colors">Brands</Link></li>
                    <li><Link to="/our-story" className="hover:text-emerald-600 transition-colors">Our Story</Link></li>
                    <li><Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
                </ul>
                </div>

                {/* Categories */}
                <div className="w-full md:w-3/12 mb-8 md:mb-0 ">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-500">Categories</h3>
                <ul className="space-y-2 text-md md:text-lg">
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
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-500">Contact Us</h3>
                <ul className="space-y-2 text-md md:text-lg">
                    <li>123 Fitness Street</li>
                    <li>Mumbai, Maharashtra</li>
                    <li>Phone: +91 123-456-7890</li>
                    <li>Email: info@proteincorner.com</li>
                </ul>
                <div className="w-full md:w-3/12 mt-8">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-500">Social</h3>
                    <div className="flex space-x-4 text-md md:text-lg ">
                        <SocialHandles />
                    </div>
                </div>
                </div>
                
            </div>
            <div className='md:static md:w-1/4 w-3/4 flex  justify-end absolute right-0'>
            <img 
                src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737012495/protein_corner/rgsacgpxsdo7k7pkmxkq.png" 
                alt="Logo"
                loading="lazy" 
                className=" -rotate-0 md:w-3/4 opacity-10 md:opacity-20"/>
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
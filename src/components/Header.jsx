import { Link } from "react-router-dom";
import SearchBar from "./UI/SearchBar";
import React, { useEffect, useState } from "react";
import AddToCart from "./UI/AddToCart";
import WhatsApp from "./UI/WhatsApp";
import LoginSignBtn from "./UI/LoginSignBtn";

const Header =()=>{
    const [isScrolled, setIsScrolled] = useState(false);
    //const { state } = useCart();
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(<>
    <header className="fixed top-0 left-0 right-0 z-50 w-screen md:h-32 shadow-2xl bg-slate-900">
        <div className="container mx-auto px-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
                <div className="flex items-center justify-between h-20  ">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" alt="Logo" className="w-28" />
                    </Link>
                </div>
                <div className="md:w-1/2">
                    <SearchBar />
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <WhatsApp />
                  <AddToCart />
                  <LoginSignBtn />
                </div>
          </div>         
          <div className="w-3/4 ">
            <nav className=" md:flex items-center justify-center space-x-16 text-xl">
            <div className="relative group flex flex-col gap-2">
            <Link to="/products" 
              className="text-gray-200">Products</Link>
              <div className="h-1 w-0 bg-green-500 rounded-full mx-auto group-hover:w-full transition-all duration-300"></div>
            </div>

            <div className="relative group flex flex-col gap-2">
            <Link to="/our-story" className="text-gray-200">Our Story</Link>
              <div className="h-1 w-0 bg-green-500 rounded-full mx-auto group-hover:w-full transition-all duration-300"></div>
            </div>
            
            <div className="relative group flex flex-col gap-2">
            <Link to="/contact" className="text-gray-200">Contact Us</Link>
              <div className="h-1 w-0 bg-green-500 rounded-full mx-auto group-hover:w-full transition-all duration-300"></div>
            </div>
            
            
            <div className="relative group flex flex-col gap-2">
              <Link to="/brands" 
                className=" text-gray-200">Brands</Link>
              <div className="h-1 w-0 bg-green-500 rounded-full mx-auto group-hover:w-full transition-all duration-300"></div>
            </div>
            
           
            
           
           
            </nav>
            
          </div>
        </div>
    </header>
    </>)
}
export default Header;
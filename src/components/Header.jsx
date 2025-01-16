import { Link } from "react-router-dom";
import SearchBar from "./UI/SearchBar";
import React, { useEffect, useState } from "react";
import AddToCart from "./UI/AddToCart";
import WhatsApp from "./UI/WhatsApp";
import LoginSignBtn from "./UI/LoginSignBtn";
import Hamburger from "./UI/Hamburger";
const Header =()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(<>
    <header className="fixed top-0 left-0 right-0 pt-1 z-50 w-screen h-32 md:h-36 lg:h-32 shadow-2xl bg-zinc-900">
      <div className="container mx-auto px-6 h-full flex flex-col">
        {/* Mobile Header - First Row */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="flex items-center space-x-4">
            <Hamburger isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
              <Link to="/" className="flex items-center">
                <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" 
                alt="Logo"
                loading="lazy" 
                className="w-20" />
              </Link>
          </div>
          <div className="flex items-center space-x-3">
            <WhatsApp />
            <AddToCart />
            <LoginSignBtn />
          </div>
        </div>
        {/* Mobile Search Bar - Second Row */}
        <div className="mt-4 lg:hidden">
          <SearchBar />
        </div> 
        {/* desktop header - First Row */}
        <div className="hidden  lg:flex items-center justify-between">
          <div className="flex items-center justify-between h-20 ">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1736844255/protein_corner/miqg6k9ffm3iik30n0sv.png" 
              alt="Logo"
              loading="lazy" 
              className="w-28" />
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
        {/* desktop header - Second Row  */}
        <div className="w-3/4 ">
          <nav className="hidden lg:flex items-center justify-center space-x-12 text-xl">
              <div className="relative group flex flex-col gap-2">
                <Link to="/products" className="text-gray-200">Products</Link>
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
                <Link to="/brands" className=" text-gray-200">Brands</Link>
                <div className="h-1 w-0 bg-green-500 rounded-full mx-auto group-hover:w-full transition-all duration-300"></div>
              </div>           
          </nav>
        </div>
      </div>
        {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden bg-slate-200 h-screen transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-8 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/products" className="text-black font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link to="/our-story" className="text-black font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
            <Link to="/contact" className="text-black font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link to="/brands" className=" text-black font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link>
          </div>
        </nav>
      </div>
    </header>
  </>)
}
export default Header;
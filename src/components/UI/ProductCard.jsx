import { NavLink } from "react-router-dom"
import {Link} from "react-router-dom"
import { useState } from "react"
import CartSlider from "./CartSlider"
import { FaHeart, FaStar, FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({product, index}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const openCart = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }
    const toggleWishlist = (e) => {
        e.preventDefault()
        e.stopPropagation();
        setIsWishlisted(!isWishlisted)
    }
return(<>
    <div 
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}
        data-aos-duration="400"
        className="w-full sm:w-[280px] p-2 mobile:w-[250px]">
        <Link to={`/products/${product.id}`}>
            <div className="relative flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Badge */}
                {product.badge && (
                    <div className="absolute top-2 left-2 z-10">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.badge}
                        </span>
                    </div>
                )}       
                {/* Wishlist Button */}
                <button 
                    onClick={toggleWishlist}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300">
                    <FaHeart className={`text-xl ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`} />
                </button>
                {/* Image Container */}
                <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        loading="lazy" 
                        className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-300 hover:scale-110 p-4 mobile:p-2" />
                </div>
                {/* Content Container */}
                <div className="p-3 mobile:p-2 flex flex-col gap-1 mobile:gap-1">
                    {/* Stock Status */}
                    <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span className="text-xs text-gray-600">
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                    {/* Title */}
                    <h3 className="font-semibold text-base mobile:text-sm leading-tight line-clamp-2 hover:text-green-600 transition-colors">
                        {product.name}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-xs mobile:text-[10px] line-clamp-2">
                        {product.description}
                    </p>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <FaStar 
                                    key={i} 
                                    className={`w-3 h-3 mobile:w-2 mobile:h-2 ${i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                        </div>
                        <span className="text-xs mobile:text-[10px] text-gray-600">
                            ({product.reviewCount || 0})
                        </span>
                    </div>
                    {/* Price */}
                    <div className="flex items-end gap-2">
                        <span className="text-xl mobile:text-base font-bold">₹{product.price}</span>
                        {product.originalPrice && (
                            <span className="text-xs mobile:text-[10px] text-gray-500 line-through">
                                ₹{product.originalPrice}
                            </span>
                        )}
                    </div>
                    {/* Add to Cart Button */}
                    <button
                        onClick={openCart}
                        disabled={!product.inStock}
                        className={`
                            mt-2 w-full py-1.5 mobile:py-1 px-3 mobile:px-2 rounded-lg flex items-center justify-center gap-2
                            text-sm mobile:text-xs
                            transition-all duration-300 
                                    ${product.inStock 
                                        ? 'bg-black text-white hover:bg-green-600 hover:scale-[102%]' 
                                        : 'bg-gray-300 cursor-not-allowed'}`}>
                        <FaShoppingCart className="mobile:w-3 mobile:h-3" />
                        <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                </div>
            </div>
        </Link>
    </div>
    <CartSlider isOpen={isCartOpen} onClose={closeCart} product={product} />
</>)
}
export default ProductCard
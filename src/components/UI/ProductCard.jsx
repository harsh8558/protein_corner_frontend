import { NavLink } from "react-router-dom"
import { useState } from "react"
import CartSlider from "./CartSlider"

const ProductCard = ({product}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => {
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }
return(<>
    <div className="flex flex-col justify-center items-center md:w-64">
        <NavLink>
            <div className="flex flex-col justify-center items-center gap-2 bg-white shadow-md hover:bg-green-50 px-2 py-3 rounded-lg transition-transform duration-300 hover:scale-[101%]">
                <div className="w-40 md:w-full flex justify-center items-center">
                    <img 
                        src={product.image} 
                        loading="lazy" 
                        className="transition-transform duration-300 hover:scale-110 align-center p-6 rounded-md overflow-hidden w-[100%]" 
                    />
                </div>
                <div>
                    <p>{product.name}</p>
                    <p className="text-gray-700 text-[14px] text-base">{product.description}</p>
                </div>
                <div className="font-bold flex justify-start w-full gap-2 text-[23px]">₹{product.price}</div>
                <div
                    onClick={openCart} 
                    className={`w-full flex justify-center items-center text-[16px] border-[1px] p-2 rounded-lg gap-1 bg-black text-gray-200 hover:transition hover:duration-300 hover:scale-[101%] hover:bg-green-300 hover:text-black ${isCartOpen ? 'bg-green-500 text-white hover:bg-green-600' : ''}`}>
                    <button >Add to Cart</button>
                </div>
            </div>
        </NavLink>
    </div>
    <CartSlider isOpen={isCartOpen} onClose={closeCart} product={product} />
</>)
}
export default ProductCard
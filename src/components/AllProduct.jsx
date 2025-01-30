import ProductCard from "./UI/ProductCard"
import { useState , useEffect } from "react"
import { NavLink } from "react-router-dom"
import productsData from "../JSONData/products.json"
const AllProducts = () => {
    const [showAllProducts, setShowAllProducts] = useState(false)
    const allProducts = productsData.products

    // Limit to 10 products for desktop view
    const displayProducts = showAllProducts ? allProducts : allProducts.slice(0, 10)


return(<>
    <section className="w-full h-full pb-[5%] bg-gray-100 pl-[2%] pr-[2%] md:pl-[5%] pt-[3%]">
        <div className="flex gap-3 text-md md:text-3xl font-semibold">
            <div className="border-[3px] rounded-full border-green-500"></div>
            <div>All Products</div>
        </div>
            
        {/* Desktop */}
        <div 
        className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center mt-3 md:mt-10">
            {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {/* Desktop Show All Button */}
        <NavLink to={"/products"}>
            <div className="hidden md:flex justify-center mt-6">
                <button 
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-green-600 transition-colors">
                    Show All Products
                </button>
            </div>    
        </NavLink>

        {/* Mobile */}
        <div className="md:hidden relative grid grid-cols-2">
            {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <NavLink to={"/products"}>
            <div className="md:hidden flex justify-center mt-6">
                <button 
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-green-600 transition-colors">
                    Show All Products
                </button>
            </div>    
        </NavLink>
    </section>
</>)
}
export default AllProducts;
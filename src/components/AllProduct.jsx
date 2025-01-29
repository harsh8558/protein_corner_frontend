import ProductCard from "./UI/ProductCard"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const AllProducts = () => {
    const [showAllProducts, setShowAllProducts] = useState(false)
    const allProducts =[
        {
            id:1,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            badge: "Best Seller",
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:2,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970158/creatine_sodxyj.png"
        },
        {
            id:3,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737971151/removed-background_6_tinfvp.png"
        },
        {
            id:4,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970062/removed-background_2_cifcq7.png"
        },
        {
            id:5,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970847/removed-background_5_fomqx2.png"
        },
        {
            id:6,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:7,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png"
        },
        {
            id:8,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:9,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png"
        },
        {
            id:10,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png"
        },
        {
            id:11,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:12,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png"
        },
        {
            id:13,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            badge: "Best Seller",
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:14,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970158/creatine_sodxyj.png"
        },
        {
            id:15,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737971151/removed-background_6_tinfvp.png"
        },
        {
            id:16,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970062/removed-background_2_cifcq7.png"
        },
        {
            id:17,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970847/removed-background_5_fomqx2.png"
        },
        {
            id:18,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:19,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png"
        },
        {
            id:20,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:21,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png"
        },
        {
            id:22,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png"
        },
        {
            id:23,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:24,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            originalPrice: 4499,
            inStock: true,
            rating: 4.5,
            reviewCount: 128,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png"
        }
    ]
    // Limit to 10 products for desktop view
    const displayProducts = showAllProducts ? allProducts : allProducts.slice(0, 10)

return(<>
    <section className="w-full h-full pb-[5%] bg-gray-100 pl-[2%] pr-[2%] md:pl-[5%] pt-[3%]">
        <div className="flex gap-3 text-md md:text-3xl font-semibold">
            <div className="border-[3px] rounded-full border-green-500"></div>
            <div>All Products</div>
        </div>
            
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center mt-3 md:mt-10">
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
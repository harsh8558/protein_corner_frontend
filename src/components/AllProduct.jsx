import ProductCard from "./UI/ProductCard"
const AllProducts = () => {
    const allProducts =[
        {
            id:1,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:2,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970158/creatine_sodxyj.png"
        },
        {
            id:3,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737971151/removed-background_6_tinfvp.png"
        },
        {
            id:4,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970062/removed-background_2_cifcq7.png"
        },
        {
            id:5,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970847/removed-background_5_fomqx2.png"
        },
        {
            id:6,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:7,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png"
        },
        {
            id:8,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png"
        },
        {
            id:9,
            name:"Product Name",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ipsum?",
            price:10000,
            image:"https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png"
        }
    ]
    console.log(allProducts)
return(<>
        <div className="w-full h-full pb-[5%] bg-gray-100 pl-[2%] pr-[2%] md:pl-[5%] pt-[3%]">
        <div className="flex gap-3 text-md md:text-3xl font-semibold">
            <div className="border-[3px] rounded-full border-green-500"></div>
            <div>All Products</div>
        </div>
        <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-5   gap-[3%] md:gap-5 mt-5 md:mt-10  md:text-lg text-[10px] font-semibold md:pl-[2%]">
            {
                allProducts.map((product)=>{
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    </div>
</>)
}
export default AllProducts;
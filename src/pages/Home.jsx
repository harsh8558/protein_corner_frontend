import Banner from "../components/UI/Banner"
import Categories from "../components/Categories"
import AllProducts from "../components/AllProduct"
const Home = () => {
    return(<>
    <div className="w-full h-full bg-white mt-32">
        <Banner/>
        <Categories/>
        <AllProducts/>
    </div>
    </>)
}
export default Home
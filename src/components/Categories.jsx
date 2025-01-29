import { NavLink } from "react-router-dom"
import CategoriesCard from "./UI/CategoriesCard";

const Categories = () =>{
return(<>
    <div className="w-full h-full mb-[10%] md:mb-[3%]  bg-white pl-[2%] pr-[2%] md:pl-[5%] pt-[3%]">
        <div className="flex gap-3 text-md md:text-3xl font-semibold">
            <div className="border-[3px] rounded-full border-green-500"></div>
            <div>Categories</div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-3  gap-[3%] md:gap-10 mt-5 md:mt-10  md:text-lg text-[10px] font-semibold md:pl-[2%]">
            <CategoriesCard 
                imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969321/removed-background_zlwg5p.png" 
                category="Protein" 
                navLink="/protein"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737969733/removed-background_1_tc1ekl.png" category="Pre-Workout" navLink="/pre-workout"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970062/removed-background_2_cifcq7.png" category="Mass Gainers" navLink="/mass-gainers"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970158/creatine_sodxyj.png" category="Creatine" navLink="/creatine"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970554/removed-background_3_gwzbga.png" category="Vitamins & Minerals" navLink="/vitamins-minerals"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970670/removed-background_4_ykdmr4.png" category="Glutamine" navLink="/glutamine"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737970847/removed-background_5_fomqx2.png" category="Fat Burners" navLink="/fat-burners"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737971151/removed-background_6_tinfvp.png" category="BCCA & EAA" navLink="/bcca-eaa"/>
            <CategoriesCard imgUrl="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737971243/removed-background_7_mwlldh.png" category="Other Supplements" navLink="/other-supplements"/>
        </div>
    </div>    
</>)
}
export default Categories
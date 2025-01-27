import { NavLink } from "react-router-dom";
const CategoriesCard = ({imgUrl, category, navLink}) => {
    return(<>
            <div className="flex flex-col justify-center items-center md:w-48 w-24">
                <NavLink to={navLink}>
                    <div className="border-[1px] md:w-48 w-16 rounded-full border-green-500 overflow-hidden">
                        <img 
                            src={imgUrl} 
                            loading="lazy"
                            className="md:p-3 p-0 bg-gray-100 hover:transform hover:scale-110 transition-transform duration-300 hover:bg-gray-200 w-[100%] h-[100%]" 
                            alt={category} />
                        </div>
                </NavLink>
                <p>{category}</p>
            </div>
    </>)
}
export default CategoriesCard;
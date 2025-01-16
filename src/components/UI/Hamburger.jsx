import { BurgerClose as Icon } from "react-icons-animated";
const Hamburger = ({isMobileMenuOpen,setIsMobileMenuOpen})=>{
    return(<>
        <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="" 
        style={{
        width: "40px",
        height: "20px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Icon isClosed={isMobileMenuOpen} />
    </button>
    </>)
}

export default Hamburger
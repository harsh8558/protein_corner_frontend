import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddToCart = () => {
  return (<>
  <FontAwesomeIcon icon={faCartShopping} 
    className="text-white text-2xl md:text-3xl hover:text-yellow-400 shadow-lg" />
  </>)
}

export default AddToCart;
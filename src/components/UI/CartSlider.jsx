import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../Context/CartContext'
const CartSlider = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setQuantity(1)
        onClose()
    }

    return (<>
        {/* <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <img src={product?.image} alt={product?.name} className="w-full h-48 object-contain" />
                    <h3 className="text-lg font-semibold">{product?.name}</h3>
                    <p className="text-gray-600">{product?.description}</p>
                    <div className="text-xl font-bold">₹{product?.price}</div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Quantity:</span>
                        <div className="flex items-center gap-2">
                            <button onClick={decreaseQuantity} className="p-1 rounded-full hover:bg-gray-100">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="w-8 text-center">{quantity}</span>
                            <button onClick={increaseQuantity} className="p-1 rounded-full hover:bg-gray-100">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                        Add to Cart - ₹{(product?.price * quantity).toFixed(2)}
                    </button>
                </div>
            </div>
        </div> */}

        {/* <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                </div>

                {product ? (
                    <div className="flex flex-col gap-4">
                        <img src={product?.image} alt={product?.name} className="w-full h-48 object-contain" />
                        <h3 className="text-lg font-semibold">{product?.name}</h3>
                        <p className="text-gray-600">{product?.description}</p>
                        <div className="text-xl font-bold">₹{product?.price}</div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">Quantity:</span>
                            <div className="flex items-center gap-2">
                                <button onClick={() => decreaseQuantity()} className="p-1 rounded-full hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="w-8 text-center">{quantity}</span>
                                <button onClick={() => increaseQuantity()} className="p-1 rounded-full hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Add to Cart - ₹{(product?.price * quantity).toFixed(2)}
                        </button>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-500 mt-8">
                                Your cart is empty
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4 border-b pb-4">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <div className="text-lg font-bold">₹{item.price}</div>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button onClick={() => decreaseQuantity(item.id)} className="p-1 rounded-full hover:bg-gray-100">
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button onClick={() => increaseQuantity(item.id)} className="p-1 rounded-full hover:bg-gray-100">
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                    <button 
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="ml-2 text-red-500 hover:text-red-700"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 border-t pt-4">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total:</span>
                                        <span>₹{getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <button 
                                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors mt-4"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div> */}

<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add to Cart</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <img src={product?.image} alt={product?.name} className="w-full h-48 object-contain" />
                    <h3 className="text-lg font-semibold">{product?.name}</h3>
                    <p className="text-gray-600">{product?.description}</p>
                    <div className="text-xl font-bold">₹{product?.price}</div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Quantity:</span>
                        <div className="flex items-center gap-2">
                            <button onClick={decreaseQuantity} className="p-1 rounded-full hover:bg-gray-100">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="w-8 text-center">{quantity}</span>
                            <button onClick={increaseQuantity} className="p-1 rounded-full hover:bg-gray-100">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <button 
                        onClick={handleAddToCart}
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Add to Cart - ₹{(product?.price * quantity).toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
        
    </>)
}

export default CartSlider
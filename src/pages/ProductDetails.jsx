import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaShoppingCart, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`);
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        // Set default variant if available
        if (response.data.variants && response.data.variants.length > 0) {
          setSelectedVariant(response.data.variants[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Added to cart:', {
      product,
      quantity,
      variant: selectedVariant
    });
  };

  if (!product) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="product-image-gallery">
          <div className="bg-gray-100 rounded-xl p-8 mb-4">
            <img 
              src={selectedVariant?.image || product.image} 
              alt={product.name} 
              className="w-full h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
            />
          </div>
          
          {/* Additional Images / Variants */}
          {product.variants && (
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {product.variants.map((variant, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedVariant(variant)}
                  className={`
                    w-20 h-20 p-2 rounded-lg cursor-pointer border-2 
                    ${selectedVariant === variant ? 'border-green-500' : 'border-transparent'}
                    hover:border-green-300 transition-all
                  `}
                >
                  <img 
                    src={variant.image} 
                    alt={`${product.name} variant`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="product-info">
          {/* Product Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-5 h-5 ${i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviewCount || 0} reviews)</span>
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-4">
              <span className="text-4xl font-bold text-green-600">₹{selectedVariant?.price || product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{selectedVariant?.originalPrice || product.originalPrice}
                  </span>
                  <span className="text-red-500 font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6 flex items-center gap-4">
            <span className="text-lg font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => handleQuantityChange(-1)} 
                className="p-2 hover:bg-gray-100"
              >
                <FaMinus className="text-gray-600" />
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)} 
                className="p-2 hover:bg-gray-100"
              >
                <FaPlus className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`
                flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all
                ${product.inStock 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <FaShoppingCart />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button 
              className="
                flex items-center justify-center px-6 py-3 rounded-lg 
                border-2 border-green-600 text-green-600 
                hover:bg-green-50 transition-all
              "
            >
              <FaHeart className="mr-2" /> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Additional Product Details */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
            {product.nutritionalInfo && (
              <ul className="space-y-2">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <li key={key} className="flex justify-between border-b pb-2">
                    <span className="text-gray-700">{key}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            {product.details && (
              <ul className="space-y-2">
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key} className="flex justify-between border-b pb-2">
                    <span className="text-gray-700">{key}</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
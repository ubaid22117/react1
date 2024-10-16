import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ReleatedProduct from '../components/ReleatedProduct';


const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const currency = '$'; // Define your currency symbol

  // Fetch product data based on productId
  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row overflow-hidden'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[20%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md border border-gray-300 hover:border-blue-500 transition-all duration-300'
                alt={`Product image ${index + 1}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[75%] overflow-hidden'>
            <img className='w-full h-auto rounded-md shadow-md transition-transform duration-300 hover:scale-105' src={image} alt='Selected Product' />
          </div>
        </div>

        {/* Product Info (Right Side) */}
        <div className='flex-1 mt-5'>
          <h1 className='font-semibold text-3xl mt-2'>{productData.name}</h1>
          {/* Stars and Price Section */}
          <div className='flex flex-col mt-2'>
            <div className='flex items-center gap-1'>
              <img src={assets.star_icon} alt="Star 1" className="w-5" />
              <img src={assets.star_icon} alt="Star 2" className="w-5" />
              <img src={assets.star_icon} alt="Star 3" className="w-5" />
              <img src={assets.star_icon} alt="Star 4" className="w-5" />
              <img src={assets.star_icon} alt="Star 5" className="w-5" />
              <p className='pl-2'>(122)</p>
            </div>
            {/* Move the price below the stars */}
            <p className='mt-2 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button
                    key={index} // Place key prop here
                    onClick={() => setSize(item)} // Set the size when clicked
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-40'> ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return & exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description and Reviews Section (below the image) */}
      <div className='mt-12 sm:mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className=' flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quas amet voluptas voluptate quia. Fuga eveniet odit dolor aut nemo dolorem sunt adipisci cupiditate vero omnis itaque, animi repudiandae ab.</p>
          <p>A typical e-commerce website usually displays a wide range of products or services in an organized and visually appealing way to make it easier for customers to browse, select, and purchase.</p>
        </div>

      </div>
      {/* display releated product */}
    <ReleatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;

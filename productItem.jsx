import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer block' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out w-full'
          src={image[0]}
          alt=""
        />
      </div>
      <div className='pt-3'>
        {/* Product Name Truncated to Fit in One Line */}
        <p className='text-sm truncate'>{name}</p>
        {/* Price Consistently Below Product Name */}
        <p className='text-sm font-medium mt-1'>{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;

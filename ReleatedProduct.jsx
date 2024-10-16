import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './title';
import ProductItem from './productItem';

const RelatedProduct = ({ category, subCategory }) => { // Correct destructuring of props
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice(); // Clone the products array
      // Filter products based on category and subCategory
      productCopy = productCopy.filter((item) => item.category === category);
      productCopy = productCopy.filter((item) => item.subCategory === subCategory);
      setRelated(productCopy.slice(0, 5)); // Show only the first 5 related products
    }
  }, [products, category, subCategory]); // Add category and subCategory as dependencies

  return (
    <div className='my-24 '>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;

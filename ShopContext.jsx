import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Function to add an item to the cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    } 

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increase quantity for the size
      } else {
        cartData[itemId][size] = 1; // Initialize quantity for the new size
      }
    } else {
      cartData[itemId] = {}; // Initialize new item
      cartData[itemId][size] = 1; // Set quantity for the size
    }

    setCartItems(cartData);
  };

  // Function to get the total number of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size]; // Sum up quantities for each size
      }
    }
    return totalCount; // Return the total count of items in the cart
  };

  // Function to get the total amount in the cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        for (const size in cartItems[itemId]) {
          try {
            if (cartItems[itemId][size] > 0) {
              totalAmount += itemInfo.price * cartItems[itemId][size]; // Calculate the total amount
            }
          } catch (error) {
            console.error(error); // Handle any errors
          }
        }
      }
    }
    return totalAmount; // Return the total cart amount
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  // Context value to provide to child components
  const value = {
    products,
    currency,
    delivery_fee,
    search, 
    setSearch, 
    showSearch, 
    setShowSearch,
    cartItems, 
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

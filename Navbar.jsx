import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch , getCartCount} =useContext(ShopContext);


  return (
    <div className='flex items-center justify-between py-5 px-4 font-medium relative'>
     <Link to='/'> <img src={assets.logo} alt="Logo" className="w-36" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 relative ${
                isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
              }`
            }
          >
            <p className='text-xl'>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 relative ${
                isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
              }`
            }
          >
            <p className='text-xl'>Collection</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 relative ${
                isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
              }`
            }
          >
            <p className='text-xl'>About</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 relative ${
                isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
              }`
            }
          >
            <p className='text-xl'>Contact</p>
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search Icon" />

        <div className='relative group'>
        <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" /></Link> 
          <div className='absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 shadow-md rounded-md'>
              <p className='cursor-pointer hover:text-black transition duration-200'>My Profile</p>
              <p className='cursor-pointer hover:text-black transition duration-200'>Orders</p>
              <p className='cursor-pointer hover:text-black transition duration-200'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5' alt="Cart Icon" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu Icon" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'} overflow-hidden`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back Icon" />
            <p>Back</p>
          </div>
          <ul className='flex flex-col gap-4 px-6 py-4'>
            <li>
              <NavLink
                to="/"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `relative text-gray-700 hover:text-black ${
                    isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `relative text-gray-700 hover:text-black ${
                    isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
                  }`
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `relative text-gray-700 hover:text-black ${
                    isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `relative text-gray-700 hover:text-black ${
                    isActive ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[3px] after:bg-black after:rounded-md' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

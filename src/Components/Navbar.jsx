import React from 'react'
import { Link } from 'react-router';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 items-center sticky top-0 bg-white z-10 ' id='navbar'>
      <Link to="/">
        <img src="/rolex.png" alt="logo" className='h-12' />
      </Link>
      
      <ul className='flex gap-20'>
        <Link  to="/"><li className='hover:text-green-500'>Home</li></Link>
        <Link to="/product"><li className='hover:text-green-500'>Product</li></Link>
        <Link to="/collections"><li className='hover:text-green-500'>Collections</li></Link>
        <Link to="/contact"><li className='hover:text-green-500'>Quick Find</li></Link>
        <Link to="/about"><li className='hover:text-green-500'>About</li></Link>
      </ul>
      
      <div className='flex gap-8'>
        <Link to="/contact" className='p-4 rounded-2xl border-2 border-gray-300 hover:bg-green-500'>
          Contact Us
        </Link>
        <Link to="/cart" className='py-4 px-6 flex items-center rounded-2xl border-2 border-gray-300 hover:bg-green-500'>
            <FaCartPlus />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
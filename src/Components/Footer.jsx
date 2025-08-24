import React from 'react'
import { FaInstagram, FaPinterest,FaLinkedin   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex p-10 bg-green-500 text-white'>
        <div className='flex flex-col gap-5 flex-1 p-2'>
            <div className='flex items-center'>
                <img src="/rolex.png" alt="rolex" className='w-20 ' />
                <h2 className='text-3xl'>Amaterasu</h2>
            </div>
            <p className='text-xl opacity-75'>A watch is a portable timepiece worn on the body, typically on the wrist, that shows the time using either hands on a dial (analog) or digits on a screen (digital).</p>
            <div className='flex gap-5'>
                <p className='p-3 border-2 text-2xl rounded-full cursor-pointer border-gray-300 '><FaInstagram /></p>
                <p className='p-3 border-2 text-2xl rounded-full cursor-pointer border-gray-300 '><FaPinterest /></p>
                <p className='p-3 border-2 text-2xl rounded-full cursor-pointer border-gray-300 '><FaLinkedin  /></p>
            </div>
            <p>&copy; 2025 Prabesh Lamichhane, All Right Reserved</p>
        </div>
        <div className='flex p-3 justify-between flex-1'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold mb-12'>Menu</h2>
                <p className='text-xl opacity-85'>Home</p>
                <p className='text-xl opacity-85'>Collections</p>
                <p className='text-xl opacity-85'>Categories</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold mb-12'>Support</h2>
                <p className='text-xl opacity-85'>FAQs</p>
                <p className='text-xl opacity-85'>Terms and Condions</p>
                <p className='text-xl opacity-85'>Privacy Policy</p>
                <p className='text-xl opacity-85'>Reports</p>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-2xl font-bold mb-12'>Stay in Touch</h2>
                <form className='flex flex-col gap-5 '>
                    <input type="email" className='p-3 rounded-4xl border-[1px] focus:outline-0 w-[100%]' placeholder='example@gmail.com' required />
                    <button className='p-3 px-5 rounded-4xl bg-black cursor-pointer'>Send</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer

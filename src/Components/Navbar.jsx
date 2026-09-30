import React from 'react'
import logo from '../assets/logo.webp'
import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className='flex items-center justify-around h-18  space-x-1'>
    <img src={logo} alt="" className='h-15' />
    <ul className='flex uppercase text-l text-gray-600 space-x-10  cursor-pointer'>
        <NavLink to="/">
            <li className='hover:text-blue-400 hover:underline'>Home</li>
        </NavLink>
        <NavLink to="/about">
            <li className='hover:text-blue-400 hover:underline'>About</li>
        </NavLink>
        <NavLink to="/portfolio">
            <li className='hover:text-blue-400 hover:underline'>portfolio</li>
        </NavLink>
       <NavLink to="/contact">
         <li className='hover:text-blue-400 hover:underline'>contact</li>
       </NavLink>
    </ul>
    <div className='flex justify-center items-center space-x-5'>
        <FaSearch />
        <NavLink to="/booking">
            <button className='rounded-2xl bg-black text-white p-2 pl-5 pr-5 capitalize'>book a shoot</button>
        </NavLink>
    </div>
    

   </nav>
  )
}

export default Navbar

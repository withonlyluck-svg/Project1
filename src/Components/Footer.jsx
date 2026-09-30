import React from 'react'
import logo from '../assets/logowhite.webp'
import insta from '../assets/instagram.webp'
import facebook from '../assets/facebook.webp'
import youtube from '../assets/youtube.webp'
import mobile from '../assets/mobile.webp'
import email from '../assets/email.webp'
import location from '../assets/location.webp'

const Footer = () => {
  return (
   <>
   <div className='flex h-100 footer justify-between items-center mt-8 pl-30'>
    <div>
    <span className='uppercase text-xs tracking-widest font-bold text-gray-600' >→ let's work together</span>
    <h2 className='text-5xl italic capitalize mt-3'>book your shoot</h2>
    <p className='capitalize mt-4 text-gray-700'>have a project in mind? let's create something beautiful together</p>
    <button className='rounded-xl bg-black text-white p-2 pl-5 pr-5 capitalize w-50 mt-8'>→get in touch</button>
   </div>

   <div>
       <span className='flex items-center text-gray-700 gap-5 m-2'>
         <img src={mobile} alt="" className='h-10'/> <span>8949937987</span>
       </span>
        <span className='flex items-center text-gray-700 gap-5 m-2'>
            <img src={email} alt="" className='h-10'/> <span>withonlyluck@gmail.com</span>
        </span>
        <span className='flex items-center text-gray-700 gap-5 m-2'>
            <img src={location} alt="" className='h-10'/> <span>jaipur,rajasthan</span>
        </span>
   </div>
   <div className='bg-white h-80 w-90 p-5 rounded-2xl'>
    <span className='capitalize text-gray-600'>your name</span><br />
    <input type="text" placeholder='Enter your name' className='outline-none border border-gray-400 w-70 p-2 rounded-2xl' /><br />

    <span className='capitalize text-gray-600 '>your email</span><br />
    <input type="text" placeholder='Enter your email' className='outline-none border border-gray-400 w-70 p-2 rounded-2xl' /><br />

    <span className='capitalize text-gray-600'>your message</span><br />
    <input type="text" placeholder='tell me about your project' className='outline-none border border-gray-400 w-70 p-2 rounded-2xl' /><br />

    <button className='rounded-xl bg-black text-white p-2 pl-5 pr-5 capitalize w-80 mt-8'>send message</button>

   </div>

   <div></div>

   </div>
    <div className='flex items-center justify-around h-18   bg-black border-b border-gray-100'>
        <img src={logo} alt="" className='h-15' />
          <ul className='flex uppercase text-l text-gray-300 space-x-10  cursor-pointer'>
              <li className='hover:text-blue-400'>Home</li>
              <li className='hover:text-blue-400'>About</li>
              <li className='hover:text-blue-400'>portfolio</li>
              <li className='hover:text-blue-400'>contact</li>
          </ul>
          
          <div className='flex gap-5'>
            <img src={insta} alt="" className='h-8'/>
            <img src={facebook} alt="" className='h-8'/>
            <img src={youtube} alt="" className='h-8'/>
          </div> 
          
         
    </div>
    <div  className='h-12 bg-black justify-between flex pl-12 pr-12'>
            <span className='text-gray-400 capitalize text-xm'><span className='text-white'>©</span>2026 LuCk photography.all rights reserved</span>
            <span className='capitalize text-xm text-gray-400'>privacy policy | terms & condition</span>
          </div>
   </>
    
  )
}

export default Footer

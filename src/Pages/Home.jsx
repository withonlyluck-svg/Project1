import React from 'react'
import {NavLink} from 'react-router-dom'
import tilt from '../assets/tilt.webp'
import marriage from '../assets/marriage.webp'
import portrait from '../assets/portrait.webp'
import travel from '../assets/travel.webp'
import photography from '../assets/photography.webp'
import marr from '../assets/marr.webp'
import profile from '../assets/profile.webp'
import travellogo from '../assets/travellogo.webp'
import camera from '../assets/camera.webp'
import { FaHome, FaSearch } from "react-icons/fa";
import home1 from '../assets/home1.webp'
import home2 from '../assets/home2.webp'
import home3 from '../assets/home3.webp'
import home4 from '../assets/home4.webp'
import home5 from '../assets/home5.webp'
import home6 from '../assets/home6.webp'
import home7 from '../assets/home7.webp'
import intro from '../assets/intro.webp'
import sticker from '../assets/sticker.webp'
import beyond from '../assets/beyond.webp'
import cameralogo from '../assets/cameralogo.webp'
import gallery from '../assets/gallery.webp'
import location from '../assets/location.webp'
import rating1 from '../assets/rating1.webp'
import rating2 from '../assets/rating2.webp'
import rating3 from '../assets/rating3.webp'


const Home = () => {
  return (
    <div>
      <section className='homePage h-60vh w-160vh ml-30 flex justify-end items-center relative'>
        
        <img src={tilt} alt="" className='absolute h-45 left-90 top-3' />
        <div className='w-150'>
        <span className='uppercase text-xs font-bold tracking-widest text-gray-600'>capturing real emotions</span>
        <h1 className='text-7xl capitalize'>
            your story <br />
            through my lens
        </h1>
        <p className='capitalize mt-3 text-gray-800 '>i'm a professional photographer, capturing <br /> real moments, raw emotions and timeless stories <br /> in the most beautiful way posslble</p>
        <button className='rounded-2xl bg-black text-white p-3 pl-7 pr-7 capitalize m-5 '>explore my work →</button>
        </div>
      </section>
      <section className='flex gap-3 ml-30 mt-6'>
        <div className='h-85 w-80 pt-5'>
            <span className='uppercase text-xs tracking-widest font-bold text-gray-600 '>my services</span>
            <h1 className='text-5xl italic capitalize mt-3'>what i do</h1>
            <p className='capitalize mt-4 text-gray-700'>from capturing to commercial shoots, <br />
            i offer a range of photography services tailored <br />
            to your unique story.</p><br /><br />
            <button className='uppercase bg-amber-300 shadow-gray-500 shadow-2xl font-light h-10 w-50'>view all services →</button>

        </div>
       <NavLink to="/Wedding">
         <div className='shadow-2xl shadow-gray-300  h-85 w-60 relative hover:scale-102 transition-all'>
            <img src={marriage} alt=""  className='h-40 w-60 p-1'/>
            <img src={marr} alt="" className='absolute h-10 rounded-4xl top-35 left-4' />
            <div className='mt-8 p-1'>
                <h2 className='capitalize font-bold'>wedding photography</h2>
            <span className='capitalize text-xm text-gray-500 '>candid traditional or cinematic- I capture your special day beautifully.</span>
            </div>
        </div>
       </NavLink>
            
        <NavLink to="/Portraits">
            <div className='shadow-2xl shadow-gray-300  h-85 w-60 relative hover:scale-102 transition-all'>
            <img src={portrait} alt=""  className='h-40 w-60 p-1'/>
             <img src={profile} alt="" className='absolute h-10 rounded-4xl top-35 left-4' />
             <div className='mt-8 p-1'>
                <h2 className='capitalize font-bold'>portraits</h2>
            <span className='capitalize text-xm text-gray-500 '>natural, expressive and full of personality.</span>
            </div>
        </div>
        </NavLink>

        <NavLink to="/travel">
          <div className='shadow-2xl shadow-gray-300  h-85 w-60 relative hover:scale-102 transition-all'>
            <img src={travel} alt=""  className='h-40 w-60 p-1'/>
             <img src={travellogo} alt="" className='absolute h-10 rounded-4xl top-35 left-4' />
             <div className='mt-8 p-1'>
                <h2 className='capitalize font-bold'>travel & landscape</h2>
            <span className='capitalize text-xm text-gray-500 '>breathtaking places & beautiful stories.</span>
            </div>
        </div>
        </NavLink>

        <NavLink to="/product">
          <div className='shadow-2xl shadow-gray-300 h-85 w-60 relative hover:scale-102 transition-all'>
            <img src={photography} alt ="" className='h-40 w-60 p-1'/>
             <img src={camera} alt="" className='absolute h-10 rounded-4xl top-35 left-4' />
             <div className='mt-8 p-1'>
                <h2 className='capitalize font-bold'>product photography</h2>
            <span className='capitalize text-xm text-gray-500 '>make your brand looks its best.</span>
            </div>
        </div>
        </NavLink>
       
      </section>

      <section className='shadow-2xl shadow-gray-300 h-161 w-332 mt-8 ml-30'>
        <div className='flex justify-around gap-170 pt-4 items-center mt-10'>
            <div className='w-100'>
                <span className='text-gray-600 uppercase tracking-widest text-xs'>featured works</span>
            <h1 className='italic capitalize text-5xl'>my portfolio</h1>
            <p className='pt-4 capitalize text-gray-700'>a collection of moments, places and people that tell defferent stories.</p>
            </div>
           <NavLink to="/gallery">
             <div>
                <button className='uppercase mr-3 first-letter:text-2xl bg-amber-300 shadow-gray-500 shadow-2xl font-light h-10 w-50'>view full gallery →</button>
            </div>
           </NavLink>
        </div>
        <ul className='flex gap-18 uppercase ml-3 mt-4 text-xs font-bold text-gray-600 items-center '>
            <li className='bg-black text-white h-8 w-15 p-2 rounded-2xl justify-center flex'>all</li>
            <li>wedding</li>
            <li>portrait</li>
            <li>travel</li>
            <li>product</li>
        </ul>
        <div className='flex p-2'>
            <div><img src={home1} alt="" className='h-100 w-70 mt-2 mr-2 hover:scale-102 transition-all' /></div>
            <div className='h-100'>
                <div className='flex '>
                    <img src={home2} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                    <img src={home3} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                    <img src={home4} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                </div>
                <div className='flex'>
                    <img src={home5} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                    <img src={home6} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                    <img src={home7} alt="" className='h-48 m-2 w-88 hover:scale-102 transition-all'/>
                </div>
            </div>
        </div>
        
      </section>
      <section className='flex bg-white mt-10 shadow-2xl shadow-gray-300 h-160 relative'>
        <div className='h-150 w-200 relative'>
            <img src={intro} alt=""  className='h-150 w-250 ml-30'/>
            <img src={beyond} alt="" className='absolute h-30 top-122 left-55'/>
        </div>
        <div className='h-100 w-150 m-20 ml-30'>
            <span className='text-gray-600 uppercase tracking-widest text-xs'>←about me</span>
            <h2 className='italic capitalize text-5xl'>hi, i'm luCk</h2>
            <p className='pt-4 capitalize text-gray-700'>I’m a passionate photographer based in Jaipur, capturing life’s most beautiful moments — from intimate portraits to breathtaking landscapes. Photography isn’t just my profession, it’s my way of seeing the world.</p>
            <div className='flex mt-10 gap-20'>
                <div><img src={cameralogo} alt="" className='h-12' />
                <span>5+</span>
                <p className='text-gray-600 uppercase tracking-widest text-xm'>years experience</p>
                </div>

                <div><img src={gallery} alt="" className='h-12' />
                <span>500+</span>
                <p className='text-gray-600 uppercase tracking-widest text-xm'>happy clients</p>
                </div>

                <div><img src={location} alt="" className='h-12' />
                <span>1000+</span>
                <p className='text-gray-600 uppercase tracking-widest text-xm'>photos captured</p>
                </div>
                <img src={sticker} alt="" className='absolute h-40 left-300 top-1 ' />
               
            </div>
           <NavLink to="/about">
             <button className='m-15 capitalize h-10  w-60 mr-3  bg-amber-300 shadow-gray-500 shadow-2xl font-light'>know more abount me→</button>
           </NavLink>
        </div>
      </section>
      
      <section className='bg-white w-7xl h-100  ml-30 mt-12 m-50'>
        <div className=' m-10 '>
            <span className='text-gray-600 uppercase tracking-widest text-xs'>testimonials</span>
            <h2 className='capitalize text-5xl'>what my clients say</h2>
            <p className='pt-4 capitalize text-gray-700'>real stories from real people.their happiness means everything</p>
        </div>
        <div className="flex gap-30 p-10 bg-linear-to-r from-blue-00 via-blue-50 to-purple-100  rounded-xl shadow-lg">
  {/* Review Card 1 */}
  <div className="w-75 border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center bg-white">
    <img src={rating1} alt="" className="h-20 w-20 rounded-full border-4 border-amber-300 shadow-md mb-4" />
    <p className="text-gray-600 capitalize text-sm italic leading-relaxed">
      The photographer captured my personality perfectly. The lighting was soft yet dramatic, and every shot felt natural.
    </p>
    <span className="uppercase font-semibold text-amber-600 mt-3">priya & rahul</span>
    <span className="text-lg mt-2">⭐⭐⭐⭐⭐</span>
  </div>

  {/* Review Card 2 */}
  <div className="w-75 border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center bg-white">
    <img src={rating2} alt="" className="h-20 w-20 rounded-full border-4 border-pink-300 shadow-md mb-4" />
    <p className="text-gray-600 capitalize text-sm italic leading-relaxed">
      We hired them for our wedding, and the photos tell the story better than words ever could. From candid laughter to emotional moments, nothing was missed.
    </p>
    <span className="uppercase font-semibold text-pink-600 mt-3">rohit verma</span>
    <span className="text-lg mt-2">⭐⭐⭐⭐⭐</span>
  </div>

  {/* Review Card 3 */}
  <div className="w-75 border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center bg-white">
    <img src={rating3} alt="" className="h-20 w-20 rounded-full border-4 border-blue-300 shadow-md mb-4" />
    <p className="text-gray-600 capitalize text-sm italic leading-relaxed">
      Their eye for detail is incredible. The way they frame landscapes makes you feel like you’re standing right there.
    </p>
    <span className="uppercase font-semibold text-blue-600 mt-3">neha sharma</span>
    <span className="text-lg mt-2">⭐⭐⭐⭐⭐</span>
  </div>
</div>

      </section>
    </div>
  )
}

export default Home

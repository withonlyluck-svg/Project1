import React from 'react'
import wedding from '../assets/m (4).webp'
import portrait from '../assets/portrait.webp'
import travel from '../assets/t (2).webp'
import landscape from '../assets/t (1).webp'
import street from '../assets/t (15).webp'
import jaipur from '../assets/Home6.webp'
import portfolioVideo from '../assets/portfolio.mp4'
import weddingv from '../assets/wedding.mp4'
import {NavLink} from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        >
        <div className="bg-black/50 absolute h-150 inset-0">
        <video
        src={weddingv}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      /></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-serif text-white">My Portfolio</h1>
          <p className="mt-3 text-lg text-gray-200">Moments I’ve Captured — weddings, portraits, travel & more</p>
          <NavLink to="/gallery">
            <button className="mt-6 bg-amber-400 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition-all">View Gallery →
            
          </button>
          </NavLink>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 px-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{img:wedding,label:'Wedding'},{img:portrait,label:'Portrait'},{img:travel,label:'Travel'},{img:landscape,label:'Landscape'},{img:street,label:'Street'}].map((item,i)=>(
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src={item.img} alt={item.label} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Behind the Lens</h2>
        <video
          src={portfolioVideo}
          autoPlay loop muted
          className="mx-auto rounded-xl shadow-lg w-full max-w-3xl hover:scale-105 transition-transform duration-300"
        />
      </section>

      {/* Featured Project */}
      <section className="py-12 px-10 flex flex-col md:flex-row items-center gap-8 bg-gray-100">
        <img src={jaipur} alt="Jaipur" loading="lazy" className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"/>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-serif mb-3">Jaipur Through My Lens</h3>
          <p className="text-gray-700 mb-5">A vibrant collection capturing the colors, culture, and charm of Jaipur city.</p>
          <button className="bg-amber-400 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition-all">View Collection →</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center bg-linear-to-r from-gray-100 to-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Ready to Capture Your Story?</h2>
        <NavLink to="/booking">
          <button className="bg-amber-400 text-white px-8 py-3 rounded-lg hover:bg-amber-500 transition-all">Book A Shoot →</button>
        </NavLink>
      </section>
    </div>
  )
}

export default Portfolio

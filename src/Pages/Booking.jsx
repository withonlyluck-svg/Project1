import React from 'react'
import { FaCalendarAlt, FaClock, FaCamera, FaUser, FaEnvelope } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="bg-linear-to-r from-blue-300 via-blue-50 to-purple-200 min-h-screen py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="uppercase text-xs tracking-widest text-gray-600">booking</span>
        <h1 className="text-5xl italic capitalize mt-3 font-bold text-gray-800">reserve your shoot</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Select your preferred date, time and service type.  
          Let’s capture your story in the most beautiful way.
        </p>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <label className="capitalize text-gray-600 flex items-center gap-2">
              <FaUser /> your name
            </label>
            <input type="text" placeholder="Enter your name" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-amber-400" />
          </div>
          {/* Email */}
          <div>
            <label className="capitalize text-gray-600 flex items-center gap-2">
              <FaEnvelope /> your email
            </label>
            <input type="email" placeholder="Enter your email" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-pink-400" />
          </div>
          {/* Date */}
          <div>
            <label className="capitalize text-gray-600 flex items-center gap-2">
              <FaCalendarAlt /> date
            </label>
            <input type="date" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-purple-400" />
          </div>
          {/* Time */}
          <div>
            <label className="capitalize text-gray-600 flex items-center gap-2">
              <FaClock /> time
            </label>
            <input type="time" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>

        {/* Service Type */}
        <div className="mt-8">
          <label className="capitalize text-gray-600 flex items-center gap-2">
            <FaCamera /> service type
          </label>
          <select className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-amber-400">
            <option>Wedding Photography</option>
            <option>Portraits</option>
            <option>Travel & Landscape</option>
            <option>Product Photography</option>
          </select>
        </div>

        {/* Message */}
        <div className="mt-8">
          <label className="capitalize text-gray-600">your message</label>
          <textarea placeholder="Tell me about your project" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl h-32 focus:ring-2 focus:ring-pink-400"></textarea>
        </div>

        {/* Button */}
        <button className="mt-10 w-full bg-linear-to-r capitalize  from-blue-200 via-blue-100 to-purple-200 text-gray-700 font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
          confirm booking →
        </button>
      </div>
    </div>
  )
}

export default Booking

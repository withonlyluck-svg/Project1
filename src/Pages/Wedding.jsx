import React from 'react'
import data from '../Api/Data.json'

const Wedding = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-linear-to-r from-blue-100 via-blue-50 to-purple-100 min-h-screen">
      {/* Header */}
      <h1 className="uppercase italic text-5xl font-bold text-gray-800 mb-10">
        <span className="text-blue-400">our</span> Wedding Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 px-10 w-full max-w-6xl">
        {data.map((item) => (
          <div
            key={item.id}
            className=" relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="h-72 w-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wedding

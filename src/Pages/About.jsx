import React from 'react'
import intro from '../assets/intro.webp'
import logo from '../assets/logo.webp'

const About = () => {
  return (
    <div className="px-20 mt-10">
      {/* Header */}
      <div className="text-center mb-12 homePage h-60vh w-160vh relative">
        <img src={logo} alt="" className='rotate-340 h-30 left-150 top-60 absolute'/>
        <span className="uppercase text-xs tracking-widest text-gray-900">about me</span>
        <h1 className="text-5xl italic capitalize mt-3">behind the lens</h1>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          A story of passion, people and perspective.  
          I’ve uncovered a passion for people & places, chasing light, and capturing moments that tell a story.  
          My photography is a reflection of my journey, my personality, and my love of seeing the world just a little differently.
        </p>
      </div>

      {/* Journey Section */}
      <div className="flex gap-20 items-center bg-white shadow-2xl rounded-xl p-10 mb-12">
        <img src={intro} alt="profile" className="h-72 w-72 rounded-full shadow-lg" />
        <div>
          <h2 className="text-4xl italic capitalize mb-4">my journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Luck. Photography for me is more than just clicking pictures — it’s about telling stories, evoking emotions, and preserving memories.  
            My journey began with a simple camera and curiosity to see the world through a different lens. Over the years, I’ve honed my craft, learned from every shot, and discovered the beauty in imperfection.  
            Based in Jaipur, I specialize in portraits, lifestyle, travel, and landscape photography. My work is inspired by light, color, and authentic moments.  
            I believe every photograph has a story waiting to be told.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around text-center mb-12">
        <div>
          <span className="text-3xl font-bold">500+</span>
          <p className="uppercase text-gray-600 text-sm">happy clients</p>
        </div>
        <div>
          <span className="text-3xl font-bold">1000+</span>
          <p className="uppercase text-gray-600 text-sm">photos captured</p>
        </div>
        <div>
          <span className="text-3xl font-bold">8+</span>
          <p className="uppercase text-gray-600 text-sm">years experience</p>
        </div>
        <div>
          <span className="text-3xl font-bold">100%</span>
          <p className="uppercase text-gray-600 text-sm">passion</p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-100 shadow-lg rounded-xl p-10 mb-12">
        <h2 className="text-4xl italic capitalize mb-6">my values</h2>
        <p className="text-gray-700 mb-6">
          I believe great photography is built on trust, creativity & an eye for detail.  
          My goal is to make every client feel comfortable in every shoot, every frame, and every story I capture.
        </p>
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="p-4 bg-white rounded-xl shadow-md">Authenticity</div>
          <div className="p-4 bg-white rounded-xl shadow-md">Creativity</div>
          <div className="p-4 bg-white rounded-xl shadow-md">Exploration</div>
          <div className="p-4 bg-white rounded-xl shadow-md">Connection</div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="text-center mb-12">
        <span className="uppercase text-xs tracking-widest text-gray-600">what clients say</span>
        <h2 className="text-4xl italic capitalize mt-3">kind words</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto italic">
          “Luck is an incredible photographer! His ability to capture emotions and moments is unmatched. Every photo tells a story.”
        </p>
        <span className="block mt-3 font-semibold text-blue-500">— Priya Patel, Model & Influencer</span>
      </div>
    </div>
  )
}

export default About

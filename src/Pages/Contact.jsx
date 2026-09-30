import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name);
    console.log(email);
    console.log(message);
    
    const serviceId = "service_wa6qehm"
  const templateId = "template_4c7hypg"
  const publicKey = "zNE0UC81C8BWi6QQi"

  const templateParams = {
    name : name,
    email : email,
    message : message,
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
     alert("Message sent successfully ✅");
    setName('')
    setEmail('')
    setMessage('')
  })
  .catch((error) => {
    console.error("Error", error)
  })

  }

  return (
    <div className="bg-linear-to-r from-blue-100 via-blue-50 to-purple-100 min-h-screen py-20 px-10">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="uppercase text-xs tracking-widest text-gray-600">contact</span>
        <h1 className="text-5xl italic capitalize mt-3 font-bold">let's work together</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Have a project in mind? Let’s create something beautiful together.  
          Reach out via the form or directly through my contact details.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10">
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaPhoneAlt className="text-amber-600 text-2xl" />
            <span className="text-gray-700 text-lg">8949937987</span>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaEnvelope className="text-pink-600 text-2xl" />
            <span className="text-gray-700 text-lg">withonlyluck@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaMapMarkerAlt className="text-purple-600 text-2xl" />
            <span className="text-gray-700 text-lg">Jaipur, Rajasthan</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="capitalize text-gray-600">your name</label>
              <input type="text" placeholder="Enter your name" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-amber-400"
              value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="capitalize text-gray-600">your email</label>
              <input type="email" placeholder="Enter your email" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl focus:ring-2 focus:ring-pink-400" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="mt-6">
            <label className="capitalize text-gray-600">your message</label>
            <textarea placeholder="Tell me about your project" className="mt-2 outline-none border border-gray-300 w-full p-3 rounded-xl h-32 focus:ring-2 focus:ring-purple-400"
            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button
          type="submit"
           className="mt-8 w-full capitalize bg-linear-to-r from-blue-200 via-blue-100 to-purple-200 font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
            send message →
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.939!2d75.7873!3d26.9124..."
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import { Pin, Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-[#1B1B1B] py-16 px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* Brand Section */}
        <div className='space-y-6'>
        <h1 className='text-[32px] text-left text-white font-normal tracking-wide relative'>
        STUDY<span className='font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>table</span>
      </h1>
          <button className='bg-white cursor-pointer shadow-lg hover:scale-105 duration-300  hover:shadow-white/25 text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 group'>
            <Pin className='group-hover:scale-110 transition-transform' />
            <span className='font-medium'>Notice Board</span>
          </button>
        </div>

        {/* Socials Section */}
        <div className='space-y-6 sm:ml-40'>
          <h2 className='text-2xl font-semibold text-white border-b border-white/10 pb-2'>
            Socials
          </h2>
          <div className='space-y-4'>
            <a href="#" className='text-white/80 hover:text-white flex items-center gap-3 transition-colors group'>
              <Instagram className='group-hover:scale-110 transition-transform' />
              <span className='text-lg'>Instagram</span>
            </a>
            <a href="#" className='text-white/80 hover:text-white flex items-center gap-3 transition-colors group'>
              <FaWhatsapp className='text-xl group-hover:scale-110 transition-transform' />
              <span className='text-lg'>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Blogs Section */}
        <div className='space-y-6 lg:col-span-2 sm:ml-20'>
          <h2 className='text-2xl font-semibold text-white border-b border-white/10 pb-2'>
            Blogs
          </h2>
          <div className='grid grid-cols-1  gap-4'>
            <a href="#" className='text-white/80 hover:text-white transition-colors  transform duration-300 block'>
              How we plan learning session?
            </a>
            <a href="#" className='text-white/80 hover:text-white transition-colors  transform duration-300 block'>
              How we plan assessment session?
            </a>
            <a href="#" className='text-white/80 hover:text-white transition-colors  transform duration-300 block'>
              How we manage student life?
            </a>
            <a href="#" className='text-white/80 hover:text-white transition-colors  transform duration-300 block'>
              The effective student
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      
    </footer>
  )
}
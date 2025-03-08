import React from 'react'
import hero from '../assets/Hero.png'
import { ArrowRight } from 'lucide-react'
import '../App.css';
export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] min-h-screen w-full px-8 py-6 relative overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <h1 className='text-[42px] text-center text-white font-normal tracking-wide relative'>
        STUDY<span className='font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>table</span>
      </h1>
      
      <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-16 gap-12 relative'>
        <div className='flex-1 animate-fade-in-left'>
          <h1 className='text-[56px] font-semibold leading-tight mb-6'>
            <span className='text-white'>Optimize </span>
            <span className='text-gray-400'>Your <br/> Performance For</span><br/>
            <span className='text-white'>JEE, NEET, </span>
            <span className='text-gray-400'>and </span>
            <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Boards</span>
          </h1>
          <p className='text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl'>
            Your personal AI-Tutor for all academic needs. Whether its school exam, boards or competitive exams we plan,
            manage, and help you clear your doubts instantly. For students of class 10th, 11th and 12th (CBSE) and preparing 
            for all medical or engineering entrance exams
          </p>
          <div className='flex flex-col sm:flex-row gap-6'>
            <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'>
              Apply for admission
            </button>
            <button className='group text-white px-8 py-3.5 border border-white/20 rounded-lg hover:border-white/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2'>
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className='flex-1 animate-fade-in-right'>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src={hero} 
              alt="Hero illustration" 
              className='relative w-full h-auto max-w-xl mx-auto hover:scale-105 transition-all duration-500 rounded-2xl'
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
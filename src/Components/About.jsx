import React, { useEffect,useRef } from 'react'
import A1 from '../assets/About1.png'
import A2 from '../assets/About2.png'
import A3 from '../assets/About3.png'
import { ArrowRight } from 'lucide-react'
import '../App.css';

export default function About() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Check class and apply appropriate animation
              if (entry.target.classList.contains('slideInLeft')) {
                entry.target.classList.add('slide-in-left');
              } else if (entry.target.classList.contains('slideInRight')) {
                entry.target.classList.add('slide-in-right');
              }
            }
          });
        }, { threshold: 0.1 });
    
        // Get all elements that need animation
        document.querySelectorAll('.slideInLeft, .slideInRight').forEach((element) => {
          observerRef.current.observe(element);
        });
    
        return () => observerRef.current.disconnect();
      }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
      {/* First Feature Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 slideInLeft opacity-0">
          <h1 className='text-4xl lg:text-[44px] font-bold text-[#2A2A2A] leading-tight'>
            Unlimited Practice Session
          </h1>
          <p className='text-lg lg:text-[22px] text-[#4B4B4B] leading-relaxed'>
            For topics and subjects you go through in your school and coaching every day,
            we create instant practice session specially made for your days need. 
            <span className='font-medium block mt-4 text-[#2A2A2A]'>
              Our innovative AI algorithm crafts batches of 20 questions, each accompanied
              by instant feedback and solutions - it's like having a Home tutor 24X7.
            </span>
          </p>
        </div>
        <img 
          src={A1} 
          alt="Practice Session Illustration"
          className=" shadow-xl relative w-full h-auto max-w-xl mx-auto hover:scale-105 transition-all duration-500 rounded-2xl slideInRight opacity-0"
          loading="lazy"
        />
      </div>

      {/* Second Feature Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 lg:order-2 slideInRight opacity-0">
          <h1 className='text-4xl lg:text-[44px] font-bold text-[#2A2A2A] leading-tight'>
            Personalized Assessment
          </h1>
          <p className='text-lg lg:text-[22px] text-[#4B4B4B] leading-relaxed'>
            We measure your learning differently. Not just comparing you among your 
            classmates and peers rather, how much you have learnt and how much have 
            your skills in each subject have grown.
          </p>
        </div>
        <img 
          src={A2} 
          alt="Assessment Illustration"
          className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 duration-500 slideInRight opacity-0 lg:order-1"
          loading="lazy"
        />
      </div>
       {/* Third Feature Section */}
       <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 slideInLeft opacity-0">
          <h1 className='text-4xl lg:text-[44px] font-bold text-[#2A2A2A] leading-tight'>
            Managing Academic Life
          </h1>
          <p className='text-lg lg:text-[22px] text-[#4B4B4B] leading-relaxed'>
            There is more to study than just practicing and taking tests. To meet exam 
            requirements, we help you with careful revision planning, study schedule 
            management, and understanding your learning patterns. We handle everything 
            from school tests to scholarship exams, so you can focus purely on learning.
          </p>
        </div>
        <img 
          src={A3} 
          alt="Academic Management Illustration"
          className="w-full h-auto rounded-2xl hover:scale-105 duration-500 shadow-xl slideInRight opacity-0"
          loading="lazy"
        />
      </div>

      {/* Story Section */}
      <div className='bg-[#2A2A2A] rounded-2xl p-8 lg:p-12'>
        <h1 className='text-white text-3xl lg:text-[40px] font-semibold mb-6'>
          How we come to this?
        </h1>
        <p className='text-gray-200 text-lg lg:text-[22px] leading-relaxed mb-8'>
          We observed and researched for three years in a variety of student. Where 
          the best needs more attention to do better and the student struggling needs
          more attention to improve their own abilities.
        </p>
         <button className='group text-white px-8 py-3.5 border border-white/20 rounded-lg hover:border-white/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2'>
            Read the full Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Call to Action Section */}
      <div className="text-center space-y-8">
        <h1 className='text-5xl lg:text-[68px] font-serif font-bold text-[#2A2A2A]'>
          Crafted for your academic needs
        </h1>
        <button className='bg-[#2A2A2A] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black transition-colors duration-300'>
          Get your Entry
        </button>
      </div>
    </div>
  )
}
import React from 'react'
import profileImage from '../images/profile.jpg';
const Hero = () => {
  return (
    <>
       <section id="home" class="bg-indigo-100 py-16">
        <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
            <div class="md:w-1/2">
                <h2 class="text-4xl font-bold text-indigo-700 mb-4">Hello, I'm Shreeshant Ghimire</h2>
                <p class="text-lg mb-6 text-gray-700">MERN Stack Developer with expertise in creating dynamic web applications and user-friendly designs.</p>
                <a href="#contact" class="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">Contact Me</a>
            </div>
            <div class="md:w-1/3 mb-8 md:mb-0">
                <img src={profileImage} alt="Shreeshant Ghimire" class="w-64 h-64 rounded-full shadow-lg object-cover"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero

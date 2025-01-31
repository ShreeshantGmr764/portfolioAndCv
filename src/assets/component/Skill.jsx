import React from 'react'

const Skill = () => {
  return (
    <>
    <section id="skills" class="bg-indigo-50 py-16">
        <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-indigo-700 mb-6 text-center">Skills</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
                    <h4 class="text-xl font-semibold text-indigo-600 mb-2">MERN Stack</h4>
                    <p class="text-gray-700">MongoDB, Express.js, React.js, Node.js</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
                    <h4 class="text-xl font-semibold text-indigo-600 mb-2">Front-end Development</h4>
                    <p class="text-gray-700">HTML, CSS, React, Tailwind CSS</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
                    <h4 class="text-xl font-semibold text-indigo-600 mb-2">Teamwork</h4>
                    <p class="text-gray-700">Collaboration & Communication</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
                    <h4 class="text-xl font-semibold text-indigo-600 mb-2">Customer Service</h4>
                    <p class="text-gray-700">Friendly & Positive Attitude</p>
                </div>
            </div>
        </div>
    </section>

   
 
      
    </>
  )
}

export default Skill

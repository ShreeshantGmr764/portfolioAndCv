import React from 'react'

const Education = () => {
  return (
    <>
       <section id="education" class="bg-white py-16">
        <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-indigo-700 mb-6 text-center">Education & Training</h3>
            <div class="space-y-8">
                <div class="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h4 class="text-2xl font-semibold text-indigo-600">High School Diploma</h4>
                    <p class="text-gray-700">National School of Sciences, Lainchaur, Kathmandu - August 2024 (GPA: 3.34)</p>
                </div>
                <div class="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h4 class="text-2xl font-semibold text-indigo-600">MERN Stack Development Training</h4>
                    <p class="text-gray-700">Mindrisers Institute of Technology, 2024</p>
                    <ul class="list-disc ml-6 text-gray-700">
                        <li>Developed dynamic web projects using React.js and Tailwind CSS.</li>
                        <li>Focused on responsive design and user interaction optimization.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Education

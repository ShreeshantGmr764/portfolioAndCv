import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <section id="contact" class="bg-indigo-50 py-16">
        <div class="container mx-auto px-4 text-center">
            <h3 class="text-3xl font-bold text-indigo-700 mb-6">Contact Me</h3>
            <p class="text-lg text-gray-700 mb-6">Feel free to reach out if you'd like to collaborate or have any questions!</p>
            <div class="space-y-4">
                <p><strong>Phone:</strong>(+977)9840001970</p>
                <p><strong>Email:</strong> <a href="mailto:ghimiresrishant764@gmail.com" class="text-indigo-600 hover:underline">ghimiresrishant764@gmail.com</a></p>
                

            </div>
            <div> <Link to="https://1drv.ms/w/c/2dfab8f25294702f/Ef_trr4apXBHs-Mi0T6S_t8BsVo2fKcAhigOwHK-5Ybc4g?e=yXm8b5"> Download CV </Link></div>
        </div>
    </section>
    </>
  )
}

export default Contact

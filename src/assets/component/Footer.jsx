import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram ,FaGithub} from "react-icons/fa";
import { CiFacebook,CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <footer class="bg-white py-6 text-center">
        <p class="text-gray-600">&copy; 2024 Shreeshant Ghimire. All rights reserved.</p>
        <div class="mt-4 flex justify-center text-3xl">
            <Link to="https://www.linkedin.com/in/shreeshant-gmr-501468288/" class="text-indigo-600 hover:underline mx-2"><CiLinkedin /></Link>
            <Link to="https://github.com/ShreeshantGmr764" class="text-indigo-600 hover:underline mx-2"><FaGithub /></Link>
            <Link to="https://www.instagram.com/g_srishant764/"  class="text-indigo-600 hover:underline mx-2"><FaInstagram /></Link>
            <Link to="https://www.facebook.com/shreeshant.ghimire"  class="text-indigo-600 hover:underline mx-2"><CiFacebook /></Link>
        </div>
    
    </footer>
    </>
  )
}

export default Footer

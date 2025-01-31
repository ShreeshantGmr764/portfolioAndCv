import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section id="projects" class="bg-indigo-50 py-16 mb-16 shadow-md">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold text-indigo-700 mb-6">My Projects</h3>
          <p class="text-lg text-gray-700 mb-6">
            Here are some of the projects I've worked on:
          </p>
          <div class="space-y-4">
          <div>
              <h4 class="text-xl font-semibold">Tournament Hub Nepal</h4>
              <p class="text-gray-600">
                Tournament Hub Nepal is a platform designed to bring gamers
                together for competitive tournaments. Built with a focus on
                seamless user experience and robust functionality, this project
                showcases my expertise in full-stack development. <br />
                🔹 Features: <br />
                ✔️ Tournament creation & management <br />
                ✔️ Player registration & leaderboards <br />
                ✔️ Real-time updates for matches <br />
                ✔️ Secure authentication & user-friendly interface This project
                reflects my passion for gaming and web development, combining
                dynamic UI, efficient backend logic, and real-time interactions
                to create an engaging experience for esports enthusiasts in
                Nepal. 🚀.
              </p>
              <Link
                to="https://tournamenthubnepal.vercel.app/"
                class="text-indigo-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            <div>
              <h4 class="text-xl font-semibold">
                Js-Bin By Shreeshant Ghimire
              </h4>
              <p class="text-gray-600">
                The website boasts a responsive design for optimal viewing on
                all devices and showcases a portfolio of projects with detailed
                descriptions and demo links. An integrated contact form
                facilitates easy communication with potential clients. Regular
                updates ensure fresh content that reflects my growth in web
                development.
              </p>
              <Link
                to="https://intern-mindrisers.vercel.app/"
                class="text-indigo-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            <div>
              <h4 class="text-xl font-semibold">Portfolio</h4>
              <p class="text-gray-600">
                This portfolio website is a clone designed for learning
                purposes, featuring a responsive layout for optimal viewing on
                all devices. It showcases various projects with detailed
                descriptions and demo links, highlighting my web development
                skills. An integrated contact form facilitates easy
                communication for potential collaborations or inquiries.
              </p>
              <Link
                to="https://portfolio-three-roan-24.vercel.app/"
                class="text-indigo-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            <div>
              <h4 class="text-xl font-semibold">Coffee Clone</h4>
              <p class="text-gray-600">
                This coffee clone website is a learning project that features a
                responsive design for a seamless user experience across all
                devices. It showcases a menu of coffee items with detailed
                descriptions and images, emphasizing my web development skills.
                An integrated contact form allows visitors to reach out easily
                for inquiries or feedback.
              </p>
              <Link
                to="https://coffeeclone.vercel.app/"
                class="text-indigo-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

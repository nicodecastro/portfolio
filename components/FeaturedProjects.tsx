import userData from '@/constants/data'
import Link from 'next/link'
import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'

const FeaturedProjects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <header className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="font-bold text-5xl text-center mb-12 lg:text-6xl text-black dark:text-white">
            Featured Projects
          </h2>
          <Link href="https://github.com/nicodecastro?tab=repositories" target="_blank" className="mb-16 flex flex-row items-center space-x-4 font-semibold rounded-md bg-white shadow-lg text-xl px-8 py-4 hover:text-gray-600 dark:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
            <p>
              View All
            </p>
          </Link>
        </header>
        <div>
          <ul>
              {
                userData.projects.map((project, index) => (
                  <li className="mb-12" key={index}>
                    <FeaturedProjectCard props={project}/>
                  </li>
                ))
              }
          </ul>
        </div>
    </section>
  )
}

export default FeaturedProjects
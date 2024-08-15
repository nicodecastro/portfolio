import userData from '@/constants/data'
import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'

const FeaturedProjects = () => {
  return (
    <section id="projects" className="scroll-mt-8 mx-auto max-w-6xl px-6 md:px-12 lg:px-20 mb-16 md:mb-20 pb-4">
        <header className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="font-bold text-5xl text-center mb-12 lg:text-6xl text-black dark:text-white">
            Featured Projects
          </h2>
          <a href="https://github.com/nicodecastro?tab=repositories" target="_blank" className="mb-16 flex flex-row items-center space-x-2 font-semibold rounded-md bg-white dark:bg-[#1E1E1E] shadow-lg text-xl px-8 py-4 hover:text-gray-600 dark:hover:text-gray-200">
            <p>
              View All
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github h-5 w-5" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
        </header>
        <div className="mt-4">
          <ul>
              {
                userData.projects.map((project, index) => (
                  <li className="mb-14" key={index}>
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
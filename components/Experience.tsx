import userData from '@/constants/data'
import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-8 mx-auto max-w-6xl px-6 md:px-12 lg:px-20 mb-20 md:mb-32">
        <h2 className="font-bold text-5xl lg:text-6xl text-black dark:text-white text-center mb-12">
            Experience
        </h2>
        <ol>
          {
            userData.experience.map((ele, i) => (
              <li className="mb-12" key={i}>
                <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-4">
                  <header className="mb-2 mt-1 text-xs font-semibold tracking-wide flex-shrink-0">
                    {ele.year}
                  </header>
                  <div>
                    <h3>
                      <div className="font-semibold">{ele.title}</div>
                      <div className="text-gray-400 text-sm">{ele.company}</div>
                    </h3>
                    <p className="text-sm mt-2 dark:text-gray-200">
                      {ele.desc}
                    </p>
                    <ul>
                      {/* skills */}
                    </ul>
                  </div>
                </div>
              </li>
            ))
          }
        </ol>
    </section>
  )
}

export default Experience
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
      <h2 className="text-black dark:text-gray-50 font-semibold">
        <span className="text-2xl sm:text-5xl">Let's connect and</span><br />
        <span className="text-2xl sm:text-5xl">explore opportunities in tech</span>
      </h2>
      <p className="text-black dark:text-gray-200 mt-2">
        Feel free to send me an <a href="mailto:jtdecastro@up.edu.ph" className="font-bold border-b-2 text-gray-800 border-gray-800 dark:text-gray-300">email</a> @ jtdecastro@up.edu.ph.
      </p>
    </section>
  )
}

export default CallToAction
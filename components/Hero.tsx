import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="mx-auto mb-16 md:mb-24 lg:mb-36">
        <h1 className="text-center md:mt-0 font-bold text-3xl md:text-4xl lg:text-5xl">
            Learning from Data< br/> Innovating with AI
        </h1>
        <div className="flex flex-col md:flex-row mt-12 md:mt-20 lg:mt-24">
            <div className="md:px-8">
                <h1 className="font-bold text-xl md:text-3xl text-black dark:text-white">
                    Hello! I'm Nico.
                </h1>
                <p className="mt-3 dark:text-gray-200">
                    I am currently pursuing a degree in <span className="font-semibold">computer science</span> at the <span className="font-semibold">University of the Philippines Los Baños</span>. Having keen interests in <span className="font-semibold">AI and data science</span>, I aim to specialize in these fields. I have a passion for the continuous pursuit of knowledge and growth and consider it as my <a href="https://bigthink.com/thinking/camus-fruitful-revolt/" target="__blank" className="font-semibold underline hover:text-gray-700">embrace of the absurd</a>. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero
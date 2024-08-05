"use client"

import '../styles/globals.css'
import { useState } from "react";

const Navbar = () => {

  const [isClick, setIsClicked] = useState(false);

  function toggleNavbar(): void {
    setIsClicked(!isClick);
  }

  const links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 md:py-20 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="font-semibold text-xl">
                <h1>
                  Nico De Castro
                </h1>
                <p className="text-base font-light text-gray-500">
                  Computer Science Student
                </p>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {links.map((el) => (
                <a href={el.link} className="hover:bg-black hover:text-white rounded-lg p-2">
                  {el.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" onClick={toggleNavbar}>
              {isClick ? (
                <svg className="h-6 w-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='md:hidden'>
          <div className='px-2 space-y-1 sm:px-3'>
            {links.map((el) => (
                  <a href={el.link} className="block hover:bg-black hover:text-white rounded-lg p-2">
                    {el.name}
                  </a>
                ))}
          </div>
        </div>
      )}
    </nav>
  )
  }
  
  export default Navbar;


  //  About
  // Experience
  // Projects
  // Contact
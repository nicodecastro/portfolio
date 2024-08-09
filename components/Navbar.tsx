"use client"

import userData from '@/constants/data';
import '../styles/globals.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isClick, setIsClicked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function toggleNavbar(): void {
    setIsClicked(!isClick);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-20 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-semibold text-xl dark:text-gray-100">
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {userData.designation}
              </p>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {links.map((el) => (
                <Link href={el.link} key={el.name} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 p-2">
                  {el.name}
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-row'>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-100" onClick={toggleNavbar}>
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list h-6 w-6" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='md:hidden'>
          <div className='absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%] p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-[#1E1E1E] divide-y dark:divide-gray-800'>
            {links.map((el) => (
                  <Link href={el.link} key={el.name} onClick={toggleNavbar} className="relative px-1 py-4 text-sm text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200">
                    {el.name}
                  </Link>
                ))}
          </div>
        </div>
      )}
    </nav>
  )
  }
  
export default Navbar;
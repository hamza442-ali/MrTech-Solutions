import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

import logo from './logo.png'


export const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <div className="flex">
                <img
                  src={logo}
                  alt="logo"
                
                  className=" dark:hidden w-12 h-10"
                />
              <h1 class="text-3xl">MrTech</h1>

              
              </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
              
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
          
                  <ul className="block lg:flex lg:space-x-12">

                      <Link
                          href=""    
                          className="block rounded font-semibold  text-dark hover:text-custom-blue dark:text-white mt-3 text-xl">
                          Home
                      </Link>
                      <Link
                          href=""    
                          className="block rounded font-semibold  text-dark hover:text-custom-blue dark:text-white mt-3 text-xl">
                          Services
                      </Link>
                      <Link
                          href=""    
                          className="block rounded  font-semibold text-dark hover:text-custom-blue dark:text-white mt-3 text-xl">
                          About
                      </Link>
                      <Link
                          href=""    
                          className="block rounded  font-semibold text-dark hover:text-custom-blue dark:text-white mt-3 text-xl">
                          Contact
                      </Link>
                    
                  </ul>

                    
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

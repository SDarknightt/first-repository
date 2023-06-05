import React from 'react';

const Header = () => {
    return (
      <header>
      <nav className="bg-green-700 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div
            className="hidden justify-start items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center">
              <li>
                <a
                  href="https://github.com/SDarknightt"
                  className="block py-2 pr-4 pl-3 text-white-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black"
                  aria-current="page"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samuel-dias-23a960266/"
                  className="block py-2 pr-4 pl-3 text-white-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    );
  }

export default Header;

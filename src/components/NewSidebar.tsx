import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
const NewSidebar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
          <nav className="relative flex flex-wrap items-center justify-between px-2 pt-3 bg-white mb-3 text-base font-medium tracking-wider">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
               <a href="/"><img className="w-20 h-20 object-contain rounded-full border-2 border-gari" src={process.env.PUBLIC_URL + '/assets/gari-logo.png'} alt="logo"/></a> 
                 <span className="font-medium text-xl tracking-tight"></span>
             </div>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                 <MenuIcon className="h-6 w-6 text-gari" aria-hidden="true" />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >


                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-md none font-semi-bold leading-snug text-gari hover:opacity-75"
                      to="/"
                    >
                      <i className="fab fa-facebook-square font-semibold text-lg leading-lg text-gari opacity-75"></i><span className="ml-2">Home</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-md none font-semi-bold leading-snug text-gari hover:opacity-75"
                      to="/about"
                    >
                      <i className="fab fa-facebook-square font-semibold text-lg leading-lg text-gari opacity-75"></i><span className="ml-2">About</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-md none font-semi-bold leading-snug text-gari hover:opacity-75"
                      to="/terms-of-service"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-gari opacity-75"></i><span className="ml-2">Terms Of Service</span>
                    </Link>
                  </li>

              
                  


                </ul>
              </div>
            </div>
          </nav>
        </>
      );
}

export default NewSidebar;




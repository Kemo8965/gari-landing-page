import React from 'react'
import {Link} from 'react-router-dom'

const NewNavbar = () => {
    return (
        <div className="bg-none flex ">
           
            <nav className="flex h-20 items-center justify-between flex-wrap bg-none p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
  <img className="w-20 h-20 object-contain rounded-full border-2 border-gray-200" src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"/>
    <span className="font-semibold text-xl tracking-tight"></span>
  </div>
  <div className="block lg:hidden">

    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-indigo-400">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

    <div className="text-sm lg:flex-grow text-black pl-16 px-10 mr-16">
   
    </div>
    
  </div>

    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
    <div className="text-sm lg:flex-grow text-black pl-16 px-10 mr-16 ">
      <Link to="/" className="hidden mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-500 mr-4">
        Home
      </Link>
      <Link to="/About" className="hidden mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-500 mr-4">
        About
      </Link>
      <Link to="/Contact" className="hidden mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-500">
        Contact
      </Link>
    </div>
    
  </div>
</nav>
        </div>
    )
}

export default NewNavbar;



/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CTA = () => {
    return (
        <div className="bg-white ">
        <div className="max-w-7xl mx-auto py-12 pl-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-xl ml-12 pr-5 font-medium text-gray-900 sm:text-3xl tracking-wide">
            <span className="block">Ready to get insured in minutes?</span>
            <span className="block text-gari">Download the app today.</span>
          </h2>
          <div className="mt-8 flex  lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            <a
                        href="#"
                       // className="md:py-5 md:text-lg md:px-8"
                       // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        <img
                          
                          className="h-10 w-full  sm:h-10 md:h-16 lg:w-52 "
                          src={process.env.PUBLIC_URL + '/assets/google-2.svg'}
                          alt=""
                         /> 
                      </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
            <a
                        href="#"
                      //  className="md:py-5 md:text-lg md:px-8"
                       // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        <img
                          
                          className="h-10 w-full  sm:h-10 md:h-16 lg:w-52 "
                          src={process.env.PUBLIC_URL + '/assets/app-store.svg'}
                          alt=""
                         /> 
                      </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CTA;

  
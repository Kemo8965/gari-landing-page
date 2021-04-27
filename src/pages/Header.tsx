/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import TermsOfService from './TermsOfService'
import NewFeatures from './NewFeatures';
import CTA from '../components/CTA';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Steps from '../components/Steps';
import Section from '../components/Section'
import Collapse from '../components/Collapse';
import PolicyFAQs from '../components/FAQs/PolicyFAQs';
import ClaimsFAQs from '../components/FAQs/ClaimsFAQs';
import GariFAQs from '../components/FAQs/GariFAQs';

const navigation = [

  { name: 'Terms Of Service', href:'/TermsOfService' },
  { name: 'Contact', href: '/Contact' },
 
]


export default function Header() {
  
  return (
    <div>

    
    <Popover className="relative bg-white overflow-hidden ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto ">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a className="pt-10" href="#">
                        <span className="sr-only">Workflow</span>
                        <img className="w-20  h-20 object-contain rounded-full border-2 border-gari" src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"/>
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gari hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gari hover:text-gray-900">
                        {item.name}
                        
                      </a>
                    ))}
                   

                    
      
       
      
     
                    
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"
                          
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gari hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}

                      
                    </div>
                    <button
                
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
                
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:pb-0 pb-8 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Get Insured in minutes with</span>{' '}
                    <span className="block text-gariLight xl:inline">gari</span>
                  </h1>
                  <p className="mt-3 lg:pb-0 pb-12 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Simple, affordable policies from all the top Insurance Companies.
                  </p>
                  <div className="mt-5 sm:mt-8 flex  sm:flex sm:justify-center lg:justify-start">
                    
                      <a
                        href="#"
                        className="md:py-4 md:text-lg md:px-10"
                       // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        <img
                          
                          className="h-10 w-full  sm:h-10 md:h-12 lg:w-40 lg:h-38 "
                          src={process.env.PUBLIC_URL + '/assets/google-2.svg'}
                          alt=""
                         /> 
                      </a>

                      <a
                        href="#"
                        className="md:py-4 md:text-lg md:px-10"
                       // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        <img
                          
                          className="h-10 w-full  sm:h-10 md:h-12 lg:w-40 lg:h-38"
                          src={process.env.PUBLIC_URL + '/assets/app-store.svg'}
                          alt=""
                         /> 
                      </a>
                    
                    
                  </div>
                 

                    
                </div>
              </main>
            </div>
          </div>
          <div className=" lg:visible invisible lg:flex hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-50 lg:mr-28 w-full object-cover h-6 md:h-96 lg:w-90 lg:h-full "
              src={process.env.PUBLIC_URL + '/assets/hero9.jpg'}
              alt=""
            />
          </div>
        </>
      )}
    </Popover>
     <div className="pt-24">
       <Steps/>
     <NewFeatures/>
     <Section/>
     </div>
    <PolicyFAQs/>
    <ClaimsFAQs/>
    <GariFAQs/>
    <CTA/>
  
    </div>
  )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
    BrowserRouter as Router, Link } from "react-router-dom";

    import {MenuIcon} from '@heroicons/react/outline';

const Footer = () => {
    return (

        <Router>

<div>
        <div className="bg-gari h-auto  pl-20 pt-10  gap-x-8 gap-y-12 md:gap-y-4 pt-15 w-full grid grid-cols-1 text-white pb-8   md:grid-cols-5 sm:grid-cols-1  xs:grid-cols-1">
           
                      <img
                          className="h-16 w-20 ml-6  rounded-full"
                          src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"

                        />
           
            <div className="gap-y-10"> 
                <ul>
                    <h4 className="text-green-900 font-bold text-xl" >Contact Information</h4>
                    <li><p>Customer Care</p></li>
                    <li> <a href="tel:+260-974-928-965">0974928965</a></li>
                    
                    
                </ul>
            </div>
           
            <div className="gap-y-10">
                <ul>
                <h4 className="text-green-900 font-bold text-xl">Legal</h4>
                <Router>
                <Link to="/TermsOfService">Terms Of Service</Link>
                </Router>
               
            
                </ul>
            </div>

            <div className="gap-y-4 ">

            <h4 className="text-green-900 font-bold text-xl pb-2 mr-36 sm:ml-20">Social</h4>
                <ul className="md:inline-flex">
                
                    
                    <li> <a
                        href="#"
                        className="pb-5">
                        <img
                          
                          className="h-10 w-10 pb-5 lg:pb-8 lg:h-16 lg:w-16  rounded-full"
                          src={process.env.PUBLIC_URL + '/assets/facebook.svg'}
                          alt=""
                         /> 
                      </a>
                      </li>

                      <li > <a
                        href="#"
                        className="pb-5">
                        <img
                          
                          className="h-10 w-10 pb-5 lg:pb-8 lg:h-16 lg:w-16   rounded-full"
                          src={process.env.PUBLIC_URL + '/assets/linkedin.svg'}
                          alt=""
                         /> 
                      </a>
                      </li>

                      <li> <a
                        href="#"
                        className="pb-5">
                        <img
                          
                          className=" h-10 w-10 pb-5 lg:pb-8 lg:h-16 lg:w-16  rounded-full"
                          src={process.env.PUBLIC_URL + '/assets/instagram.svg'}
                          alt=""
                         /> 
                      </a>
                      </li>
                   
                    
                </ul>
            </div>

           

        </div>

        <div  className="bg-gari rounded-bl-full h-auto  pl-20 pt-10  gap-x-8 gap-y-12 md:gap-y-4 pt-15 w-full text-white pb-8   ">
            
            <p className="text-center text-white font-bold text-xl ">gari &copy; {new Date().getFullYear()}</p>
            <br/>
            <p>Powered by <span className="text-green-900"> <a href="https://hobbitontechnologies.co.zm">Hobbiton Technologies</a> </span> </p>
        </div>
        </div>

        </Router>
        
    )
}

export default Footer;

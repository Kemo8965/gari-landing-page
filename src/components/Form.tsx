/* eslint-disable react/style-prop-object */
import React from 'react'
import NewSidebar from './NewSidebar'
import {ChatIcon, UserIcon} from '@heroicons/react/outline'



export default function form(){
    return (

     <div>
       <div className="pb-12">
       <NewSidebar/>
       </div>
       
      
      <div className="mt-10 sm:mt-0 bg-white">
         <h1 className="text-2xl text-black md:hidden">Contact Info</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        
          <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-full lg:h-96 mr-30 "
              src={process.env.PUBLIC_URL + '/assets/contact-us.svg'}
              alt=""
            />
         
        <div className="mt-5 md:mt-0 md:col-span-1 pb-16 ">
       
          <div className="max-w-md w-full lg:flex">
  <div className="h-52 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-image: url{process.env.PUBLIC_URL + '/assets/contact.svg'}'" title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-grey-dark flex items-center text-xl pb-7">
       
        <img className="w-10 h-10 rounded-full mr-4 object-contain" src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="Avatar of Jonathan Reinink"/>
        Contact Information
      </p>
      

    
    <div className="flex ">
      <div className="pr-10 ">
      <div className="text-black font-bold text-md mb-2"> <h2>Customer Care</h2> </div>
      <ul >
      <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-974-928-965">0974928965</a></li>
      <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-964-918-005">0964918005</a></li>
      <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-211-098-723">0211098723</a></li>
      </ul>
      </div>

      <div className="pl-4 text-lg">
      <div className="text-black font-bold mb-2">Email</div>
     
      <p className="text-gari hover:text-green-400"> <a href="mailto:info@gariinsurance.co.zm">info@gari.co.zm.</a></p>
      <div className="text-black font-bold mb-2 "><h2>Address</h2></div>
     
      <p className="text-gari "> Sanlam Building, <br/> Lagos Road, <br/> Rhodes Park, <br/> Lusaka</p>
    </div>

    <div className="pl-4 text-lg">
      
      
    </div>
      </div>
      
     
    </div>
  </div>
  </div>
        </div>
       </div>
    </div>

    </div>
    )
}

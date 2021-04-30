/* eslint-disable react/style-prop-object */
import React from 'react'

// import {ChatIcon, UserIcon} from '@heroicons/react/outline'



export default function form(){
    return (

     <div>
       <div className="lg:pb-8 lg:pt-16 text-gari text-4xl py-10 font-medium lg:pl-40 ">
          <h1>Contact Us</h1>
       </div>

       <section className="text-gray-600 body-font relative text-base font-medium" >
  <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0"  title="map"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.4812958114185!2d28.300822661880996!3d-15.409715608149689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408bc209d9159b%3A0x8b3c51333d6cf025!2sHobbiton%20Technologies%20Limited!5e0!3m2!1sen!2szm!4v1619419847954!5m2!1sen!2szm"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900  text-xs">ADDRESS</h2>
          <p className="mt-1 text-gari">  Sanlam Building, <br/> Lagos Road, <br/> Rhodes Park, <br/> Lusaka</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900  text-xs">EMAIL</h2>
          <p className="text-gari hover:text-green-400"> <a href="mailto:info@gariinsurance.co.zm">info@gari.co.zm.</a></p>
          <h2 className="title-font font-semibold text-gray-900  text-xs mt-4">PHONE</h2>
          <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-974-928-965">0974928965</a></li>
         <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-964-918-005">0964918005</a></li>
          <li className="text-gari hover:text-green-500 pb-4"> <a href="tel:+260-211-098-723">0211098723</a></li>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    
      <p className="leading-relaxed mb-5 text-gray-600">Write to us or click the email or numbers in the bottom left section</p>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-gari border-0 py-2 px-6 focus:outline-none border-gray-700 hover:bg-gariLight hover:text-white rounded text-lg">Send</button>
      <p className="text-xs text-gray-500 mt-3">Email responses are typically within a few hours of receipt.</p>
    </div>
  </div>
</section>
     
        </div>
      
    )
}


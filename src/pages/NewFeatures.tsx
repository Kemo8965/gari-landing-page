/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NewFeatures = () => {
    return (
      <div>

        <div className="text-center text-2xl lg:text-5xl font-bold lg:pb-5 text-gari">
          <h1>Benefits you get with gari</h1>
        </div>
          <section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto">
    <div className="flex text-left text-xl items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30  "
              src={process.env.PUBLIC_URL + '/assets/confirmed.svg'}
              alt=""
            />
      </div>
      <div className="flex-grow sm:text-left text-xl  text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2"> Get insurance from the comfort of your home with the app.</h2>
        <p className="leading-relaxed  text-base">No need to queue up, simply get it with app.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">

        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-xl  text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2">  Get a quote in seconds.</h2>
        <p className="leading-relaxed  text-base">Get to know your price in seconds, answer a few questions and 
             you are good to go! No irrelevant questions, 
             no paper work and no long phone calls!</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
        
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30  "
              src={process.env.PUBLIC_URL + '/assets/get-a-quote.svg'}
              alt=""
            />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30  "
              src={process.env.PUBLIC_URL + '/assets/wallet.svg'}
              alt=""
            />
      </div>
      <div className="flex-grow sm:text-left text-xl  text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2">Save on time and money.</h2>
        <p className="leading-relaxed text-base"> With the ability to purchase insurance and road tax using the app, no need to queue up at offices.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
        
        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b mt-10 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-xl  text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2">  24/7 Customer Support.</h2>
        <p className="leading-relaxed text-base">Our dedicated team works 24/7 to assist customers
         in an emergency by using the latest 
         technologies to deliver fast rescue in real time.</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
        
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30  "
              src={process.env.PUBLIC_URL + '/assets/support.svg'}
              alt=""
            />
      </div>
    </div>
   
  </div>
</section>
      </div>
    )
}

export default NewFeatures



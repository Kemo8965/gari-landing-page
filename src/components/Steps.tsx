import React from 'react'
import { Parallax} from 'react-parallax'

const Steps = () => {
    const img1=`${process.env.PUBLIC_URL + '/assets/steps.jpg'}`
    return (
        <div>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 lg:py-24 mx-auto flex flex-wrap">
  

    <div className="flex flex-wrap w-full">
        
      <div className="text-lg lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
      <h2 className=" pb-20 lg:text-5xl text-3xl pl-5 font-bold text-gari">Get Insured within 10 minutes</h2>
        <div className="flex relative pb-12">
            
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
         

          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gari inline-flex items-center justify-center text-white relative z-10">
           01
          </div>

          
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Download the app</h2>
            <p className="leading-relaxed">Visit the playstore, search for gari insurance and install the app.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gari inline-flex items-center justify-center text-white relative z-10">
           02
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Create an account</h2>
            <p className="leading-relaxed">Sign up for an account with your name, email and phone number.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gari inline-flex items-center justify-center text-white relative z-10">
            03
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Choose your car and insurance type</h2>
            <p className="leading-relaxed">Choose your car type, insurance type and follow the steps.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gari inline-flex items-center justify-center text-white relative z-10">
            04
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Add a payment method</h2>
            <p className="leading-relaxed">Add your payment method, either VISA or Mobile Money</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gari inline-flex items-center justify-center text-white relative z-10">
           05
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Done!</h2>
            <p className="leading-relaxed">You're insured!.</p>
          </div>
        </div>

        
      </div>
      <Parallax className="lg:order-last order-first lg:w-3/5 md:w-1/2 object-cover lg:h-200 object-center rounded-lg md:mt-0 mt-12" bgImage={img1}>
        
        </Parallax>
     
    </div>
   
  </div>
  
</section> 
        </div>
    )
}

export default Steps

import React from 'react'

const NewFeatures = () => {
    return (
      <div>

        <div>
          <h1 className="justify-items-center text-center lg:text-center md:text-center text-4xl sm:text-4xl font-extrabold tracking-tight text-gari">Benefits to enjoy with gari.</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 pl-20 pr-20 sm:mt-14 text-lg">
        
       <div className="sm:order-1 md:order-first sm:pb-24 pb-10">
            <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30  "
              src={process.env.PUBLIC_URL + '/assets/confirmed.svg'}
              alt=""
            />
          </div>
           <div className="sm:order-2 md:order-2 sm:pb-24 ">
          
             <p className="mt-20 pb-3 text-center lg:text-center md:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
             Get road tax from the comfort of your home with the app.
          </p>
             <p className=" md:text-left text-2xl sm:mt-14 pb-24 sm:pb-20 "> 
              No need to queue up, simply get it with app.
            </p> 
             </div> 

           <div className="order-4 md:order-3 sm:pb-24 pb-8">
           
            <p className="mt-20  text-center lg:text-center md:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Get a quote in seconds.
             </p>
             <p className="sm:mt-14 text-2xl mt-2 pb-10 sm:pb-28 "> 
             Get to know your price in seconds, answer a few questions and 
             you are good to go! No irrelevant questions, 
             no paper work and no long phone calls!
            </p> 
           </div>
           <div className="order-3 md:order-4 sm:pb-24" >
            <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30 order-2"
              src={process.env.PUBLIC_URL + '/assets/get-a-quote.svg'}
              alt=""
            />
          </div>

          
          <div className=" order-5 md:order-5 sm:pb-24 " >
            <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30 md:order-first"
              src={process.env.PUBLIC_URL + '/assets/wallet.svg'}
              alt=""
            />
          </div>
           <div className="order-6 md:order-6 sm:pb-24">
          
             <p className="mt-20 text-center lg:text-center md:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Save on time and money.
          </p>
             <p className="sm:mt-14 text-2xl pb-10 sm:pb-24 "> 
              With the ability to purchase insurance and road tax using the app, no need to queue up at offices.
            </p> 
             </div> 

             <div className="order-8 md:order-7 sm:pb-24">
           
            <p className="mt-20 text-center lg:text-center md:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               24/7 Customer Support .
             </p>
             <p className="sm:mt-14 text-2xl pb-10 sm:pb-20 "> 
             Our dedicated team works 24/7 
             to assist customers in an emergency by using the
              latest technologies to deliver fast rescue in real time.
            </p> 
           </div>
           <div className="order-7 md:order-8 sm:pb-24" >
            <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30 md:order-first"
              src={process.env.PUBLIC_URL + '/assets/user-support.svg'}
              alt=""
            />
          </div>

          
          <div className="order-9 md:order-9 sm:pb-24" >
            <img
            className="h-50 w-full object-contain sm:h-60 md:h-80 lg:w-96 lg:h-96 mr-30 md:order-first"
              src={process.env.PUBLIC_URL + '/assets/all-in-1.svg'}
              alt=""
            />
          </div>
           <div className="order-10 md:order-last sm:pb-24">
          
             <p className="mt-20 text-center lg:text-center md:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Your all-in-one solution.
          </p>
             <p className="sm:mt-14 text-2xl "> 
             There’s no need to call or drive to your insurance company and wait in line. 
             From our App you can do everything and so much more including <span className="text-blue-600">buying a policy</span> ,policy renewal, filing claims, adding extensions and 
             generate instant documents such as receipts, wordings, debit note and certifcate .Everything is a click away.
            </p> 
             </div> 

            

      </div>
      </div>
    )
}

export default NewFeatures

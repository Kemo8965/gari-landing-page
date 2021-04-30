import React from 'react';

import { Parallax} from 'react-parallax'

const CTA2 = () => {
  const img1=`${process.env.PUBLIC_URL + '/assets/car.jpg'}`
  return (
    <div className="pb-0">
   <section className=" grid lg:grid-cols-2 grid-cols-1 ">
     
     

      <div className="bg-gari text-center text-white lg:pt-10 lg:text-3xl font-semi-bold h-96 lg:h-60">
        <article className="pb-10  text-left  lg:align-items-left lg:space-y-6  title-font  font-medium title-font mb-2 tracking-wider" >
         Have more questions? Find out more in our FAQs

         
        </article>

        <button className="px-10 bg-white text-gari text-xl font-semibold rounded-lg w-52 h-16"><a href="/FAQs">Learn More</a> </button>
        
        
      </div>

      <div className="">
      <Parallax className="lg:object-cover h-52 object-contain  lg:w-full lg:h-full lg:pb-8" bgImage={img1}>
        
      </Parallax>
      </div>

   </section>
 
  </div>
  );
}

export default CTA2







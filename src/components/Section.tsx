/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Parallax} from 'react-parallax'


function Header() {
  const img1=`${process.env.PUBLIC_URL + '/assets/hero6.jpg'}`
  return (
    <div className="pb-0">
   <section className=" grid lg:grid-cols-2 grid-cols-1 ">
     
      <div className="order-first ">
      <Parallax className="lg:object-cover h-72 object-contain  lg:w-full lg:h-full lg:pb-8" bgImage={img1}>
        
      </Parallax>
      </div>

      <div className="bg-gari text-center text-white lg:pt-60 lg:text-3xl font-semi-bold h-96 lg:h-150">
        <article className="pb-24 p-10 text-left  lg:align-items-left lg:space-y-6  title-font  font-medium title-font mb-2 tracking-wider" >
          "With <span className="text-green-200">gari</span>, I don't have to queue up anywhere for insurance and road tax.
          <br/> I get it all done on the app. Amazing!"

         
        </article>

        <h5 className=" mr-14 lg:ml-10 lg:text-left  font-medium title-font text-xl text-gray-200 mb-2 tracking-wide">~Linda Chibombamilimo</h5>
        <h4 className="leading-relaxed ml-12 lg:ml-14 lg: text-left lg:text-base">Accountant, Ndola</h4>

        
        
      </div>
   </section>
 
  </div>
  );
}

export default Header;






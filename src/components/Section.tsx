/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Parallax} from 'react-parallax'


function Header() {
  const img1=`${process.env.PUBLIC_URL + '/assets/hero6.jpg'}`
  return (
    <div className="pb-0">
   <section className=" grid lg:grid-cols-2 grid-cols-1 ">
     
      <div className="order-first">
      <Parallax className="lg:object-cover h-72 object-contain  lg:w-full lg:h-200 lg:pb-8" bgImage={img1}>
        
      </Parallax>
      </div>

      <div className="bg-gari text-center font-serif text-white lg:pt-60 lg:text-3xl font-semi-bold h-96 lg:h-full">
        <article className="pb-24 p-10 text-left lg:space-y-6  title-font  font-medium title-font mb-2 tracking-wider" >
          "With <span className="text-green-200">gari</span>, I don't have to queue up anywhere for insurance and road tax. I get it all done on the app. Amazing!"

         
        </article>

        <h5 className=" title-font  font-medium title-font text-xl text-gray-200 mb-2 tracking-wider">-Linda Chibombamilimo</h5>
        <h4 className="leading-relaxed lg:text-sm">Accountant, Ndola</h4>

        
        
      </div>
   </section>
 
  </div>
  );
}

export default Header;






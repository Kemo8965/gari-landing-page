import React from 'react'

import NewSidebar from '../components/NewSidebar'
const About = () => {

    return (
        <div>
      <NewSidebar />

      <div className="flex justify-center py-6">
        <div className="prose lg:prose-lg p-16 shadow-2xl">
          <div>
        
         <h2 className="text-gari">Our Story</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-10 ">
       
        

            <article className="lg:pb-10  text-left">
            The Gari brand was born with one bold objective, and that is to change how Car Insurance is delivered to customers.

            Over the years, the insurance industry has offered the same experience, the same services and the same expectation, 
            without changing a single thing. We heard your stories about how you wish your car insurance was better,
            how you would want claim settlement faster, phone calls shorter and 
            the policy details much clearer and transparent, but they let you down every time you needed them the most.
            </article>

            <div className="order-first"> 
                 <img src={process.env.PUBLIC_URL + '/assets/gari-logo.png'} className="lg:object-contain h-72 object-contain  lg:w-full lg:h-80 lg:pb-8" alt=""/>
             </div>
        
        
            </div>

            <div>
        <article >
            <p>
            There is only one explanation to it, it has always worked for them. 
            As they continued to slack around, your needs and expectations kept changing, 
            creating a huge gap that has become almost impossible to fill.

            </p>
       
        <p>
        As Gari, we have managed to get rid of traditional means of selling insurance. 
        We have digitized the entire value chain so you have a seamless and improved experience. 
        </p>
        
        <p>
        All this has been made possible through the Gari car insurance App which uses the latest technologies to provide an easier,
        cheaper, faster and more efficient way of getting your car insurance.
        </p>

       <p>
       We believe, your car insurance should be SMART…Simple, Mobile, Automated, Reliable and Transparent.
        It's time to make that move, choose Gari and Live Smart!
       </p>
        
        </article>
    </div>
        
    </div>
     </div>
     </div>
    
    
        </div>
    )
}

export default About

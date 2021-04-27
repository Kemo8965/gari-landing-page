/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import FAQ1 from './claimsFaqs/FAQ1'
import FAQ2 from './claimsFaqs/FAQ2'
import FAQ3 from './claimsFaqs/FAQ3'
import FAQ4 from './claimsFaqs/FAQ4'




const ClaimsFAQs = () => {
    
    

    return (
       
        <div>
          
<div className="bg-gray-100 py-8">
    <div className="mx-auto max-w-6xl">
        <div className="p-2 bg-gray-100 rounded">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-4 text-sm">
                    <div className="text-3xl">FAQs about <span className="font-medium">Claims</span></div>
                    <div className="my-2">Wondering how claims work with the app ?</div>

                    <div className="text-xs text-gray-600">Dive into our FAQ for more details</div>
                </div>
                <div className="md:w-2/3 ">
                    <div className="p-4">
                        <div className="mb-2">
                            <FAQ1/>
                        </div>
                        <div className="mb-2">
                            <FAQ2/>
                        </div>
                        <div className="toggleable  mb-2">
                           <FAQ3/>
                           
                        </div>
                        <div className="mb-2">
                            <FAQ4/>
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

export default ClaimsFAQs;

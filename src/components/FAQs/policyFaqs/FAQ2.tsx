import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const FAQ2 = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
        <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">Can I get a quote for someone else?
                                
                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800" {...getCollapseProps()}>We believe no one else drives like you do, so our model determines the amount of premium you are going to pay for your car insurance and this is personalized to your personal attributes when you download the App and register. This means you cannot get a price quotation for your friends and family, instead invite them to download the App to enjoy Gari perks like you:)</section> 
                                
                                </div>
                                <div className="px-2 mt-1">
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>


    </div>
)
}

export default FAQ2;

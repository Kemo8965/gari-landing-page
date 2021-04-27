import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const FAQ2 = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
        <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">How do I make a claim?
                                
                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800" {...getCollapseProps()}>You can file your claim at any time of the day or night through the App and
                                      it is easy, fast and efficient. Just answer a few questions and upload the necessary photos and documentation depending on the type of the claim. Once completed,
                                       you will receive a claim number and you can always track the progress of the claim through the App.</section> 
                                
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

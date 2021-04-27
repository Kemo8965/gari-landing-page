import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
            <div className="mb-2">
                            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">How do I get a quote through the Gari App?

                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800" {...getCollapseProps()}>Once you download the App and sign up successfully, you can click on ‘Check out our prices’ on the homepage, answer a few questions and you can immediately check all the plans for your car insurance in one single view..</section> 
                                      </div>
                                <div className="px-2 mt-1">
                                    <div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>


    </div>
)
}

export default Collapse;

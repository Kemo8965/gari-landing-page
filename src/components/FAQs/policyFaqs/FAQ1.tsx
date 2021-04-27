import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
            <div className="mb-2">
                            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">How many types of covers are there under Motor private insurance?

                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800" {...getCollapseProps()}>As Gari, we currently offer two plans under our motor private insurance solution. This comprises of a superior Comprehensive that covers all benefits under a motor private cover and the standard legally required Third party only (TPO) cover.</section> 
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

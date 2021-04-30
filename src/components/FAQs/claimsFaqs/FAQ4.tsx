import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const FAQ4 = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>

        <div className="mb-2  title-font  font-medium title-font text-xl ">
            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">How long do you take to settle a claim?
                                
                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800 py-3 mt-3 text-md" {...getCollapseProps()}>One of our key value propositions to you, is faster turnaround times for claims settlement. We promise 7 days to settle minor claims and 2 weeks for major claims. However, for cases where spare parts importation might take longer, we will communicate in advance on new timelines. Third party claims might also take longer to settle due to dependencies on legal procedures.</section> 
                                
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

export default FAQ4

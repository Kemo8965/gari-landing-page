import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
            <div className="mb-2  title-font  font-medium title-font text-xl tracking-wider">
                            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">What documentation is needed when filing a claim?

                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800 leading-relaxed" {...getCollapseProps()}>There are a couple of important information we will need when filing a claim but the most important, is photos. If possible, take as many photos as possible of the accident scene for uploading later. Additionally, you will be required to upload a copy of police abstract, names and contacts of passengers, names and contacts
                                       of other motorists involved in the accident and names and contacts of witnesses at the time of the accident.</section> 
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

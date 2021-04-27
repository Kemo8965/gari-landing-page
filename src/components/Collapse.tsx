import React, { useState } from 'react';
import useCollapse from 'react-collapsed';


const Collapse = () => {
    const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
        
            <div className="mb-2">
                            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto">How to install it with windows server ?
                                <button className="bg-gray-800 ml-2 px-4 text-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section {...getCollapseProps()}>Kondwani 🙈</section> 
                                      </div>
                                <div className="px-2 mt-1">
                                    <div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>


      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? '-' : 'What is Your name?'}
      </button>
      <section {...getCollapseProps()}>Kondwani 🙈</section>
    </div>
)
}

export default Collapse;

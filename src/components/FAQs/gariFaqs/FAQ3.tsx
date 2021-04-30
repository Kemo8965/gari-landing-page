import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const FAQ3 = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>

<div className="mb-2  title-font  font-medium title-font text-xl ">
             <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">I forgot my login details, what should I do?

                                
                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-800 py-3 mt-3 text-md" {...getCollapseProps()}>Input your registered email address and click “forgot password”. We will then reset your password and after, you can change it to enable you log in back to the App.</section> 
                                
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

export default FAQ3

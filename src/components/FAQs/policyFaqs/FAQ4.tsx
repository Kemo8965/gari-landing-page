import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const FAQ4 = () => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div>
            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                <div className="flex-auto text-gari">Can I transfer the insurance cover when I sell my car?
                                
                                <button className="bg-gari lg:float-right float-right ml-2 px-4 text-white rounded-lg lg:border-gray-200 border-white"
                                        {...getToggleProps({
                                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                        })}
                                    >
                                        {isExpanded ? '-' : '+'}
                                    </button>
      
                                      <section className="text-gray-600 py-3 mt-3 text-md" {...getCollapseProps()}>Unfortunately, this won't be possible as insurance policies are not transferable. You will need to cancel the policy through the App under the policy page and return the insurance certificate back to us. Upon returning the certificate, we will refund a portion of your premium if you have not made any claim at the time of cancellation and if your policy has not lasted more than 6 months.</section> 
                                
                                </div>
                                <div className="px-2 mt-1">
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default FAQ4

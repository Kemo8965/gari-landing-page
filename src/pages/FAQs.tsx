import React from 'react'
import ClaimsFAQs from '../components/FAQs/ClaimsFAQs'
import GariFAQs from '../components/FAQs/GariFAQs'
import PolicyFAQs from '../components/FAQs/PolicyFAQs'
import NewSidebar from '../components/NewSidebar'

const FAQs = () => {
    return (
        <div>

            <NewSidebar/>
            <div>
            <PolicyFAQs/>
           <ClaimsFAQs/>
           <GariFAQs/> 
            </div>
           
        </div>
    )
}

export default FAQs

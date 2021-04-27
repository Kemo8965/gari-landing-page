import React from 'react'

const About = () => {
    return (
        <div>
            <div className="w-3/4 text-center justify-items-left ml-20 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        
        <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-gari" src={process.env.PUBLIC_URL + '/assets/gari.jpeg'} alt="logo"/>
        
         </div>
    
        
    
        <div>
       
        <h2 className="text-gari text-3xl font-semibold">About Us</h2>
        
            </div>
        
    </div>
    
        </div>
    )
}

export default About

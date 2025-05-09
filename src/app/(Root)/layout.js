import "./../globals.css"
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='english'>
            <Navbar/>
            <div className="">
                
             {children}   
            </div>
            
        </div>
    )
}

export default layout
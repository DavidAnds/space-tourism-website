import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div className='home'
        style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/home/background-home-desktop.jpg'})`,
          }}>
            <Navbar />
            
        </div>
    )
}

import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <Navbar home={true}/>
      <div className='home-container'>
        <div className='home-group-text'>
          <h2 className='heading-5'>So you want to travel to</h2>
          <h1 className='heading-1'> Space</h1>
          <p className='text'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className='home-main-btn'>Explore</button>
      </div>
    </div>
  );
}

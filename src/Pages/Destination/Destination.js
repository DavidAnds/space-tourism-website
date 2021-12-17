import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Destination.css";
import allData from "../../Data/data.json";
import Moon from "./destination/image-moon.png";
import Mars from "./destination/image-mars.png";
import Titan from "./destination/image-titan.png";
import Europa from "./destination/image-europa.png";

export default function Destination() {
  const [indexData, setIndexData] = useState(0);
  const data = allData.destinations;
  console.log();
  return (
    <div className='destination'>
      <Navbar destination={true} />
      <div className='destination-container container'>
        <h1 className='heading-4'>
          <span>01</span> Pick your destination
        </h1>
        <div className='destination-item'>
          <div className='destination-img-bloc'>
            {indexData === 0 && <img src={Moon} alt='Moon' />}
            {indexData === 1 && <img src={Mars} alt='Mars' />}
            {indexData === 2 && <img src={Titan} alt='Titan' />}
            {indexData === 3 && <img src={Europa} alt='Europa' />}
          </div>
          <div className='destination-text-bloc'>
            <nav className='destination-nav'>
              <ul>
                {data.map((item, index) => {
                  return (
                    <li>
                      <button
                        onClick={() => {
                            setIndexData(index)
                        }}
                        className={
                          indexData === index
                            ? "nav-text destination-tab destination-tab--active"
                            : "nav-text destination-tab"
                        }
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}

              </ul>
            </nav>
            <h2 className='heading-2'>{data[indexData].name}</h2>

            <p className='text text-blue'>{data[indexData].description}</p>

            <div className='destination-numbers'>
              <div className='destination-distance'>
                <h3 className='subheading-2 text-blue'>Avg. distance</h3>
                <p className='subheading-1'>{data[indexData].distance}</p>
              </div>
              <div className='destination-time'>
                <h3 className='subheading-2 text-blue'>est. travel time</h3>
                <p className='subheading-1'>{data[indexData].travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

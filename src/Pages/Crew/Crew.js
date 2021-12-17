import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import allData from "../../Data/data.json";
import crew1 from './crew/image-douglas-hurley.png'
import crew2 from './crew/image-mark-shuttleworth.png'
import crew3 from './crew/image-victor-glover.png'
import crew4 from './crew/image-anousheh-ansari.png'
import "./Crew.css";

export default function Crew() {
  const dataCrew = allData.crew;
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <div className='crew'>
      <Navbar crew={true} />
      <div className='crew-container container'>
        <h1 className='heading-4'>
          <span>02</span> Meet your crew
        </h1>
        <div className='crew-txt-bloc'>
          <h3 className='heading-4 text-gray'>{dataCrew[dataIndex].role}</h3>
          <h2 className='heading-3'>{dataCrew[dataIndex].name}</h2>
          <p className='text text-blue'>{dataCrew[dataIndex].bio}</p>
          <div className='crew-dots'>
            {dataCrew.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setDataIndex(index);
                  }}
                  className={dataIndex === index ? 'crew-dot crew-dot--active' : 'crew-dot'}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="crew-img-bloc">
        {dataIndex === 0 && <img src={crew1} alt='picture of douglas hurley' />}
            {dataIndex === 1 && <img src={crew2} className='small-img' alt='picture of mark shuttleworth' />}
            {dataIndex === 2 && <img src={crew3} alt='picture of victor glover' />}
            {dataIndex === 3 && <img src={crew4} alt='picture of ANOUSHEH ANSARI' />}
        </div>
      </div>
    </div>
  );
}

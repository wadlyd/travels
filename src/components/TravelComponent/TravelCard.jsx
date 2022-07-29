import React from 'react';
import './TravelCard.css';

const TravelCard = () => {
  return (
    <div className='container'>
       
       <div className='containerCard'>
        <a href="/" target='image'>
            <p>AÑO 2020</p>
        </a>
       </div>

       <div className='containerCard'>
        <a href="/" target='image'>
            <p>AÑO 2021</p>
        </a>
       </div>

       <div className='containerCard'>
        <a href="/" target='image'>
            <p>AÑO 2022</p>
        </a>
       </div>
    </div>
  )
}

export default TravelCard

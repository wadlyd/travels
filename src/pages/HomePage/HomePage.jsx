import React from 'react';
import './HomePage.css';
import Footer from '../../components/FooterComponent/Footer'
import Header from '../../components/HeaderComonent/Header'
import TravelCard from '../../components/TravelComponent/TravelCard'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Header />
        <TravelCard />
        <Footer />
    </div>
  )
}

export default HomePage
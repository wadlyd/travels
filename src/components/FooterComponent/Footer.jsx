import React from 'react';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='ronda'>
          <a href='/'>
            <TwitterIcon fontSize="large" style={{color:"white"}} />
          </a>
          <a href='/'>
            <FacebookIcon fontSize="large" style={{color:"white"}}/>
          </a>
          <a href='/'>
            <InstagramIcon fontSize="large" style={{color:"white"}}/>
          </a>
        </div>
    </div>
  )
}

export default Footer
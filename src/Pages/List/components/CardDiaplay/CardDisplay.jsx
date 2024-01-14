import React from 'react';
import './CardDisplay.Style.css'
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';

const CardDisplay = () => {
  return (
    <div  className='cardDisplay'>
      <div className='displayCard'>
        <h1 className='displayHeader'>"Looking for a dream home?"</h1>
        <p className='displaySub'>"We stremline your property desires"</p>
      </div>
      <span>
        <Link to='/market-place'>
          <Button
          title='Explore Properties'
          className='displayBtn'
          />
        </Link>
      </span>
      
    </div>
  )
}

export default CardDisplay

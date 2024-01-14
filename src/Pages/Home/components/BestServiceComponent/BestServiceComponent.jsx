import React from 'react';
import './BestServiceComponent.Style.css';

const BestServiceComponent = ({img, title}) => {
  return (
    <div className='container'>
      <div className='imgContainer'>
        <img src={img} alt={title} className='img'/>
      </div>
      <p className='title'>{title}</p>
    </div>
  )
}

export default BestServiceComponent

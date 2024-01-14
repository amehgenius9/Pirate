import React from 'react';
import './GoogleMap.Style.css';
const GoogleMap = ({classNameGoogle, googleOnchange, locationSrc, className}) => {
    return (
        <div className={`googleMapContainer ${className}`}>
            <div className='googleMap'>
                <p className={`googs ${classNameGoogle}`} onChange={googleOnchange}>{``}</p>
                <img className='locationIcon' src={locationSrc} alt='icon' />
            </div>
        </div>
    )
}

export default GoogleMap
import React, {useState} from 'react';
import './ImageUploader.Style.css';

const ImageUploader = ({type, src, onChange, imageLabel, className1, className2, className3, onClick, buttonTitle}) => {



    return (
        <div className='imageUploader'>
            <div className='imageField'>
                <p className={`fileInput ${className1}`} onChange={onChange}>{``}</p>
                    <img className='imageIcon' src={src} alt='icon' />
            </div>
            <p className={`uploadSub ${className3}`}>{imageLabel}</p>
            <button type={type} onClick={onClick} className={`uploadBtn ${className2}`}>{buttonTitle}</button>

        </div>
    )
}

export default ImageUploader

{/* <div className='imageField'>
                <input type={type} onChange={onChange} className={`fileInput ${className}`} />
                <span className='imageIcon'>
                    <img src={src} alt='icon' />
                </span>
                <button onClick={onClick}>{buttonTitle}</button>
            </div> */}
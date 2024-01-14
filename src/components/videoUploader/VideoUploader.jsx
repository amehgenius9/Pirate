import React from 'react';
import './videoUploader.Style.css';

const VideoUploader = ({type, videoSrc, videoOnchange, fieldClassName, buttonClassName, videoOnClick, videoButtonTitle, className}) => {
    return (
        <div className={`videoUploader ${className}`}>
            <div className='videoField'>
                <p className={`videoFileInput ${fieldClassName}`} onChange={videoOnchange}>{``}</p>
                <img className='videoIcon' src={videoSrc} alt='icon' />
            </div>
            <button type={type} onClick={videoOnClick} className={`videoUploadBtn ${buttonClassName}`}>{videoButtonTitle}</button>
        </div>
    )
}

export default VideoUploader
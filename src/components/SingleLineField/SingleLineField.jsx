import React from 'react';
import './SingleLineField.Style.css';

const SingleLineField = ({className, src, type, onChange}) => {
    return (
        <div className="lineInput">
            <img className={`sideImage ${className}`} src={src} alt='Logo' />
            <input type={type} onChange={onChange} />
        </div>
    );
};

export default SingleLineField

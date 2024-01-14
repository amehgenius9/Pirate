import React from 'react';
import './PropsInputField.style.css'

const PropsInputField = ({type, id, names, placeholder, value, onChange, className, span}) => {
    return (
        <div className='inputField'>
            <input
            type={type}
            id={id}
            name={names}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
            className={`propsInputField ${className}`}
            />
            <span className='toggleViz'>{span}</span>
        </div>
    )
}

export default PropsInputField;

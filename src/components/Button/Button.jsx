import React from 'react'
import './Button.Style.css'

const Button = ({ title, Onclick, className, type }) => {
  return (
    <>
      <button type={type} className={`button ${className}`} onClick={Onclick}>
        {title}
      </button>    
    </>
  )
}

export default Button;
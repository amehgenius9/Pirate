import React from 'react'
import './Button.Style.css'

const TransparentButton = ({ className, title, Onclick }) => {
  return (
    <>
      <button className={`button2 ${className}`} onClick={Onclick}>{title}</button>
    </>
  )
}

export default TransparentButton;
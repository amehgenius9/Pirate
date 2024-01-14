import React from 'react'
import './BuiltForCard.Style.css'

const BuiltForCard = ({headTitle, subTitle}) => {
  return (
    <div className='parent'>
      <p className='child1'>{headTitle}</p>
      <p className="child2">{subTitle}</p>
    </div>
  )
}

export default BuiltForCard

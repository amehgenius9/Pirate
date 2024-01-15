import React from 'react';
import './CaseScenarioComponent.Style.css'

const CaseScenarioComponent = ({header, listing }) => {
  return (
    <div>
      <header className='headerTitle'>{header}</header>
      <div className='listContainer1'>
      <ul>
          {listing.map((item, index) => (
            <li className='list' key={index}>{item.list}</li>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default CaseScenarioComponent

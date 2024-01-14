import React from 'react';
import './CaseScenarioComponent.Style.css'

const CaseScenarioComponent = ({header, listing }) => {
  return (
    <div>
      <header className='headerTitle'>{header}</header>
      <div className='listContainer1'>
        <ul>
            <li className='list'>{listing}</li>
        </ul>
      </div>
    </div>
  )
}

export default CaseScenarioComponent

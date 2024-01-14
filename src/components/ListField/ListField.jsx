import React from 'react';
import './ListField.Style.css';

const ListField = ({className1, className2, labelClassName1, labelClassName2, propertyAddress, propertyDescription, typeOfInput, onChangeinput, typeOfTextarea, onChangeTextarea}) => {
    return (
        <form className='listField'>
            <div className='listInputParent1'>
                <label className={`label1 ${labelClassName1}`}>{propertyAddress}</label>
                <input type={typeOfInput} onChange={onChangeinput} className={`listInput ${className1}`} />
            </div>
            <div className='listInputParent2'>
                <label className={`label2 ${labelClassName2}`}>{propertyDescription}</label>
                <textarea type={typeOfTextarea} onChange={onChangeTextarea} className={`textArea ${className2}`} />
            </div>
        </form>
    )
}

export default ListField

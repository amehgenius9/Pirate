import React from 'react';
import './ListingCard.Style.css';
import ListImage from '../../assets/images/Rectangle 171.png';
import Agent from '../../assets/icons/companyLogo.png';
import Button from '../Button/Button';

const ListingCard = ({ coverImg, listStatus, amount, titleHeader, description, listNumber, listNumber2, listNumber3, listType, listType2, listType3, agentName, agentStatus, agentImg }) => {
    return (
        <div className='cardParent'>
            <div className="imagePath">
                <img className='listImage' src={coverImg} alt="Apartment for rent" />
            </div>
            <div className="mainContent">
                <p className='status'>{listStatus}</p>
                    <p className='amount'>{amount}</p>
                    <div className="details">
                        <h4 className='titleHeader'>{titleHeader}</h4>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='listDetails'>
                        <div className='listdescription'>
                            <p className='listNumber'>{listNumber}</p>
                            <p>{listType}</p>
                        </div>
                        <div className='listdescription'>
                            <p className='listNumber'>{listNumber2}</p>
                            <p>{listType2}</p>
                        </div>
                        <div className='listdescription'>
                            <p className='listNumber'>{listNumber3}</p>
                            <p>{listType3}</p>
                        </div>
                    </div>
                    <div className='agentContactDetail'>
                        <div className='agentDetails'>
                            <img className='agentImage' src={agentImg} alt='agent' />
                            <div>
                                <p className='agentName'>{agentName}</p>
                                <p className='listNumber'>{agentStatus}</p>
                            </div>
                        </div>
                        <Button 
                        title='Contact Lister'
                        className='listerBtn'
                        />
                    </div>
                </div>
        </div>
    );
}

export default ListingCard
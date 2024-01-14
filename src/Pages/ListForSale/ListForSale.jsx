import React from 'react';
import './ListForSale.Style.css';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import { imageDetails } from '../ListForRent/constant';
import ListField from '../../components/ListField/ListField';
import SingleLineField from '../../components/SingleLineField/SingleLineField';
import LogoImg1 from '../../assets/icons/Vector (1).png'
import LogoImg2 from '../../assets/icons/Vector (2).png'
import LogoImg3 from '../../assets/icons/Rectangle 81.png'
import LogoImg4 from '../../assets/icons/Vector (3).png'
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import locationIcon from '../../assets/icons/Vector (4).png'
import Button from '../../components/Button/Button';

const ListForSale = () => {

    return (
        <div className='listForRent'>
            <div className='listFormRentHero'>
                <h1 className='forRentHeader'>List Properties Online</h1>
                <p className='forRentSub'>List random properties around you that are up for sale or to let. Join the real estate affiliate market</p>
            </div>
                {imageDetails.map((detail, index) => (
                    <span key={index} className='rentImages'>
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                        <ImageUploader
                        src={detail.src}
                        buttonTitle={detail.buttonTitle}
                        imageLabel={detail.imageLabel}
                        className3='writeUp'
                        />
                    </span>
                ))}
                <ListField
                propertyAddress='Property Address'
                propertyDescription='Property Description'
                />
                <div className='singleLineField'>
                    <SingleLineField
                    src={LogoImg1}
                    type='text'
                    onChange={{}}
                    />
                    <SingleLineField
                    src={LogoImg2}
                    type='text'
                    onChange={{}}
                    />
                    <SingleLineField
                    src={LogoImg3}
                    type='text'
                    onChange={{}}
                    />
                    <SingleLineField
                    src={LogoImg4}
                    type='text'
                    onChange={{}}
                    />
                </div>
                <GoogleMap
                locationSrc={locationIcon}
                />
                <div style={{padding: 20,}}>
                    <Button
                    title='List Property'
                    className='submitButton'
                    />
                </div>
        </div>
    )
}

export default ListForSale

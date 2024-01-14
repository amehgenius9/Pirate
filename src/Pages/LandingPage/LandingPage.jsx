import React, { useState } from 'react';
import './LandingPage.Style.css'
import Button from '../../components/Button/Button';
import Logs from '../../assets/icons/newLogo.jpg'
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const [isLogin, setLogin] = useState(true);
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setLogin(false);
        navigate('/onboarding');
    };

  return (
    <div className='landingPage'>
        <div className='landingHeader'>
                <img className='logs' src={Logs} alt='Logo' />
            <div className='landingBtns'>
                <Link to='/' onClick={handleSignUpClick}>
                    <Button 
                    title='Sign Up'
                    className='landingBtn landBtn1'
                    />
                </Link>
                <Link to='/onboarding'>
                    <Button 
                    title='Log In'
                    className='landingBtn'
                    />
                </Link>
            </div>
        </div>
        <div className='heroContent'>
            <div>
                <h1 className='heroHeader'>Embark on a journey with Propout decentralized Real Estate Network Technology.</h1>
                <p className='heroSub'>List random real estate assets you see as you go with the power of Propout A.I</p>
                <Link to='/onboarding'>
                    <Button 
                    title='Get Started'
                    className='heroBtn'
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage

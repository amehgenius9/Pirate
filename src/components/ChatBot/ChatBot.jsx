import React from 'react';
import './ChatBot.Style.css'
import chatBot from '../../assets/images/ChatBot.png'
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const ChatBot = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/market-place');
  };
  return (
    <div className='chatBot'>
      <div>
        <img className='botImage' src={chatBot} alt='chatbot' />
      </div>
      <Button
      title='Chat with Propout A.I'
      className='chatBtn'
      Onclick={handleButtonClick}
      />
    </div>
  )
}

export default ChatBot

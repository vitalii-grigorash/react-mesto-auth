import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip(props) {
    const { isOpen, onClose, loggedIn, message } = props;
  
    return (
      <PopupWithForm
        name='infoTooltip'
        noConfirm={true}
        isOpen={isOpen}
        onClose={onClose}
        loggedIn={loggedIn}
      >
        <img src={message.icon} alt='Иконка авторизации' className='popup__icon' />
        <p className='popup__under-icon-text'>{message.text}</p>
  
      </PopupWithForm >
    );
  }
  
  export default InfoTooltip;
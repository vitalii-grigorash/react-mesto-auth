import React from 'react';
import MainForm from './MainForm';

function PopupWithForm (props) {

    const { 
        onSubmit,
        name,
        isOpen,
        onClose,
        title,
        children,
        submit,
        isLoading,
        noConfirm,
        disabled
    } = props;

    return (

        <div
            className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
        >

            <div 
                className={`popup__container popup__container_type_${name}`}
            >

                <button
                    type='button'
                    className='popup__close-button'
                    onClick={onClose}
                ></button>

                <MainForm
                    isPopup={true}
                    name={name}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                    title={title}
                    children={children}
                    disabled={disabled}
                    submit={submit}
                    noConfirm={noConfirm}
                >
                </MainForm>

            </div>

        </div>
    );
}
  
export default PopupWithForm;
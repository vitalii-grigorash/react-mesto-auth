import React from 'react';

function MainForm(props) {
    const {
        isPopup,
        formName,
        name,
        onSubmit,
        heading,
        submitButtonText,
        isLoading,
        title,
        children,
        disabled,
        submit,
        noConfirm,
    } = props;

    return (
        <form
            className={isPopup ? `popup__forms popup__forms_${name}` : `${formName}`}
            onSubmit={onSubmit}
        >

            <h2 className={isPopup ? `popup__heading` : `${heading}`}>{title}</h2>


            {children}


            <div className="popup__handlers">

                {isPopup ? (!noConfirm && 
                    (
                        <button
                            type='submit'
                            className="popup__submit-button"
                            disabled={disabled}
                        >       
                            {isLoading ? `Сохранение...` : submit}
                        </button>
                    )) : (
                        <button 
                            type="submit" 
                            className="log-reg__submit-button"
                        >
                            {submitButtonText}
                        </button>
                    )
                }

            </div>

        </form>
    );
}

export default MainForm;
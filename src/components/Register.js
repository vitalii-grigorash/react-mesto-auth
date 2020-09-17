import React from 'react';
import LoginAndRegisterForm from './LoginAndRegisterForm';

function Register ({ onRegister }) {

    function submitForm(password, email) {
        onRegister(password, email);
    }

    return (
        <LoginAndRegisterForm
        title='Регистрация'
        onSubmit={submitForm}
        submitButtonText='Зарегистрироваться'
        entranceText='Уже зарегистрированы?'
        entranceLinkText='Войти'
        path='/sign-in'
      ></LoginAndRegisterForm >
    )
}
  
export default Register;
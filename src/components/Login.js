import React from 'react';
import LoginAndRegisterForm from './LoginAndRegisterForm';

function Login ({ onLogin }) {

    function submitForm(password, email) {
        onLogin(password, email);
    }

    return (
        <LoginAndRegisterForm
        title='Вход'
        onSubmit={submitForm}
        submitButtonText='Войти'
        entranceText='Ещё не зарегистрированы?'
        entranceLinkText='Регистрация'
        path='/sign-up'
      ></LoginAndRegisterForm >
    )
}

export default Login;
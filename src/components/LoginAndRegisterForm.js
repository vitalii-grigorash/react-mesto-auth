import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainForm from './MainForm';

function LoginAndRegisterForm({ title, onSubmit, submitButtonText, entranceText, entranceLinkText, path}) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email && !password) return;
        onSubmit(password, email);
        setEmail('');
        setPassword('');
      }

      function handleChange(evt) {
        const { value } = evt.target;
        evt.target.name === 'email' ? setEmail(value) : setPassword(value);
      }
  
    return (

        <div className="log-reg">

            <MainForm
                isPopup={false}
                onSubmit={handleSubmit}
                formName='log-reg__form'
                title={title}
                heading='log-reg__heading'
                submitButtonText={submitButtonText}
            >
                <input
                    className="log-reg__input log-reg__input_email"
                    required 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                />
                
                <input 
                    className="log-reg__input log-reg__input_password"
                    required 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder='Пароль'
                    value={password}
                    onChange={handleChange}
                />
            </MainForm>

            <div className="log-reg__switch-container">

                <p className="log-reg__switch-heading">{entranceText}</p>

                <Link to={path} className="log-reg__switch-link">{entranceLinkText}</Link>

            </div>

        </div>
    )
  }
  
  export default LoginAndRegisterForm;
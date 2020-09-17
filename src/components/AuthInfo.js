import React from 'react';

function AuthInfo({ email, signOut }) {
  return (
    <div className='header__email-signout-container'>
      <span>{email}</span>
      <button className='header__signout-button' onClick={signOut}>Выйти</button>
    </div>
  );
}

export default AuthInfo;
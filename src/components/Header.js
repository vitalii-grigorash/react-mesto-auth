import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/svg/logo.svg';
import AuthInfo from './AuthInfo';

function Header({ loggedIn, email, signOut }) {

    const { pathname } = useLocation();

    const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;

    const linkPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

    return (

        <header className="header">

            <img className="header__logo" src={logo} alt="Логотип Место" />

            {loggedIn ? (
                <>
                    <AuthInfo email={email} signOut={signOut} />

                </>)

                : (<Link to={linkPath} className="header__link">{linkText}</Link>)
            }

        </header>
    );
}

export default Header;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    // console.log(user);

    const handleSignOut = event => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='link-button'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {
                    user ?
                        <div>
                            <button onClick={handleSignOut} className='sign-out'>
                                <span>Sign Out</span>
                            </button>
                            <span className='login-user'>{user.displayName}</span>
                        </div>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;
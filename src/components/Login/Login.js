import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='container-shadow'>
            <div className='form-container'>
                <div className='content-item'>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <p style={{color: 'red'}}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>
                        New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                    </p>
                    <div className='line-para'>
                        <img src="line.png" alt="" />
                        <span> or </span>
                        <img src="line.png" alt="" />
                    </div>
                    <button className='btn-google'>
                        <img src="Google__G__Logo.png" alt="" width={'25px'} />
                        <span style={{ marginLeft: '15px' }}>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
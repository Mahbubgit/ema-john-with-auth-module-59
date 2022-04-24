import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password and confirm password should be matched.');
            return;
        }
        if(password.length < 6 ){
            setError('Password must be 6 characters or longer.');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            navigate(from, {replace: true});
        })
    }

    return (

        <div className='container-shadow'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <p style={{color: 'green'}}>{success}</p>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to="/login">Login</Link>
                    </p>
                    <div className='line-para'>
                        <img src="line.png" alt="" />
                        <span> or </span>
                        <img src="line.png" alt="" />
                    </div>
                    <button onClick={handleGoogleSignIn} className='btn-google'>
                        <img src="Google__G__Logo.png" alt="" width={'25px'} />
                        <span style={{ marginLeft: '15px' }}>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
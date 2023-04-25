import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { login}= useContext(authContext);
    const [error,setError] =useState('')
    const navigate = useNavigate();
    const loaction = useLocation();
    console.log(loaction);
    const from = loaction.state?.from?.pathname || "/";
    console.log(from);
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        login(email,password)
        .then((result)=>{
            const newUser = result.user;
            console.log(newUser);
            form.reset();
            navigate(from,{replace:true});
        })
        .catch((error)=>{
            setError(error.message);
        })
}





    return (
        <div>
            <h2>Login coming sooon</h2>
                <div className='login-card'>
                        <div className='login-text'>
                        <span>Login</span>
                        </div>
                        <form onSubmit={handleSignIn} className=' form-control'>
                        <div>
                            <p><span>Email</span></p>
                            <input type="email" name="email" placeholder='Enter Your Email'  required/>
                        </div>
                        <div>
                            <p><span>Password</span></p>
                            <input type="password" name="password" placeholder=''   required/>
                        </div>
                        <p className='eroor-message'> {error}</p>
                        <button className='login-btn'>Login </button>
                        
                        </form>
                        <div className='text'>New to Ema-john? <span><Link to='/register'>Create New Account</Link></span></div>
                        <div className='hr'>
                            <hr /> or
                            <hr />
                        </div>
                        <button className='google-btn'>Continiue with Google </button>
                </div>
        </div>
    );
};

export default Login;
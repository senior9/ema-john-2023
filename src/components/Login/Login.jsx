import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login coming sooon</h2>
                <div className='login-card'>
                        <div className='login-text'>
                        <span>Login</span>
                        </div>
                        <form className=' form-control'>
                        <div>
                            <p><span>Email</span></p>
                            <input type="email" name="email" placeholder='Enter Your Email' id="email" required/>
                        </div>
                        <div>
                            <p><span>Password</span></p>
                            <input type="password" name="password" placeholder='' id="password"  required/>
                        </div>
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
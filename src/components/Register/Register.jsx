import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
const {createUser} =useContext(authContext);
const [error,setError] =useState('')
console.log(createUser);


const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword =form.confirmPassword.value;
        console.log(email,password,"hello",confirmPassword);
        setError('')
        if (password != confirmPassword) {
            setError('Your password is did not match')
            return;
        }
        else if(password.length > 6){
            setError('Your password must be at least 6 characters');
            return;
        }
        createUser(email,password)
        .then((result)=>{
            const newUser = result.user;
            console.log(newUser);
            form.reset();
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
                        <span>Create Account</span>
                        </div>
                        <form onSubmit={handleSignup} className=' form-control'>
                        <div>
                            <p><span>Email</span></p>
                            <input type="email" name="email" placeholder='Enter Your Email' id="" required/>
                        </div>
                        <div>
                            <p><span>Password</span></p>
                            <input type="password" name="password" placeholder='' id=""  required/>
                        </div>
                        <div>
                            <p><span>Confirm Password</span></p>
                            <input type="password" name="confirmPassword" placeholder='' id=""  required/>
                           
                        </div>
                        <p className='eroor-message'> {error}</p>
                        <button className='login-btn'>Login </button>
                        
                        </form>
                        <div className='text'>Already have an account? <span><Link to='/login'>Login</Link></span></div>
                        <div className='hr'>
                            <hr /> or
                            <hr />
                        </div>
                        <button className='google-btn'>Continiue with Google </button>
                </div>
        </div>
    );
};

export default Register;
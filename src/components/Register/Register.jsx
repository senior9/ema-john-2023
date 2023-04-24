import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
const {createUser} =useContext(authContext);
console.log(createUser);


const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword =form.confirmPassword.value;
        console.log(email,password,"hello",confirmPassword);
        // if (password !== confirmPassword) {
        //     return 
        // }
        createUser(email,password)
        .then((result)=>{
            const newUser = result.user;
            console.log(newUser);
        })
        .catch((error)=>{
            console.log(error.message);
        })
}



    return (
        <div>
            <h2>Login coming sooon</h2>
                <div className='login-card'>
                        <div className='login-text'>
                        <span>Login</span>
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
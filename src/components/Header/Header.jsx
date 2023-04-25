import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Header = () => {
const {user,logOut} =useContext(authContext);
console.log(user)
const [error,setError]=useState('')
const handleLogOut = () => {
    logOut()
    .then((result)=>{})
    .catch(error=>setError(error.message))
}

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {/* <Link to="/login">Login</Link> */}
             
                { user ?
                <Link onClick={handleLogOut} to="/login">Logout</Link> : <Link to="/login">Login</Link>
                }
              
            
            </div>
        </nav>
    );
};

export default Header;
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, applyActionCode, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase.init';

// create context and export
 export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    // Loading 
    const [loading,setLoading] =useState(true);
// user XCreate Function 
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
} 
// user Signin 
const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}  
// user logout 
const logOut = ()=>{
    return signOut(auth);
}
// Observer 
useEffect(()=>{
    const unSubscibe= onAuthStateChanged(auth, currenUser =>{
        setUser(currenUser);
        setLoading(false);
    })
    return ()=>{
        return unSubscibe;
    }
},[])
    // context Value 
    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        loading,

    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
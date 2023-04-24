import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, applyActionCode, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.init';

// create context and export
 export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
// user XCreate Function 
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
} 
// user Signin 
const login = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}  
// user logout 
const logOut = ()=>{
    return signOut(auth);
}
    // context Value 
    const authInfo = {
        user,
        createUser,
        login,
        logOut,

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
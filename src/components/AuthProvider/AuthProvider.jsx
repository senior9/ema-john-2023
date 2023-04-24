import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, applyActionCode } from "firebase/auth";
import app from '../../firebase.init';

// create context and export
 export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}   
    // context Value 
    const authInfo = {
        createUser,
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
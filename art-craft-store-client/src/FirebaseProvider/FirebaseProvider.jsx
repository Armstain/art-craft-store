import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config.js';


export const AuthContext = createContext(null);

//social login
const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //googleLogin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)

    }
    //githubLogin
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //log out
    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)

            }
        });

        return () => unsubscribe();
    }, [])





    const allValues = {
        createUser, signInUser, googleLogin, githubLogin, logOut, loading, user
    }
    return (
        <AuthContext.Provider value={allValues}>

            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
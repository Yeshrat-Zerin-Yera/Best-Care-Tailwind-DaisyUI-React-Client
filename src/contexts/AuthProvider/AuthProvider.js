import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update User
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    };

    // Email Verification
    const emailVerification = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    // Sign In
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign In With Different Provider
    const signInProvider = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Reset User Password
    const resetUserPassword = email => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // Sign Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // On Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Auth Info
    const authInfo = { createUser, updateUser, emailVerification, signIn, signInProvider, resetUserPassword, logOut, user, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
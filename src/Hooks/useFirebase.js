import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import intializeFirebase from '../Friebase/firebase.init';
import { useEffect } from 'react';

intializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

                // redirect 
                const destination = location?.state.from || '/';
                navigate(destination);



            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out

            }
            setIsLoading(false)
        });
    }, [auth]);



    const emailPasswordCreateUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

                updateUser(name);


                // -----------------
                //save user to the database

                // ...
            })
            .catch((error) => {

                console.log(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    const signInEmailPasswordUser = (email, password, location, navigate) => {
        setIsLoading(true);
        // console.log(email);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // ...

                const destination = location?.state.from || '/';
                navigate(destination);


            })
            .catch((error) => {

                console.log(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    };




    // logout
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            // An error happened.
        });
    }



    return {
        user,
        signInUsingGoogle,
        handleSignOut,
        emailPasswordCreateUser,
        signInEmailPasswordUser,
        isLoading,
    };
};

export default useFirebase;
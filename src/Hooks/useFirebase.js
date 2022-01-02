// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     updateProfile,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initAuth from "../Friebase/firebase.init";
// initAuth();
// const useFirebase = () => {
//     const auth = getAuth();
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     // const [admin, setAdmin] = useState(false);
//     const logInUsingGoogle = (history, location) => {
//         setIsLoading(true);
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 setUser(result.user)

//             })
//             .then(() => {
//                 const destination = location?.state?.from || "/";
//                 history.replace(destination);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     };

//     const signUpWithEmailAndPassword = (email, password, name, history) => {
//         setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((result) => {
//                 // saveUser(email, name, "POST");
//                 updateProfile(auth.currentUser, {
//                     displayName: name,
//                 });
//                 history.replace("/");

//                 console.log(result.user);
//             })

//             .catch((error) => {
//                 console.log(error.message);
//             })
//             .finally(() => setIsLoading(false));
//     };
//     const emailAndPasswordSignIn = (email, password, location, history) => {
//         setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((result) => {
//                 // Signed in
//                 // ...

//                 const destination = location?.state?.from || "/";
//                 history.replace(destination);

//                 console.log(result.user);
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 console.log(errorMessage);
//             })
//             .finally(() => setIsLoading(false));
//     };


//     const logOut = () => {
//         signOut(auth)
//             .then(() => {
//                 // Sign-out successful.
//             })
//             .catch((error) => {
//                 // An error happened.
//                 console.log(error.message);
//             })
//             .finally(() => setIsLoading(false));
//     };
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
               
//                 setUser({});
//             }
//             setIsLoading(false);
//         });
//     }, [auth]);

//     return {
//         logInUsingGoogle,
//         signUpWithEmailAndPassword,
//         emailAndPasswordSignIn,
//         logOut,
//         user,
//         setUser,
//         isLoading,
//     };
// };
// export default useFirebase;
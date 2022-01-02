import { initializeApp } from "./firebase.init";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
    initializeApp(firebaseConfig);
};

export default initAuth;
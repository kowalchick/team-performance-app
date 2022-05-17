import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import app from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGmy_iI9XwIQ_5Fjmf9D52LUyZOl-JFOE",
    authDomain: "team-performance-app.firebaseapp.com",
    projectId: "team-performance-app",
    storageBucket: "team-performance-app.appspot.com",
    messagingSenderId: "894858155745",
    appId: "1:894858155745:web:4e317e3e7050201023c9a0",
    measurementId: "G-BSN7FTYW04"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.app = app;
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


}

export default Firebase;

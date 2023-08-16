import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTlmGDP-CFvQ7Q7SFl0mO_0v1gBvJzA8Y",
    authDomain: "privatepwc.firebaseapp.com",
    projectId: "privatepwc",
    storageBucket: "privatepwc.appspot.com",
    messagingSenderId: "16165157516",
    appId: "1:16165157516:web:db1dc8dd665d63c12459a9",
    measurementId: "G-6H96X9EC00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

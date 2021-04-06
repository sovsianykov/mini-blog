import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


export  const firebaseConfig = {
    apiKey: "AIzaSyDF5E1vaJs-juHkavhZYUFSP7UIA2EiZUg",
    authDomain: "mini-blog-d8148.firebaseapp.com",
    projectId: "mini-blog-d8148",
    storageBucket: "mini-blog-d8148.appspot.com",
    messagingSenderId: "869088163459",
    appId: "1:869088163459:web:678b7b018a80b474b0cdb6"
};

let app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore(app);
firebase.firestore()

export default firebase;

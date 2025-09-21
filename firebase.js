// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js"
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAzri22_qsI-D6wuiKol83vgxNQFTcpxBE",
    authDomain: "e-gro-log.firebaseapp.com",
    projectId: "e-gro-log",

    storageBucket: "e-gro-log.firebasestorage.app",
    messagingSenderId: "679443294595",
    appId: "1:679443294595:web:9b9a9d109d0cfa7fe76eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const signUp = document.getElementById('submitsignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const fname = document.getElementById('Fname').value;
    const lname = document.getElementById('Lname').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
            }
        })
})




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDiiQ52dkLx_qH6MHi2r8QxVL9qCS4oAM8",
    authDomain: "js-projects-37cca.firebaseapp.com",
    projectId: "js-projects-37cca",
    storageBucket: "js-projects-37cca.appspot.com",
    messagingSenderId: "835545380676",
    appId: "1:835545380676:web:115494582e8521e30a0911",
    measurementId: "G-49PE67NCC3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

function toggleForm() {
    const signUpForm = document.querySelector('.Sign-div');
    const loginForm = document.querySelector('.login-div');
    const formToggleText = document.getElementById('formToggleText');

    if (signUpForm.style.display === 'none') {
        signUpForm.style.display = 'block';
        loginForm.style.display = 'none';
        formToggleText.innerText = 'Login';
    } else {
        signUpForm.style.display = 'none';
        loginForm.style.display = 'block';
        formToggleText.innerText = 'SignUp';
    }
}

window.toggleForm = toggleForm
window.signUp = signUp
window.login = login

var email;
var password;

function signUp() {

    password = document.getElementById("password").value
    email = document.getElementById("email").value

    createUserWithEmailAndPassword(auth, email, password)



    console.log("username signUp---->", email)
    console.log("password signUp---->", password)
        .then((res) => {

            const user = res.user;
            console.log("User ", user);


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
}


async function login() {
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value

    console.log('login', userEmail, ' && ', userPassword)
    console.log('login form signup', email, ' && ', password)


    await signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);


            if (user.email == userEmail) {
                console.log('login succesful')
            } else {
                console.log('error')
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('1---->', errorCode);
            console.log('2---->', errorMessage);

        });


}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user found');  
        const uid = user.uid;
      // ...
    } else {
      console.log('user signed out may be');
    }
  });
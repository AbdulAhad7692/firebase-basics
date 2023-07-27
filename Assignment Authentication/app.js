
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


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




function signUp() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)



    console.log("username---->", email)
    console.log("password---->", password)
        .then((res) => {

            const user = res.user;
            console.log("User ", user);


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });

}
window.signUp = signUp
window.login = login

async function login() {
    var userEmail = document.getElementById("userEmail").value
    var userPassword = document.getElementById("userPassword").value

    console.log(userEmail, ' && ', userPassword)
    console.log(email.value, ' && ', password.value)


    await signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('1---->', errorCode);
            console.log('2---->', errorMessage);
        });

}

// if ("abdulahad@gmail.com" == userEmail) {
    //     console.log('login succesful')
// } else {
//     console.log('error')
// }



 // signInWithEmailAndPassword(auth, userEmail, password)
    //     .then((userCredential) => {

    //         const user = userCredential.user;
    //         console.log(user);

    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log('1---->', errorCode);
    //         console.log('2---->', errorMessage);
    //     });














// //SIN IN

// signInWithEmailAndPassword(auth, "abdulahad@gmail.com", password)
//     .then((userCredential) => {

//         const user = userCredential.user;
//         console.log(user);

//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log('1---->', errorCode);
//         console.log('2---->', errorMessage);
//     });


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



// const firebaseConfig = {
//     apiKey: "AIzaSyDiiQ52dkLx_qH6MHi2r8QxVL9qCS4oAM8",
//     authDomain: "js-projects-37cca.firebaseapp.com",
//     projectId: "js-projects-37cca",
//     storageBucket: "js-projects-37cca.appspot.com",
//     messagingSenderId: "835545380676",
//     appId: "1:835545380676:web:115494582e8521e30a0911",
//     measurementId: "G-49PE67NCC3"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)


var username = document.getElementById("userName")
var password = document.getElementById("password")

console.log("username---->",username)
console.log("password---->",password)














// let password = "12345678"

// //CREATE

// createUserWithEmailAndPassword(auth, "abdulahad@gmail.com", password)
//     .then((res) => {

//         const user = res.user;
//         console.log("User ", user);


//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

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

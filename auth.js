     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
        
     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries
    
     // Your web app's Firebase configuration
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyAq19qOn6kUuE_XaXlP1BWTgEEOCDJuQOg",
    authDomain: "do-it-efe6e.firebaseapp.com",
    projectId: "do-it-efe6e",
    storageBucket: "do-it-efe6e.appspot.com",
    messagingSenderId: "807114896453",
    appId: "1:807114896453:web:6fca2002bc29430dcb1f2c",
    measurementId: "G-FG136D2EWB"
    };

const app = initializeApp(firebaseConfig);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";;

const auth = getAuth();


const provider = new GoogleAuthProvider();
async function SignIn() {
    
    await signInWithPopup(auth, provider)
      .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(token+user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(errorCode+" "+errorMessage+" "+email+" "+credential);
        });
    }
    
    let signInBTN = document.getElementById("logIn");
    signInBTN.addEventListener("click", ()=>{
        SignIn();
    });
    
    
    
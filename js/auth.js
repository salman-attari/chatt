import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,GoogleAuthProvider, signInWithPopup,  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBV723Gv55q67G4E4ByUym_0hBLOuK1nCs",
  authDomain: "chat-5a331.firebaseapp.com",
  databaseURL: "https://chat-5a331-default-rtdb.firebaseio.com",                 
  projectId: "chat-5a331",
  storageBucket: "chat-5a331.appspot.com",
  messagingSenderId: "444167367213",
  appId: "1:444167367213:web:e02d8bdfb4bde4e92726a4",
  measurementId: "G-RPQ8ZM3LXM"
};
// Initialize Firebase
const app=initializeApp(firebaseConfig)
const auth = getAuth(app)

var error = document.getElementById('error');

const provider = new GoogleAuthProvider();
const SigninWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      location.replace("../chat.html")
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
}


window.SigninWithGoogle=SigninWithGoogle


      // no need code end here


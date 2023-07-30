var firebaseConfig = {
  apiKey: "",
  authDomain: "https://chat-5a331-default-rtdb.firebaseio.com",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      location.href = 'chat.html';
  }
});

var error = document.getElementById('error');

loginWithGithub = () => {

  var provider = new firebase.auth.GithubAuthProvider();
      
  firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log('Github Sign in', user)

      const userInfo = {
          name: user.displayName,
          email: user.email,
          imageUrl: user.photoURL,
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      location.href = 'chat.html';

  }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      error.innerHTML = errorMessage

  });

}

const SigninWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  firebase.auth().signInWithPopup(provider)
      .then(function (result) {
          // This gives you a Google Access Token.
          // The signed-in user info 
          console.log('user login succesFully', result.user.displayName)
          const userInfo = {
              name: result.user.displayName,
              email: result.user.email,
              imageUrl: result.user.photoURL,
          }
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          location.href = 'chat.html';
      })
      .catch((error) => {
          // Handle Errors here.
          var errorMessage = error.message;
          error.innerHTML = errorMessage
      });
}




SigninWithFacebook = () => {

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      const userInfo = {
          name: user.displayName,
          email: user.email,
          imageUrl: user.photoURL
      }
      // console.log(userInfo, 'usersInfo');
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      location.href = 'chat.html';
      // ...
  }).catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      error.innerHTML = errorMessage

  });

}























// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAuth,GoogleAuthProvider, signInWithPopup,  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBV723Gv55q67G4E4ByUym_0hBLOuK1nCs",
//   authDomain: "chat-5a331.firebaseapp.com",
//   databaseURL: "https://chat-5a331-default-rtdb.firebaseio.com",                 
//   projectId: "chat-5a331",
//   storageBucket: "chat-5a331.appspot.com",
//   messagingSenderId: "444167367213",
//   appId: "1:444167367213:web:e02d8bdfb4bde4e92726a4",
//   measurementId: "G-RPQ8ZM3LXM"
// };
// // Initialize Firebase
// const app=initializeApp(firebaseConfig)
// const auth = getAuth(app)

// var error = document.getElementById('error');

// const provider = new GoogleAuthProvider();
// const SigninWithGoogle = () => {
//     signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       location.replace("../chat.html")
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
  
// }


// window.SigninWithGoogle=SigninWithGoogle


//       // no need code end here


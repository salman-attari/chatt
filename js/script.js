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





















// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAuth,GoogleAuthProvider, signInWithPopup,  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyBV723Gv55q67G4E4ByUym_0hBLOuK1nCs",
//     authDomain: "chat-5a331.firebaseapp.com",
//     databaseURL: "https://chat-5a331-default-rtdb.firebaseio.com",                 
//     projectId: "chat-5a331",
//     storageBucket: "chat-5a331.appspot.com",
//     messagingSenderId: "444167367213",
//     appId: "1:444167367213:web:e02d8bdfb4bde4e92726a4",
//     measurementId: "G-RPQ8ZM3LXM"
//   };
// // Initialize Firebase
// const app=initializeApp(firebaseConfig)
// const auth = getAuth(app)

// var uid = '';

// loginWithGithub = () => {

//     var provider = new firebase.auth.GithubAuthProvider();
        
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // The signed-in user info.
//         var user = result.user;
//         console.log('Github Sign in', user)

//         const userInfo = {
//             name: user.displayName,
//             email: user.email,
//             imageUrl: user.photoURL,
//         }
//         localStorage.setItem('userInfo', JSON.stringify(userInfo))
//         location.href = 'chat.html';

//     }).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         error.innerHTML = errorMessage

//     });

// }
// firebase.auth().onAuthStateChanged(function (user) {

//     if (user) {
//         // User is signed in.
//         var displayName = user.displayName;
//         var email = user.email;
//         var emailVerified = user.emailVerified;
//         var photoURL = user.photoURL;
//         var isAnonymous = user.isAnonymous;
//         uid = user.uid;
//         var providerData = user.providerData;
//         console.log(user.displayName, 'onAuthStateChanged')
//         // ...
//     } else {
//         // User is signed out.
//         console.log('User is signed out')
//         location.href = '/'
//         // ...
//     }
// });
// var db = firebase.database().ref('messages');

// var cardContainer = document.getElementById('mainCard');
// var scrollbar = document.getElementsByClassName('msg_card_body');
// var username = document.getElementById('username');
// var userImg = document.getElementById('userImg');

// let userInfo = localStorage.getItem('userInfo')
// userInfo = JSON.parse(userInfo)
// username.innerHTML = userInfo.name;
// var userName = (userInfo.name) ? userInfo.name : 'user'
// var imgUrl = userInfo.imageUrl
// userImg.src = imgUrl;
// var accessToken = userInfo.accessToken

// signOut = () => {

//     firebase.auth().signOut().then(function () {
//         // Sign-out successful.
//         localStorage.removeItem('userInfo')
//         location.href = 'index.html';
//         console.log('sign out Success Fully')

//     })
//     .catch(function (error) {
//         // An error happened.
//         console.log(error)
//     })
// }


// // Get Messages
// db.on('child_added', function (snapshot) {
//     var time = new Date(snapshot.val().timestamp).toDateString()
//     if (uid === snapshot.val().token) {

//         var cards = `<div class="d-flex justify-content-end mb-4">
//         <div class="msg_cotainer_send">
//         <div class="username_small">~${snapshot.val().username}</div>
//          ${snapshot.val().message}
//           <span class="msg_time_send">${time}</span>
//         </div>
//         <div class="img_cont_msg">
//           <img src="${snapshot.val().imgUrl}" class="rounded-circle user_img_msg">
//         </div>
//       </div>`
//     }
//     else {
//         var cards = `<div class="d-flex justify-content-start mb-4">
//         <div class="img_cont_msg">
//         <img src="${snapshot.val().imgUrl}" class="rounded-circle user_img_msg">
//         </div>
//         <div class="msg_cotainer">
//         <div class="username_small">~${snapshot.val().username}</div>
//         ${snapshot.val().message}
//         <span class="msg_time">${time}</span>
//         </div>
//     </div>`;
//     }

//     cardContainer.innerHTML += cards;

//     // auto scroll to bottom;
//     scrollbar[0].scrollTop = scrollbar[0].scrollHeight;
// })

// var SendMsg = document.getElementById('SendMsg');

// SendMsg.addEventListener('submit', (e) => {
//     e.preventDefault();
//     var message = document.getElementById('msg');
//     var uId = uid;
//     // add Messages 
//     db.push({
//         message: message.value,
//         username: userName,
//         timestamp: firebase.database.ServerValue.TIMESTAMP,
//         token: uId,
//         imgUrl: imgUrl
//     })
//         .then(function (docRef) {
//             console.log("message sent");
//         })
//         .catch(function (error) {
//             console.error("Error adding document: ", error);
//         });
//     message.value = ''

// });


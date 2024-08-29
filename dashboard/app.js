import {auth, signOut, onAuthStateChanged} from "../firebase.js"

let log = document.querySelector("#logout");

const LogOut = () => {
  console.log("Log Out")
  signOut(auth).then(() => {
    Toastify({
      text: "Logout succesfully completed",     
      duration: 3000     
      }).showToast();
  }).catch((error) => {
   
    Toastify({
      text: "Error",     
      duration: 3000     
      }).showToast();
  });
  
}

log.addEventListener('click', LogOut);

onAuthStateChanged(auth, (user) => {
  if (!user) {
      window.location.href = '../signup/index.html'
  } 
});
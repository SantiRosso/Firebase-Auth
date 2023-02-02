import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import "./app/singUpForm.js";
import "./app/logout.js";
import "./app/signInForm.js";

onAuthStateChanged(auth, (user) => {
  //   console.log(user);
  loginCheck(user);
  //   if (user) {
  //     loginCheck(user);
  //   } else {
  //     loginCheck(user);
  //   }
});

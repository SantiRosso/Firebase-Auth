import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";
import "./app/singUpForm.js";
import "./app/logout.js";
import "./app/signInForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";

onAuthStateChanged(auth, async (user) => {
  let notUser = true;
  if (user) {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setupPosts(querySnapshot.docs);
  } else {
    setupPosts([], notUser);
  }
  loginCheck(user);
});

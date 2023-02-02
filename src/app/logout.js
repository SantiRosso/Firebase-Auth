import { signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
const logout = document.querySelector("#logout");

logout.addEventListener("click", async () => {
  await signOut(auth);
  console.log("User signed out");
});

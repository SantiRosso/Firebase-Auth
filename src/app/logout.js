import { signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const logout = document.querySelector("#logout");

logout.addEventListener("click", async () => {
  try {
    await signOut(auth);
    showMessage("Goodbye!", "success");
  } catch (error) {
    showMessage(error.code, "error");
  }
});

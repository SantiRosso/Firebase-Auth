import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    const signinModal = document.querySelector("#signInModal");
    const modal = bootstrap.Modal.getInstance(signinModal);
    modal.hide();
    showMessage("Welcome " + credentials.user.displayName, "success");
  } catch (error) {
    showMessage(error.code, "error");
  }
});

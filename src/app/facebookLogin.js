import {
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector("#facebookLogin");

facebookButton.addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();
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

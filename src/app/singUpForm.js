import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "./firebase.js";

const singUpForm = document.querySelector("#signup-form");

singUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singUpForm["signUp-email"].value;
  const password = singUpForm["signUp-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    //close the signup Modal
    const signupModal = document.querySelector("#signUpModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  } catch (error) {
    console.log(error);
  }
});

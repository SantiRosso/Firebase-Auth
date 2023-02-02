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

    //close the signup Modal
    const signupModal = document.querySelector("#signUpModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      alert("Invalid email");
    } else if (error.code === "auth/weak-password") {
      alert("Password is too weak");
    } else if (error.code === "auth/email-already-in-use") {
      alert("Email already in use");
    } else if (error.code) {
      alert("Something went wrong");
    }
  }
});

const singUpForm = document.querySelector("#signup-form");

singUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = singUpForm["signUp-email"].value;
  const password = singUpForm["signUp-password"].value;

  console.log(email, password);
});

let signUpBtn = document.getElementById("signUp");
let logInBtn = document.getElementById("logIn");
let logInForm = document.getElementById("logInForm");
let signUpForm = document.getElementById("signUpForm");

signUpBtn.addEventListener("click", () => {
    signUpForm.style.display = "flex";
    logInForm.style.display = "none";
})

logInBtn.addEventListener("click", () => {
    logInForm.style.display = "flex";
    signUpForm.style.display = "none";
})
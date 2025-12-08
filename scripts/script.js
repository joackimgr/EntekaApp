let signUpSpan = document.getElementById("signUp");
let logInSpan = document.getElementById("logIn");
let logInForm = document.getElementById("logInForm");
let signUpForm = document.getElementById("signUpForm");


signUpSpan.addEventListener("click", () => {
    signUpForm.style.display = "flex";
    logInForm.style.display = "none";
})

logInSpan.addEventListener("click", () => {
    logInForm.style.display = "flex";
    signUpForm.style.display = "none";
})

logInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    window.location.href = "../pages/home.html";
})

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    window.location.href = "../pages/home.html";
})
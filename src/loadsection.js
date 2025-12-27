import logo from './images/EntekaLogo.png';

function createLogInForm() {
    const form = document.createElement('form');
    form.id = 'logInForm';
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'Entekalogo';
    logoImg.width = 120;
    logoImg.height = 120;
    logoImg.id = 'logoOnLogInForm';

    const usrLabel = document.createElement('label');
    usrLabel.htmlFor = 'logInUsername';
    usrLabel.textContent = "Username";

    const usrInput = document.createElement('input');
    usrInput.type = 'text';
    usrInput.name = 'username';
    usrInput.id = 'logInUsername';
    usrInput.required = true;

    const passLabel = document.createElement('label');
    passLabel.htmlFor = 'logInPassword';
    passLabel.textContent = 'Password';

    const passInput = document.createElement('input');
    passInput.type = 'password';
    passInput.name = 'password';
    passInput.id = 'logInPassword';
    passInput.required = true;

    const p = document.createElement('p');
    p.textContent = "Don't have an account? ";
    const span = document.createElement('span');
    span.id = 'signUp';
    span.textContent = 'Sign Up!';
    p.appendChild(span);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Login';
    submitBtn.id = 'logInBtn';

    form.append(logoImg, usrLabel, usrInput, passLabel, passInput, p, submitBtn);

    return form;
}

function createSignUpForm() {
    const form = document.createElement('form');
    form.id = 'signUpForm';

    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'Entekalogo';
    logoImg.width = 120;
    logoImg.height = 120;

    const usrLabel = document.createElement('label');
    usrLabel.htmlFor = 'signUpUsername';
    usrLabel.textContent = "Username";

    const usrInput = document.createElement('input');
    usrInput.type = 'text';
    usrInput.name = 'username';
    usrInput.id = 'signUpUsername';
    usrInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'signUpEmail';
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'signUpEmail';
    emailInput.required = true;

    const passLabel = document.createElement('label');
    passLabel.htmlFor = 'signUpPassword';
    passLabel.textContent = 'Password';

    const passInput = document.createElement('input');
    passInput.type = 'password';
    passInput.name = 'password';
    passInput.id = 'signUpPassword';
    passInput.required = true;

    const p = document.createElement('p');
    p.textContent = "Already have an account? ";
    const span = document.createElement('span');
    span.id = 'logIn';
    span.textContent = 'Log In!';
    p.appendChild(span);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Sign Up';
    submitBtn.id = 'signUpBtn';

    form.append(logoImg, usrLabel, usrInput, emailLabel, emailInput, passLabel, passInput, p, submitBtn);

    return form;
}

function loadSection() {
    const logInForm = createLogInForm();
    const signUpForm = createSignUpForm();
    const content = document.getElementById('content');
    const section = document.createElement('div');
    section.classList.add('section');

    const signUpSpan = logInForm.querySelector("#signUp");
    const logInSpan = signUpForm.querySelector("#logIn");

    signUpSpan.addEventListener("click", () => {
        signUpForm.style.display = "flex";
        logInForm.style.display = "none";
    });

    logInSpan.addEventListener("click", () => {
        logInForm.style.display = "flex";
        signUpForm.style.display = "none";
    });

    logInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "home.html";
    });

    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "home.html";
    });

    section.append(logInForm, signUpForm);
    content.appendChild(section);
}

export {loadSection};
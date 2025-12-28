import logo from './images/EntekaLogo.png';


function loadLeft() {
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.id = 'appLogo';
    logoImg.alt = 'EntekaLogo';


    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    const logoText = document.createElement('p');
    logoText.innerText = "ENTEKA";
    logoText.id = 'logoText';

    logoDiv.appendChild(logoImg);
    textDiv.appendChild(logoText);
    leftDiv.append(logoDiv, textDiv);

    return leftDiv;
}


function loadFirstNav() {
    const content = document.getElementById('content');
    const leftDiv = loadLeft();
    const nav = document.createElement('nav');
    nav.classList.add('firstNav');

    nav.append(leftDiv);
    content.appendChild(nav);
}

export {loadFirstNav};
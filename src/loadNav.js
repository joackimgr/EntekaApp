import logo from './images/EntekaLogo.png';
import settings from './images/settings_icon.png';
import profile from './images/profile_icon.png';
import chat from './images/chat_icon.png';
import { clearLeft } from './clearLeft';
import { clearContent } from './clearContent';
import { loadSettings } from './loadSettings';

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

function loadRight() {
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add('settings');
    const settingsImg = document.createElement('img');
    settingsImg.src = settings;
    settingsImg.width = 50;
    settingsImg.height = 50;

    settingsDiv.addEventListener("click", () => {
        clearLeft();
        clearContent();
        loadSettings();
        settingsImg.src = chat;
    })

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    const profileImg = document.createElement('img');
    profileImg.src = profile;
    profileImg.width = 45;
    profileImg.height = 45;

    settingsDiv.appendChild(settingsImg);
    profileDiv.appendChild(profileImg);
    rightDiv.append(settingsDiv, profileDiv);

    return rightDiv;
}

function loadNav() {
    const content = document.getElementById('content');
    const leftDiv = loadLeft();
    const rightDiv = loadRight();
    const nav = document.createElement('nav');

    nav.append(leftDiv, rightDiv);
    content.appendChild(nav);
}

export {loadNav};
import profile from './images/profile_icon.png';
import deleteacc from './images/account_delete.png';
import settings from './images/settings_icon.png';
import { loadAccSettingsOptions } from './loadAccountSettings';
import { loadDel } from './loadAccountDeleteSettings';

function loadAccountSettings() {
    const accountSettingsDiv = document.createElement('div');
    accountSettingsDiv.classList.add('settingsOptionContainer');
    accountSettingsDiv.id = 'accountSettings';

    accountSettingsDiv.addEventListener("click", () => {
        const accDel = document.getElementById('accountDelete');
        loadAccSettingsOptions();
        accDel.classList.remove('active')
        accountSettingsDiv.classList.add('active');
    })

    const accountSettingsImg = document.createElement('img');
    accountSettingsImg.src = profile;
    accountSettingsImg.width = 50;
    accountSettingsImg.height = 50;

    const accountSettingsTxt = document.createElement('p');
    accountSettingsTxt.textContent = 'Account Settings';

    accountSettingsDiv.append(accountSettingsImg, accountSettingsTxt);
    return accountSettingsDiv;
}

function loadAccountDelete() {
    const accountDeleteDiv = document.createElement('div');
    accountDeleteDiv.classList.add('settingsOptionContainer');
    accountDeleteDiv.id = 'accountDelete';

    accountDeleteDiv.addEventListener("click", () => {
        const accset = document.getElementById('accountSettings');
        loadDel();
        accset.classList.remove('active');
        accountDeleteDiv.classList.add('active');
    })

    const accountDeleteImg = document.createElement('img');
    accountDeleteImg.src = deleteacc;
    accountDeleteImg.width = 50;
    accountDeleteImg.height = 50;

    const accountDeleteTxt = document.createElement('p');
    accountDeleteTxt.textContent = 'Delete Account';
    accountDeleteTxt.id = 'accountDelText';

    accountDeleteDiv.append(accountDeleteImg, accountDeleteTxt);
    return accountDeleteDiv;
}

function loadSettingsIcon() {
    const settingsIcon = document.createElement('img');
    settingsIcon.src = settings;
    settingsIcon.width = 200;
    settingsIcon.height = 200;

    return settingsIcon;
}


function loadSettings() {
    const leftDiv = document.querySelector('.chats');
    const rightDiv = document.querySelector('.welcome, .newMessage');
    
    if (leftDiv) {
        leftDiv.innerHTML = ''; 
        leftDiv.className = 'settingsOptions'; 

        const accSettings = loadAccountSettings();
        const accDel = loadAccountDelete();
        leftDiv.append(accSettings, accDel);
    }

    if (rightDiv) {
        rightDiv.innerHTML = ''; 
        rightDiv.className = 'settingsIconDiv';

        const settingsIcon = loadSettingsIcon();
        rightDiv.appendChild(settingsIcon);
    }
}

export { loadSettings }
    


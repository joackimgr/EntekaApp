function changeUsrName() {
    const usrName = document.createElement('div');
    usrName.classList.add('accountSettingsOptionContainer');
    usrName.id = 'userNameOption';

    const usrNameTxt = document.createElement('p');
    usrNameTxt.textContent = 'Change your username';

    usrName.appendChild(usrNameTxt);
    
    return usrName;
}

function changeUsrPass() {
    const usrPass = document.createElement('div');
    usrPass.classList.add('accountSettingsOptionContainer');
    usrPass.id = 'userPassOption';

    const usrPassTxt = document.createElement('p');
    usrPassTxt.textContent = 'Change your password';

    usrPass.appendChild(usrPassTxt);
    
    return usrPass;
}

function changeUsrEmail() {
    const usrEmail = document.createElement('div');
    usrEmail.classList.add('accountSettingsOptionContainer');
    usrEmail.id = 'userEmailOption';

    const usrEmailTxt = document.createElement('p');
    usrEmailTxt.textContent = 'Change your email';

    usrEmail.appendChild(usrEmailTxt);
    
    return usrEmail;
}

function changeUsrPic() {
    const usrPic = document.createElement('div');
    usrPic.classList.add('accountSettingsOptionContainer');
    usrPic.id = 'userPicOption';

    const usrPicTxt = document.createElement('p');
    usrPicTxt.textContent = 'Change your profile picture';

    usrPic.appendChild(usrPicTxt);
    
    return usrPic;
}

function loadAccSettingsOptions() {
    const username = changeUsrName();
    const pass = changeUsrPass();
    const email = changeUsrEmail();
    const pic = changeUsrPic();

    const rightDiv = document.querySelector('.settingsIconDiv, .accountSettingsOptions, .welcome, .newMessage');
    if (rightDiv) {
        rightDiv.innerHTML = '';
        rightDiv.classList.remove('settingsIconDiv');
        rightDiv.classList.add('accountSettingsOptions');

        rightDiv.append(username, pass, email, pic);
    }
}

export { loadAccSettingsOptions };

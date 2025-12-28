function delAccount() {
    const delAcc = document.createElement('div');
    delAcc.classList.add('accountSettingsOptionContainer');
    delAcc.id = 'delAccOption';

    const delAccTxt = document.createElement('p');
    delAccTxt.textContent = 'Delete your Account';

    delAcc.appendChild(delAccTxt);
    
    return delAcc;
}

function loadDel() {
    const rightDiv = document.querySelector('.settingsIconDiv, .accountSettingsOptions')
    const del = delAccount();

    if (rightDiv) {
        rightDiv.innerHTML = '';
        rightDiv.appendChild(del);
    }
}

export { loadDel }
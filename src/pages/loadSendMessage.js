import profile from '../images/profile_icon.png';

function loadRecipient() {
    const container = document.createElement('div');
    container.classList.add('recipient');

    const textDiv = document.createElement('div');
    textDiv.classList.add('recipientText');

    const text = document.createElement('label');
    text.htmlFor = 'recipientName';
    text.textContent = 'To:';
    
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('recipientNameDiv');

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'recipientName';

    textDiv.appendChild(text);
    inputDiv.appendChild(input);
    container.append(textDiv, inputDiv);

    return container;
}

function loadSuggestions() {
    const container = document.createElement('div');
    container.classList.add('suggestions');

    const textDiv = document.createElement('div');
    textDiv.classList.add('suggestionsText');

    const text = document.createElement('p');
    text.textContent = 'Suggestions:';

    textDiv.appendChild(text);
    container.appendChild(textDiv);

    for (let i = 0; i <= 2; i++) {
        const usrContainer = document.createElement('div');
        usrContainer.classList.add('suggestionsUsrContainer');

        const usrInfo = document.createElement('div');
        usrInfo.classList.add('usrInfo');

        const usrImg = document.createElement('img')
        usrImg.src = profile;
        usrImg.width = 70;
        usrImg.height = 70;

        const usrName = document.createElement('p');
        usrName.textContent = `User${i}`;

        const chatStartDiv = document.createElement('div'); 
        chatStartDiv.classList.add('chatStartText');

        const chatStart = document.createElement('p');
        chatStart.textContent = `Start a new chat with User${i}`;

        usrInfo.append(usrImg, usrName);
        chatStartDiv.appendChild(chatStart);

        usrContainer.append(usrInfo, chatStartDiv);

        container.appendChild(usrContainer);
    }

    return container;
}
    
    function loadSendMessage() {
        const recipient = loadRecipient();
        const suggestions = loadSuggestions();
        const welcome = document.querySelector('.welcome');
        welcome.innerHTML = ''; 
        welcome.classList.remove('welcome');
        welcome.classList.add('newMessage');

        welcome.append(recipient, suggestions);
    }    
    
    export { loadSendMessage };
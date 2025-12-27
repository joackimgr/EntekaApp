import sad from '../images/sad_emoji.png'
import profile from "../images/profile_icon.png";

function loadChats() {
    const chatsDiv = document.createElement('div');
    chatsDiv.classList.add('chats');
    
    const sadEmojiDiv = document.createElement('div');
    sadEmojiDiv.classList.add('sadEmoji');

    const sadEmojiImg = document.createElement('img');
    sadEmojiImg.src = sad;
    sadEmojiImg.alt = 'sad_emoji';
    sadEmojiImg.width = 70;
    sadEmojiImg.height = 70;

    const noChatsDiv = document.createElement('div');
    noChatsDiv.classList.add('noChats');

    const noChatsTxt = document.createElement('p');
    noChatsTxt.textContent = 'You have no chats yet.';

    sadEmojiDiv.appendChild(sadEmojiImg);
    noChatsDiv.appendChild(noChatsTxt);

    chatsDiv.append(sadEmojiDiv, noChatsDiv);

    return chatsDiv;
}

function loadWelcome() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');

    const usrIconDiv = document.createElement('div');
    usrIconDiv.classList.add('userIcon');

    const usrIconImg = document.createElement('img');
    usrIconImg.src = profile;
    usrIconImg.alt = 'profile_icon';
    usrIconImg.width = 170;
    usrIconImg.height = 170;

    const welcomeTxtDiv = document.createElement('div');
    welcomeTxtDiv.classList.add('welcomeText');

    const welcomeText = document.createElement('p');
    welcomeText.textContent = 'Hello, User!';

    const startChatBtnDiv = document.createElement('div');
    startChatBtnDiv.classList.add('startChatBtn');

    const startChatBtn = document.createElement('button');
    startChatBtn.textContent = 'Start a new chat!';

    usrIconDiv.appendChild(usrIconImg);
    welcomeTxtDiv.appendChild(welcomeText);
    startChatBtnDiv.appendChild(startChatBtn);

    welcomeDiv.append(usrIconDiv, welcomeTxtDiv, startChatBtnDiv);

    return welcomeDiv;
}

function loadHomeSection() {
    const chats = loadChats();
    const welcome = loadWelcome();
    const section = document.createElement('div');
    section.classList.add('section');
    const content = document.getElementById('content');

    section.append(chats, welcome);
    content.append(section);
}

export {loadHomeSection};
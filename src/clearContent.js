export function clearContent() {
    const content = document.querySelector('.welcome, .newMessage');
    if (content) {
        content.innerHTML = '';
    }
};
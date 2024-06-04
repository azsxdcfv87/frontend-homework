const socket = io();

const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        const timestamp = getCurrentTime();
        socket.emit('chat message', message, timestamp);
        messageInput.value = '';
    }
});

socket.on('chat message', (message, timestamp) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'chatroom-message';

    const timestampSpan = document.createElement('div');
    timestampSpan.className = 'timestamp';
    timestampSpan.textContent = timestamp;

    const contentSpan = document.createElement('div');
    contentSpan.className = 'chatroom-content-txt';
    contentSpan.textContent = message;

    messageElement.appendChild(timestampSpan);
    messageElement.appendChild(contentSpan);

    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
});


function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
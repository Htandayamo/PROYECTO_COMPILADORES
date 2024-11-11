let accounts = [
    { id: 1, name: 'Administración', messages: [] },
    { id: 2, name: 'Restaurante Universitario', messages: [] },
    { id: 3, name: 'Departamento de TI', messages: [] },
    { id: 4, name: 'Facultad de Salud', messages: [] },
    { id: 5, name: 'Facultad de Ingeniería', messages: [] },
    { id: 6, name: 'Facultad de Empresariales', messages: [] },
    { id: 7, name: 'Facultad de Teología', messages: [] },
    { id: 8, name: 'Departamento de Finanzas', messages: [] },
    { id: 9, name: 'Departamento de Marketing', messages: [] },
    { id: 10, name: 'Facultad de Humanidades', messages: [] },
    { id: 11, name: 'Biblioteca UAB', messages: [] }
];
let currentChat = null;

// Función para crear una cuenta dinámica
function createAccount(name) {
    const account = { id: accounts.length + 1, name: name, messages: [] };
    accounts.push(account);
    displayChats();
}

// Función para mostrar la lista de chats, incluyendo departamentos y cuentas creadas
function displayChats() {
    const chatList = document.getElementById('chat-list');
    chatList.innerHTML = '';
    accounts.forEach(account => {
        const chatItem = document.createElement('div');
        chatItem.textContent = account.name;
        chatItem.classList.add('chat-item');
        chatItem.onclick = () => openChat(account);
        chatList.appendChild(chatItem);
    });
}

// Función para abrir un chat
function openChat(account) {
    currentChat = account;
    document.getElementById('chat-title').textContent = account.name;
    document.getElementById('chat-window').style.display = 'flex';
    displayMessages();
}

// Función para mostrar mensajes
function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    currentChat.messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg.text;
        messageElement.classList.add('message', msg.type === 'sent' ? 'sent' : 'received');
        messagesDiv.appendChild(messageElement);
    });
}

// Evento para enviar un mensaje
document.getElementById('send-message').onclick = () => {
    const messageInput = document.getElementById('message-input');
    if (messageInput.value) {
        currentChat.messages.push({ text: messageInput.value, type: 'sent' });
        displayMessages();
        messageInput.value = '';
    }
};

// Evento para crear una cuenta
document.getElementById('create-account').onclick = () => {
    const accountName = prompt('Introduce el nombre de la cuenta:');
    if (accountName) {
        createAccount(accountName);
    }
};

// Inicializar chats
displayChats();

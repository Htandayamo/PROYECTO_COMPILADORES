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

// Función para realizar la búsqueda de departamentos
function filterChats() {
    const query = document.getElementById("search-chat").value.toLowerCase();
    const chatItems = document.getElementsByClassName("chat-item");
    for (let item of chatItems) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "block" : "none";
    }
}

// Evento para enviar un mensaje
document.getElementById('send-message').onclick = () => {
    const messageInput = document.getElementById('message-input');
    if (messageInput.value) {
        currentChat.messages.push({ text: messageInput.value, type: 'sent' });
        displayMessages();
        messageInput.value = '';
    }
}

// Evento para crear una cuenta
document.getElementById('create-account').onclick = () => {
    const accountName = prompt('Introduce el nombre de la cuenta:');
    if (accountName) {
        createAccount(accountName);
    }
}

// Función para abrir el chat con un nombre específico
function openChatByName(chatName) {
    document.getElementById('chat-title').textContent = chatName;
    document.getElementById('careers-list').innerHTML = ''; // Oculta las carreras cuando se abre un chat específico
    document.getElementById('careers-list').style.display = 'none'; // Oculta el contenedor de carreras
}

// Función para mostrar las carreras de una facultad seleccionada
function showFacultyCareers(facultyName, careers) {
    // Cambia el título en el área principal
    document.getElementById('chat-title').textContent = facultyName;
    
    // Selecciona el contenedor de la lista de carreras y lo limpia
    const careersList = document.getElementById('careers-list');
    careersList.innerHTML = ''; // Limpia la lista antes de agregar las nuevas carreras
    careersList.style.display = 'block'; // Muestra el contenedor
    
    // Agrega cada carrera en la lista
    careers.forEach(career => {
        const careerItem = document.createElement('div');
        careerItem.classList.add('chat-item');
        careerItem.textContent = career;
        careerItem.onclick = () => openChatByName(career); // Define la acción al hacer clic en la carrera
        careersList.appendChild(careerItem);
    });
};


// Inicializar chats
displayChats

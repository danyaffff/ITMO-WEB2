const message = document.getElementById('message');
const messages = document.getElementById('messages');

const socket = io();

function send() {
  socket.emit('message', message.value);
}

socket.on('connect', () => {
  console.log('socket connected');
});

socket.on('disconnect', () => {
  console.log('socket disconnected');
});

socket.on('message', (message) => {
  console.log('received:', message);
  receiveMessage(message);
});

function receiveMessage(message) {
  messages.appendChild(createMessage(message));
}

function createMessage(message) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
}
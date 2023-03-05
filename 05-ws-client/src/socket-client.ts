import { Manager, Socket } from 'socket.io-client';

let socket: Socket;

export const connectToServer = (token: string) => {
  const manager = new Manager('localhost:3000/socket.io/socket.io.js', {
    extraHeaders: {
      authentication: token
    }
  });
  // localhost:3000/socket.io/socket.io.js

  // const socket = manager.socket('/'); //Recibe el namespace, el '/' conecta al root 
  // console.log('socket', socket);
  socket?.removeAllListeners();
  socket = manager.socket('/');

  addListeners();
};


const addListeners = () => {
  const serverStatusLabel = document.querySelector<HTMLSpanElement>('#server-status')!; //!Indica que siempre va a existir
  const clientsUL = document.querySelector<HTMLUListElement>('#clients-ul')!;
  const messageForm = document.querySelector<HTMLFormElement>('#message-form')!;
  const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;
  const messagesUL = document.querySelector<HTMLUListElement>('#messages-ul')!;

  // socket.on(): Escuchar el servidor
  // socket.emit(): Enviar al servidor

  socket.on('connect', () => {
      serverStatusLabel.innerHTML = 'connected';
  });

  socket.on('disconnect', () => {
      serverStatusLabel.innerHTML = 'disconnected';
  });

  socket.on('clients-updated', (clients: string[]) => {
    console.log(clients)
    let clientsHtml = '';

    clients.forEach( clientId => {
      clientsHtml += `
        <li>${clientId}</li>
      `
    });

    clientsUL.innerHTML = clientsHtml;
  });

  socket.on('message-from-server', (payload: { fullName: string, message: string }) => {
    const newMessage = `
    <li>
      <strong>${payload.fullName}</strong>
      <span>${payload.message}</span>
    </li>`;

    const li = document.createElement('li');
    li.innerHTML = newMessage;
    messagesUL.append(li);
  })

  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(messageInput.value.trim().length <= 0) return;

    socket.emit('message-from-client', {
      id: 'Yo!!', 
      message: messageInput.value
    })
    
    messageInput.value = '';
  });
}
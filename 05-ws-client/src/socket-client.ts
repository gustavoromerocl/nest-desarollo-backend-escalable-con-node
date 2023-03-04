import { Manager, Socket } from 'socket.io-client';

export const connectToServer = () => {
  const manager = new Manager('localhost:3000/socket.io/socket.io.js');
  // localhost:3000/socket.io/socket.io.js

  const socket = manager.socket('/'); //Recibe el namespace, el '/' conecta al root 
  // console.log('socket', socket);

  addListeners( socket );
};


const addListeners = (socket: Socket) => {
  const serverStatusLabel = document.querySelector<HTMLSpanElement>('#server-status')!; //!Indica que siempre va a existir
  const clientsUL = document.querySelector<HTMLOListElement>('#clients-ul')!;
  const messageForm = document.querySelector<HTMLFormElement>('#message-form')!;
  const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;

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
  })

  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(messageInput.value.trim().length <= 0) return;

    socket.emit('message-from-client', {
      id: 'Yo!!', 
      message: messageInput.value
    })
    
    messageInput.value = '';
  })
}
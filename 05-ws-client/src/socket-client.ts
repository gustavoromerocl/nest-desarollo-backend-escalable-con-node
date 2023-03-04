import { Manager, Socket } from 'socket.io-client';

export const connectToServer = () => {
  const manager = new Manager('localhost:3000/socket.io/socket.io.js');
  // localhost:3000/socket.io/socket.io.js

  const socket = manager.socket('/'); //Recibe el namespace, el '/' conecta al root 
  console.log('socket', socket);

  addListeners( socket );
};


const addListeners = (socket: Socket) => {
  const serverStatusLabel = document.querySelector('#server-status');
  const clientsUL = document.querySelector('#clients-ul');
  //#clients-ul

  // socket.on(): Escuchar el servidor
  // socket.emit(): Enviar al servidor

  socket.on('connect', () => {
    if(serverStatusLabel)
      serverStatusLabel.innerHTML = 'connected';
  });

  socket.on('disconnect', () => {
    if(serverStatusLabel)
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

    if(clientsUL)
    clientsUL.innerHTML = clientsHtml;
  })
}
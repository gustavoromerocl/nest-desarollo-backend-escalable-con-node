import { Manager } from 'socket.io-client';

export const connectToServer = () => {

const manager = new Manager('localhost:3000/socket.io/socket.io.js');
// localhost:3000/socket.io/socket.io.js

const socket = manager.socket('/'); //Recibe el namespace, el '/' conecta al root 
console.log('socket', socket);
};

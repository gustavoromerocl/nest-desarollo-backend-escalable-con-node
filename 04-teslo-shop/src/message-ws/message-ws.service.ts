import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: Socket;
}

@Injectable()
export class MessageWsService {
  private connectedClients: ConnectedClients = {}

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }

  removeclient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients() {
    return Object.keys(this.connectedClients)
  }
}

import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessageWsService } from './message-ws.service';

@WebSocketGateway({ cors: true })
export class MessageWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly messageWsService: MessageWsService
  ) { }

  handleConnection(client: Socket, ...args: any[]) {
    this.messageWsService.registerClient(client);

    console.log({conectados: this.messageWsService.getConnectedClients()})
  }
  handleDisconnect(client: Socket) {
    this.messageWsService.removeclient(client.id);
  }
}
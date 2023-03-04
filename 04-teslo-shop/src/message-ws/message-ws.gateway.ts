import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { newMessageDto } from './dtos/new-message.dto';
import { MessageWsService } from './message-ws.service';

@WebSocketGateway({ cors: true })
export class MessageWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  constructor(
    private readonly messageWsService: MessageWsService
  ) { }

  handleConnection(client: Socket, ...args: any[]) {
    this.messageWsService.registerClient(client);

    // console.log({conectados: this.messageWsService.getConnectedClients()})

    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.messageWsService.removeclient(client.id);

    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());
  }

  //message-from-client
  @SubscribeMessage('message-from-client')
  onMessageFromClient( client: Socket, payload: newMessageDto) {
    console.log(client.id, payload)
  }
}
import { JwtService } from '@nestjs/jwt';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtPayload } from 'src/auth/interfaces';
import { newMessageDto } from './dtos/new-message.dto';
import { MessageWsService } from './message-ws.service';

@WebSocketGateway({ cors: true })
export class MessageWsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  constructor(
    private readonly messageWsService: MessageWsService,
    private readonly jwtService: JwtService,
  ) { }

  handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    // console.log('token', token);
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token);
    } catch (error) {
      client.disconnect();
      return;
    }

    console.log({payload})

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
  onMessageFromClient(client: Socket, payload: newMessageDto) {
    //Responde solo al cliente inicial
    // client.emit('message-from-server', {
    //   fullName: 'Soy yo',
    //   message: payload.message || 'no message'
    // })

    //Responde a todos menos alcliente inicial
    // client.broadcast.emit('message-from-server', {
    //   fullName: 'Soy yo',
    //   message: 'mensajes para todos menos para ti' || 'no message'
    // })

    // this.wss.to(clientID) 

    //Responde a todops incluido el cliente inicial
    this.wss.emit('message-from-server', {
      fullName: 'Soy yo',
      message: 'mensajes para todos' || 'no message'
    })

  }
}
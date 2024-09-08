import { IncomingMessage } from 'node:http';
import WebSocket from 'ws';
import { DbInterface } from '../abstract/db-interface';
import { RequestMessageType } from '../enums/request-message-type.enum';
import { LoginRequest } from '../models/login-request';
import { RequestMessage } from '../models/request-message';
import { ResponseMessage } from '../models/response-message';
import { ResponseMessageType } from '../enums/response-message-type.enum';

export class MessageController {
  constructor(private db: DbInterface) {}

  handleRequest(
    message: RequestMessage,
    wss: WebSocket.Server<typeof WebSocket, typeof IncomingMessage>,
    sendMsg: (message: ResponseMessage) => void,
  ) {
    const data = JSON.parse(message.data);
    console.log('income message: ', message);
    switch (message.type) {
      case RequestMessageType.REG: {
        console.log('reg');
        this.cmdReg(data, sendMsg);
        break;
      }
      // case MessageType.UPDATE_WINNERS: {
      //   console.log('update_winners');
      //   break;
      // }
    }
  }

  cmdReg(user: LoginRequest, sendMsg: (message: ResponseMessage) => void): void {
    this.db.loginUser(user).then((res) => {
      sendMsg({ type: ResponseMessageType.REG, data: JSON.stringify(res), id: 0 });
    });
  }
}

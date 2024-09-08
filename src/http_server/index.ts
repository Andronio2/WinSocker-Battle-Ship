import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { MessageController } from './controllers/message-controller';
import { Db } from './db/db';
import { ResponseMessage } from './models/response-message';

export const httpServer = createServer({});

const db = new Db();
const mc = new MessageController(db);

const wss = new WebSocketServer({ server: httpServer });
wss.on('connection', function connection(ws) {
  console.log('connection');
  const sendMsg = (msg: ResponseMessage) => {
    console.log('outcome message: ', msg);
    ws.send(JSON.stringify(msg));
  };

  ws.on('message', (msg: string) => mc.handleRequest(JSON.parse(msg), wss, sendMsg));
  ws.on('error', console.error);

  // ws.send('{}');
});

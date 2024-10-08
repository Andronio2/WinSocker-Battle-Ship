import 'dotenv/config';
import { httpServer } from './src/http_server/index.ts';

const HTTP_PORT = process.env.PORT || 111;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

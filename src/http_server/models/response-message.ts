import { ResponseMessageType } from '../enums/response-message-type.enum';

export interface ResponseMessage {
  type: ResponseMessageType;
  data: string;
  id: number;
}

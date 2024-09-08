import { RequestMessageType } from '../enums/request-message-type.enum';

export interface RequestMessage {
  type: RequestMessageType;
  data: string;
  id: number;
}

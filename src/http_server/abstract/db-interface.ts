import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

export abstract class DbInterface {
  abstract loginUser(user: LoginRequest): Promise<LoginResponse>;
}

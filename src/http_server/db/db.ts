import { DbInterface } from '../abstract/db-interface';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

interface DbStructure {
  userList: LoginRequest[];
}

const db: DbStructure = {
  userList: [],
};

export class Db implements DbInterface {
  loginUser(userRequest: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve) => {
      const userindex = db.userList.findIndex((user) => user.name === user.name);
      if (userindex === -1) {
        db.userList.push(userRequest);
        resolve({ name: userRequest.name, index: db.userList.length - 1, error: false, errorText: '' });
      } else {
        const user = db.userList[userindex];
        if (user.password === userRequest.password) {
          resolve({ name: user.name, index: userindex, error: false, errorText: '' });
        } else {
          resolve({ name: user.name, index: 0, error: true, errorText: 'Wrong password' });
        }
      }
    });
  }
}

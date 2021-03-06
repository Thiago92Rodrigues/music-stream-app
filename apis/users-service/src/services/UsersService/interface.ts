import { AuthenticateUserRequest, AuthenticateUserResponse, CreateUserRequest, DeleteUserRequest, GetUserRequest, UpdateUserRequest } from './dtos';
import User from '@entities/User';

export default interface IUsersService {
  get(request: GetUserRequest): Promise<User>;
  create(request: CreateUserRequest): Promise<User>;
  update(request: UpdateUserRequest): Promise<User>;
  delete(request: DeleteUserRequest): Promise<void>;
  authenticate(request: AuthenticateUserRequest): Promise<AuthenticateUserResponse>;
}

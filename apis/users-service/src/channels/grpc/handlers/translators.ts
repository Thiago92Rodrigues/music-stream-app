import { status as grpcStatus } from 'grpc';

import { User, AuthenticateUserResponse } from '../proto/users_service_pb';
import { StatusCode } from '@constants/index';
import UserEntity from '@entities/User';

export function translateUserEntity(userEntity: UserEntity): User {
  const user = new User();

  user.setId(userEntity.id);
  user.setUsername(userEntity.username);
  user.setEmail(userEntity.email);
  user.setPassword(userEntity.password);

  return user;
}

export function translateAuthenticateUser(token: string, userEntity: UserEntity): AuthenticateUserResponse {
  const authenticateUserResponse = new AuthenticateUserResponse();

  authenticateUserResponse.setToken(token);
  authenticateUserResponse.setUser(translateUserEntity(userEntity));

  return authenticateUserResponse;
}

export function translateGrpcError(statusCode: StatusCode): grpcStatus {
  switch (statusCode) {
    case StatusCode.BAD_REQUEST:
      return grpcStatus.INVALID_ARGUMENT;
    case StatusCode.NOT_FOUND:
      return grpcStatus.NOT_FOUND;
    case StatusCode.INTERNAL_SERVER_ERROR:
      return grpcStatus.INTERNAL;
    default:
      return grpcStatus.UNKNOWN;
  }
}

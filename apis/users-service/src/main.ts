import 'dotenv/config';

import { grpcChannel } from '@channels/index';
import { database } from '@database/index';
import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';

grpcChannel.start();

process.on('SIGINT', function onSigint() {
  loggerProvider.info('Got SIGINT. Graceful shutdown.');
  shutdown();
});

process.on('SIGTERM', function onSigterm() {
  loggerProvider.info('Got SIGTERM. Graceful shutdown.');
  shutdown();
});

process.on('unhandledRejection', (error: Error, promise: Promise<any>) => {
  // loggerProvider.error('Unhandled rejection caught.', error);
  throw error;
});

process.on('uncaughtException', (error: Error) => {
  // loggerProvider.error('Unhandled exception caught.', error);

  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    shutdown(1);
  }
});

async function shutdown(exitCode = 0): Promise<void> {
  await grpcChannel.stop();
  await database.close();

  process.exitCode = exitCode;
  process.exit(exitCode);
}

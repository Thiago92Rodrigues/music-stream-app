import path from 'path';

export default {
  authentication: {
    secret: process.env.SECRET || 'top-secret',
    expiresIn: '1d',
  },

  channels: {
    rest: {
      host: '0.0.0.0',
      port: Number(process.env.REST_PORT) || 8080,
      limitRequests: Boolean(process.env.REST_LIMIT_REQUESTS) || false,
    },

    staticFiles: {
      host: '0.0.0.0',
      port: Number(process.env.STATIC_FILES_PORT) || 9090,
    },
  },

  integrations: {
    musics_service: process.env.MUSICS_SERVICE_ADDRESS || 'localhost:6565',
    playlists_service: process.env.PLAYLISTS_SERVICE_ADDRESS || 'localhost:6567',
    users_musics_service: process.env.USERS_MUSICS_SERVICE_ADDRESS || 'localhost:6568',
    users_service: process.env.USERS_SERVICE_ADDRESS || 'localhost:6569',
  },

  logging: {
    redirect: 'console', // 'console' / 'file'
    filePath: 'logs/error.log',
  },

  query: {
    defaultLimit: 10,
    defaultOffset: 0,
  },

  staticFiles: {
    path: path.resolve(__dirname, '..', 'staticFiles'),
  },

  storage: {
    path: path.resolve(__dirname, '..', '..', '..', '..', 'database', 'storage'),
  },
};

import 'dotenv/config';
import path from 'path';

module.exports = {
  client: 'pg',
  connection: process.env.POSTGRES_ADDRESS,
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'SQL', 'migrations'),
  },
  useNullAsDefault: true,
};

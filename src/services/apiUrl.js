import env from '../../config/env';

export const apiUrl = env.isDev
  ? 'http://localhost:4000'
  : 'https://trello-server.vercel.app';

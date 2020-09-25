const isDev = process.env.NODE_ENV !== 'production';

const env = {
  isDev,
  apiUrl: isDev ? process.env.API_URL_DEV : process.env.API_URL,
};

export default env;

import axios from 'axios';
import env from '../../config/env';

const { apiUrl } = env;

export const getBoards = async () => {
  try {
    const { data: boards } = await axios.get(`${apiUrl}/boards`);

    return boards;
  } catch (e) {
    if (e.response) {
      throw e.response.data.message;
    }
    if (e.request) {
      throw 'something went wrong try later';
    }

    throw e.message;
  }
};

export const createBoard = async ({ title, picture }) => {
  try {
    const { data: boardCreated } = await axios.post(`${apiUrl}/boards`, {
      title,
      picture,
    });

    return boardCreated;
  } catch (e) {
    if (e.response) {
      throw e.response.data.message;
    }
    if (e.request) {
      throw 'something went wrong try later';
    }

    throw e.message;
  }
};

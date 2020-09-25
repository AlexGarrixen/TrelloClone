import axios from 'axios';
import env from '../../config/env';
import getAxiosError from '../utils/getAxiosError';

const { apiUrl } = env;

export const getBoards = async (boardId) => {
  const params = {};

  if (boardId) params.boardId = boardId;

  try {
    const { data: boards } = await axios.get(`${apiUrl}/boards`, {
      params,
    });

    return boards;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
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
    const message = getAxiosError(e);
    throw message;
  }
};

import axios from 'axios';
import getAxiosError from '../utils/getAxiosError';
import { apiUrl } from './apiUrl';

export const getBoardLists = async (boardId) => {
  try {
    const { data: lists } = await axios.get(`${apiUrl}/lists`, {
      params: {
        boardId,
      },
    });

    return lists;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const createList = async (boardId, { title }) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/lists`,
      { title },
      {
        params: {
          boardId,
        },
      }
    );

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const createCard = async (listId, { title }) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/cards`,
      { title },
      {
        params: {
          listId,
        },
      }
    );

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const createCardComment = async (cardId, comment) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/comments`,
      method: 'PUT',
      data: {
        comment,
      },
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const createCardLabel = async (cardId, label) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/labels`,
      method: 'PUT',
      data: {
        title: label.title,
        color: label.color,
      },
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const updateCardsList = async (listId, cards) => {
  try {
    const { data } = await axios.put(`${apiUrl}/lists/${listId}`, { cards });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const updateCard = async (
  cardId,
  { title, description, listId, picture }
) => {
  let dataBody = {};

  if (title) dataBody.title = title;
  if (description) dataBody.description = description;
  if (listId) dataBody.listId = listId;
  if (picture) dataBody.picture = picture;

  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}`,
      method: 'PUT',
      data: dataBody,
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const updateBoard = async (boardId, { title, description }) => {
  let dataBody = {};

  if (title) dataBody.title = title;
  if (description) dataBody.description = description;

  try {
    const { data } = await axios({
      url: `${apiUrl}/boards/${boardId}`,
      method: 'PUT',
      data: dataBody,
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const updateCardComment = async (cardId, commentId, newComment) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/comments/${commentId}`,
      method: 'PUT',
      data: {
        newComment,
      },
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteList = async (listId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/lists/${listId}`);

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteCardComment = async (cardId, commentId) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/comments/${commentId}`,
      method: 'DELETE',
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteCardAttachment = async (cardId, publicIdAttachment) => {
  try {
    const { data } = await axios({
      method: 'DELETE',
      url: `${apiUrl}/cards/${cardId}/attachments`,
      data: {
        publicId: publicIdAttachment,
      },
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteCardLabel = async (cardId, labelId) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/labels/${labelId}`,
      method: 'DELETE',
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}`,
      method: 'DELETE',
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const deleteBoard = async (boardId) => {
  try {
    const { data } = await axios({
      url: `${apiUrl}/boards/${boardId}`,
      method: 'DELETE',
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

export const uploadCardAttachment = async (cardId, file) => {
  const formData = new FormData();
  formData.append('attachment', file);
  formData.append('date', new Date().getDate());

  try {
    const { data } = await axios({
      url: `${apiUrl}/cards/${cardId}/attachments`,
      method: 'PUT',
      data: formData,
    });

    return data;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

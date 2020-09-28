import axios from 'axios';
import getAxiosError from '../utils/getAxiosError';
import { apiUrl } from './apiUrl';

export const deleteAttachment = async (attachmentId) => {
  try {
    const { data: attachmentDeleted } = await axios({
      url: `${apiUrl}/attachments`,
      method: 'DELETE',
      data: { attachmentId },
    });

    return attachmentDeleted;
  } catch (e) {
    const message = getAxiosError(e);
    throw message;
  }
};

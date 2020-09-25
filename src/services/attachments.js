import axios from 'axios';
import env from '../../config/env';
import getAxiosError from '../utils/getAxiosError';

const { apiUrl } = env;

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

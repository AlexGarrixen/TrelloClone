import axios from 'axios';
import env from '../../config/env';

const { apiUrl } = env;

export const uploadAttachment = async (file, onUploadProgress) => {
  const formData = new FormData();
  formData.append('attachment', file);

  try {
    const { data: attachmentUploaded } = await axios.post(
      `${apiUrl}/attachments`,
      formData,
      {
        onUploadProgress,
      }
    );

    return attachmentUploaded;
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

export const deleteAttachment = async (attachmentId) => {
  try {
    const { data: attachmentDeleted } = await axios({
      url: `${apiUrl}/attachments`,
      method: 'DELETE',
      data: { attachmentId },
    });

    return attachmentDeleted;
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

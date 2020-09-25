import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useUploadAttachment from './useUploadAttachment';
import { getAttachmentUploaded } from '../../redux/actions/board';
import env from '../../../config/env';

const useCardAttachmentUpload = () => {
  const { cardSelected } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const { apiUrl } = env;

  const {
    isUploading,
    error,
    data,
    progress,
    filename,
    requestUploadFile,
  } = useUploadAttachment(
    `${apiUrl}/cards/${cardSelected._id}/attachments`,
    'PUT'
  );

  const handleUploadAttachment = ({ target }) =>
    target.files.length && requestUploadFile(target.files[0]);

  useEffect(() => {
    if (data !== null) {
      const { newCard, attachmentUploaded } = data;
      const { path, publicId } = attachmentUploaded;
      const { attachments } = newCard;

      dispatch(getAttachmentUploaded({ path, publicId }, attachments));
    }
  }, [data]);

  return {
    error,
    isUploading,
    progress,
    filename,
    handleUploadAttachment,
  };
};

export default useCardAttachmentUpload;

import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  receiveUpdatedPicture,
  receiveError,
} from '../../../redux/actions/board';
import { receiveUpdatedPictureOfBoard as boards_receiveUpdatedPictureOfBoard } from '../../../redux/actions/boards';
import { receiveUpdatedPictureOfBoard as board_receiveUpdatedPictureOfBoard } from '../../../redux/actions/requestedBoard';
import { apiUrl } from '../../../services/apiUrl';
import useBoard from './useBoard';
import useUploadAttachment from '../useUploadAttachment';

const useUpdateBoardPicture = () => {
  const dispatch = useDispatch();
  const { _id } = useBoard();

  const {
    data,
    filename,
    requestUploadFile,
    error,
    isUploading,
    progress,
  } = useUploadAttachment(`${apiUrl}/boards/${_id}/attachment`, 'PUT');

  const handleUploadAttachment = useCallback(
    ({ target }) => target.files.length && requestUploadFile(target.files[0]),
    [data]
  );

  useEffect(() => {
    if (data !== null) {
      const { picture } = data.newBoard;
      dispatch(board_receiveUpdatedPictureOfBoard(_id, picture));
      dispatch(boards_receiveUpdatedPictureOfBoard(_id, picture));
      dispatch(receiveUpdatedPicture(picture));
    }
  }, [data]);

  useEffect(() => {
    if (error)
      dispatch(receiveError('there was a problem uploading the attachment'));
  }, [error]);

  return {
    filename,
    handleUploadAttachment,
    isUploading,
    progress,
  };
};

export default useUpdateBoardPicture;

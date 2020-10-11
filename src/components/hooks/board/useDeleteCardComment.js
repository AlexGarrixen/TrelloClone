import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestDeleteComment } from '../../../redux/actions/board';

const useDeleteCardComment = (commentId) => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const handleDeleteComment = () =>
    dispatch(
      requestDeleteComment(commentId, {
        onRequest: () => setIsRequesting(true),
        onSuccessRequest: () => setIsRequesting(false),
      })
    );

  return {
    handleDeleteComment,
    isRequesting,
  };
};

export default useDeleteCardComment;

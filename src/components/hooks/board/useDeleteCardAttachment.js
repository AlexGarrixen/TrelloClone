import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestDeleteAttachment } from '../../../redux/actions/board';

const useDeleteCardAttachment = () => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const handleDeleteAttachment = (publicIdAttachment, attachmentId) =>
    dispatch(
      requestDeleteAttachment(publicIdAttachment, attachmentId, {
        onRequest: () => setIsRequesting(true),
        onSuccessRequest: () => setIsRequesting(false),
      })
    );

  return {
    handleDeleteAttachment,
    isRequesting,
  };
};

export default useDeleteCardAttachment;

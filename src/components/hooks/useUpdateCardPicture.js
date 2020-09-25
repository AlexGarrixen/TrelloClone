import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestUpdateCardPicture } from '../../redux/actions/board';

const useUpdateCardPicture = () => {
  const dispatch = useDispatch();
  const [isRequesting, setIsRequesting] = useState(false);

  const handleUpdatePicture = (path, publicId) =>
    dispatch(
      requestUpdateCardPicture(
        { path, publicId },
        {
          onRequest: () => setIsRequesting(true),
          onSuccessRequest: () => setIsRequesting(false),
        }
      )
    );

  return {
    handleUpdatePicture,
    isRequesting,
  };
};

export default useUpdateCardPicture;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestDeleteCard } from '../../../redux/actions/board';

const useDeleteCard = () => {
  const dispatch = useDispatch();
  const [isRequesting, setRequesting] = useState(false);

  const handleDeleteCard = () =>
    dispatch(
      requestDeleteCard({
        onRequest: () => setRequesting(true),
        onSuccessRequest: () => setRequesting(false),
      })
    );

  return { handleDeleteCard, isRequesting };
};

export default useDeleteCard;

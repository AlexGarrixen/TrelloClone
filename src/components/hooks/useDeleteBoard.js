import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestDeleteBoard } from '../../redux/actions/board';

const useDeleteBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isRequesting, setIsRequesting] = useState(false);

  const handleDeleteBoard = () =>
    dispatch(
      requestDeleteBoard({
        onRequest: () => setIsRequesting(true),
        onSuccessRequest: () => {
          setIsRequesting(false);
          history.replace('/');
        },
      })
    );

  return {
    isRequesting,
    handleDeleteBoard,
  };
};

export default useDeleteBoard;

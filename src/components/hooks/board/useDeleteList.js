import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestDeleteList } from '../../../redux/actions/board';

const useDeleteList = (listId) => {
  const [isRequesting, set] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteBoardList = () =>
    dispatch(
      requestDeleteList(listId, {
        onRequest: () => set(true),
        onSuccessRequest: () => set(false),
      })
    );

  return {
    isRequesting,
    handleDeleteBoardList,
  };
};

export default useDeleteList;

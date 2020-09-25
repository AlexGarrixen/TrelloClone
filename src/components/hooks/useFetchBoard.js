import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardLists } from '../../redux/actions/board';

const useFetchBoardLists = () => {
  const { params } = useRouteMatch();
  const { prevRequests, notFound } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const board = prevRequests[params.boardId];
  const [isFetching, setIsFetching] = useState(() => (!board ? true : false));
  const handleOnSuccessRequest = () => setIsFetching(false);

  useEffect(() => {
    if (!board)
      dispatch(fetchBoardLists(params.boardId, handleOnSuccessRequest));
  }, []);

  return {
    isFetching,
    notFound,
  };
};

export default useFetchBoardLists;
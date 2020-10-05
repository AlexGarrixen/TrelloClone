import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardLists, receiveUpdateBoard } from '../../redux/actions/board';

const useFetchBoardLists = () => {
  const { params } = useRouteMatch();
  const { notFound } = useSelector(({ board }) => board);
  const { boards } = useSelector(({ prevRequests }) => prevRequests);
  const dispatch = useDispatch();
  const board = boards[params.boardId];
  const [isFetching, setIsFetching] = useState(() => (!board ? true : false));
  const handleOnSuccessRequest = () => setIsFetching(false);

  useEffect(() => {
    if (!board)
      dispatch(fetchBoardLists(params.boardId, handleOnSuccessRequest));
    else
      dispatch(
        receiveUpdateBoard({
          boardId: board._id,
          title: board.title,
          description: board.description,
        })
      );
  }, []);

  return {
    isFetching,
    notFound,
  };
};

export default useFetchBoardLists;

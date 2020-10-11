import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestBoard,
  receivePreviousRequestedBoard,
} from '../../../redux/actions/board';

const useFetchBoardLists = () => {
  const { params } = useRouteMatch();

  const dispatch = useDispatch();

  const board = useSelector(
    ({ requestedBoard }) => requestedBoard.byId[params.boardId]
  );

  const [isFetching, setIsFetching] = useState(!board ? true : false);

  useEffect(() => {
    !board
      ? dispatch(requestBoard(params.boardId, () => setIsFetching(false)))
      : dispatch(receivePreviousRequestedBoard(board));
  }, []);

  return isFetching;
};

export default useFetchBoardLists;

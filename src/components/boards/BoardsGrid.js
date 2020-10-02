import React from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';
import Alert from '../ui/Alert';
import SkeletonBoards from '../layout/SkeletonBoards';

const BoardsGrid = () => {
  const { isFetching, data, error } = useSelector(({ boards }) => boards);

  if (error) return <Alert severity='error'>{error}</Alert>;

  if (isFetching) return <SkeletonBoards count={4} />;

  return (
    <ul className='boards-grid'>
      {data.map((board) => (
        <Board key={board._id} {...board} />
      ))}
    </ul>
  );
};

export default BoardsGrid;

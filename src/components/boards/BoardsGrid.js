import React from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';
import Alert from '../ui/Alert';

const BoardsGrid = () => {
  const { isFetching, data, error } = useSelector(({ boards }) => boards);

  if (error) return <Alert>{error}</Alert>;
  if (isFetching) return <p>Loading...</p>;

  return (
    <ul className='boards__grid'>
      {data.map((board) => (
        <Board key={board._id} {...board} />
      ))}
    </ul>
  );
};

export default BoardsGrid;

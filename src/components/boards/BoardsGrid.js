import React from 'react';
import Board from './Board';

const BoardsGrid = ({ boards }) => (
  <ul className='boards-grid'>
    {boards.map((board) => (
      <Board key={board._id} {...board} />
    ))}
  </ul>
);

export default BoardsGrid;

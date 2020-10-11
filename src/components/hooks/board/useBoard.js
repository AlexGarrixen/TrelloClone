import { useSelector } from 'react-redux';

const useBoard = () => {
  const board = useSelector(({ board }) => board);

  return board;
};

export default useBoard;

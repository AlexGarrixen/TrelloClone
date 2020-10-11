import { useDispatch } from 'react-redux';
import { resetBoard } from '../../../redux/actions/board';

const useResetBoard = () => {
  const dispatch = useDispatch();
  const handleBoardReset = () => dispatch(resetBoard());

  return { handleBoardReset };
};

export default useResetBoard;

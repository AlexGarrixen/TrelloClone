import { useSelector, useDispatch } from 'react-redux';
import { clearBoardError } from '../../redux/actions/board';

const useBoardError = () => {
  const { error } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const handleClearError = () => dispatch(clearBoardError());

  return {
    error,
    handleClearError,
  };
};

export default useBoardError;

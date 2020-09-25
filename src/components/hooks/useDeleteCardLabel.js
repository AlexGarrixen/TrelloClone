import { useDispatch } from 'react-redux';
import { requestDeleteLabel } from '../../redux/actions/board';

const useDeleteCardLabel = () => {
  const dispatch = useDispatch();
  const handleDeleteLabel = (labelId) => dispatch(requestDeleteLabel(labelId));

  return {
    handleDeleteLabel,
  };
};

export default useDeleteCardLabel;

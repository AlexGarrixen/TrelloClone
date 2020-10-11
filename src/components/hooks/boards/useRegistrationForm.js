import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowRegistrationModal } from '../../../redux/actions/boards';

const useRegistrationForm = () => {
  const dispatch = useDispatch();

  const { showRegistrationForm } = useSelector(({ boards }) => boards);

  const handleVisibility = useCallback(
    (isVisible) => () => dispatch(setShowRegistrationModal(isVisible)),
    [showRegistrationForm]
  );

  return {
    isVisible: showRegistrationForm,
    handleVisibility,
  };
};

export default useRegistrationForm;

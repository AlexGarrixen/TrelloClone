import { useSelector, useDispatch } from 'react-redux';
import { selectCard, removeSelectedCard } from '../../../redux/actions/board';

const useEditCardModal = () => {
  const { cardSelected } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const handleCardSelected = (cardId) => dispatch(selectCard(cardId));
  const handleCloseCardSelected = () => dispatch(removeSelectedCard());

  return {
    isOpen: Boolean(cardSelected),
    handleCardSelected,
    handleCloseCardSelected,
  };
};

export default useEditCardModal;

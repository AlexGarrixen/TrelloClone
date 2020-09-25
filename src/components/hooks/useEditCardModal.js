import { useSelector, useDispatch } from 'react-redux';
import {
  selectViewCard,
  closeViewCardSelected,
} from '../../redux/actions/board';

const useEditCardModal = () => {
  const { cardModalEditOpen } = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const handleCardSelected = (cardData) => dispatch(selectViewCard(cardData));
  const handleCloseCardSelected = () => dispatch(closeViewCardSelected());

  return {
    isOpen: cardModalEditOpen,
    handleCardSelected,
    handleCloseCardSelected,
  };
};

export default useEditCardModal;

import { useSelector } from 'react-redux';

const useCard = (cardId) => {
  const cardSelected = useSelector(({ board }) => board.cardSelected);
  const card = useSelector(({ cards }) => cards.byId[cardId || cardSelected]);

  return card;
};

export default useCard;

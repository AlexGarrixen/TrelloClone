import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-smooth-dnd';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Icons from '../icons';
import useEditCardModal from '../hooks/board/useEditCardModal';
import useCard from '../hooks/board/useCard';
import { isArray } from '../../utils/typeOf';

const Label = ({ color, title }) => <Badge color={color}>{title}</Badge>;

const CardItem = ({ id }) => {
  const card = useCard(id);
  const { handleCardSelected } = useEditCardModal();

  return (
    <Draggable>
      <Card
        className='board-list-card'
        title={card?.title || ''}
        picture={card?.picture.path || ''}
        onClick={() => handleCardSelected(id)}
      >
        <ul className='board-list-card__grid-labels'>
          {isArray(card?.labels) &&
            card.labels.map((label) => <Label key={label._id} {...label} />)}
        </ul>
        <div className='board-list-card__footer'>
          <p className='board-list-card__num-comments'>
            <Icons.Comment className='mr-2' />
            {card?.comments.length || '0'}
          </p>
          <p className='board-list-card__num-attachments'>
            <Icons.PaperClip className='mr-2' />{' '}
            {card?.attachments.length || '0'}
          </p>
        </div>
      </Card>
    </Draggable>
  );
};

CardItem.propTypes = {
  id: PropTypes.string,
};

Label.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};

export default CardItem;

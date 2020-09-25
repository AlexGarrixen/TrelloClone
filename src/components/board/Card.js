import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-smooth-dnd';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Icons from '../icons';
import useEditCardModal from '../hooks/useEditCardModal';
import { isArray } from '../../utils/typeOf';

const CardItem = ({
  _id,
  listId,
  title,
  description,
  listName,
  picture,
  labels,
  attachments,
  comments,
}) => {
  const { handleCardSelected } = useEditCardModal();
  const cardData = useMemo(
    () => ({
      _id,
      listId,
      title,
      description,
      listName,
      picture,
      labels,
      attachments,
      comments,
    }),
    [
      _id,
      listId,
      title,
      description,
      listName,
      picture,
      labels,
      attachments,
      comments,
    ]
  );

  return (
    <Draggable>
      <Card
        className='board-list-card'
        title={title}
        picture={picture?.path || ''}
        onClick={() => handleCardSelected(cardData)}
      >
        <ul className='board-list-card__grid-labels'>
          {isArray(labels) &&
            labels.map(({ _id, title, color }) => (
              <Badge key={_id} color={color}>
                {title}
              </Badge>
            ))}
        </ul>
        <div className='board-list-card__footer'>
          <p className='board-list-card__num-comments'>
            <Icons.Comment className='mr-2' />
            {comments.length}
          </p>
          <p className='board-list-card__num-attachments'>
            <Icons.PaperClip className='mr-2' /> {attachments.length}
          </p>
        </div>
      </Card>
    </Draggable>
  );
};

CardItem.propTypes = {
  _id: PropTypes.string,
  listId: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  listName: PropTypes.string,
  picture: PropTypes.shape({
    path: PropTypes.string,
    publicId: PropTypes.string,
  }),
  labels: PropTypes.array,
  attachments: PropTypes.array,
  comments: PropTypes.array,
};

export default CardItem;

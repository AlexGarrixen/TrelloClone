import React from 'react';
import { Draggable } from 'react-smooth-dnd';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Icons from '../icons';

const CardItem = () => (
  <Draggable>
    <Card className='board-list-card' title='Title'>
      <ul className='board-list-card__grid-labels'>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
      </ul>
      <div className='board-list-card__footer'>
        <p className='board-list-card__num-comments'>
          <Icons.Comment className='mr-2' /> 2
        </p>
        <p className='board-list-card__num-attachments'>
          <Icons.PaperClip className='mr-2' /> 1
        </p>
      </div>
    </Card>
  </Draggable>
);

export default CardItem;

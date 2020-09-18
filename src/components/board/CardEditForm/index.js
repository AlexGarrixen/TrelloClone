import React from 'react';
import Picture from './Picture';
import Header from './Header';
import Description from './Description';
import Attachments from './Attachments';
import Comments from './Comments';
import Actions from './Actions';
import ButtonIcon from '../../ui/IconButton';
import Icons from '../../icons';

const CardEditForm = () => (
  <div className='board-card-edit-form'>
    <ButtonIcon color='primary' className='board-card-edit-form__button-close'>
      <Icons.Close />
    </ButtonIcon>
    <Picture />
    <Header />
    <div className='board-card-edit-form__body'>
      <div className='board-card-edit-form__wrapper-description-and-comments'>
        <Description />
        <Attachments />
        <Comments />
      </div>
      <Actions />
    </div>
  </div>
);

export default CardEditForm;

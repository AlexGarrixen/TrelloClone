import React from 'react';
import Button from '../../ui/Button';

const Attachment = () => (
  <article className='board-card-edit-form__attachment'>
    <div className='board-card-edit-form__attachment-picture' />
    <div>
      <p className='board-card-edit-form__attachment-date'>Add july 5, 2020</p>
      <p className='board-card-edit-form__attachment-name'>Name attachment</p>
      <div className='board-card-edit-form__attachment-actions'>
        <Button variant='outlined'>Download</Button>
        <Button variant='outlined'>Delete</Button>
      </div>
    </div>
  </article>
);

export default Attachment;

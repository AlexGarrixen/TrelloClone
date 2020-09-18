import React from 'react';
import Icons from '../../icons';
import Attachment from './Attachemnt';

const Attachments = () => (
  <div className='board-card-edit-form__attachments'>
    <div className='board-card-edit-form__attachments-header'>
      <p>
        <Icons.FileAlt />
        <span className='board-card-edit-form__attachments-header-title'>
          Attachments
        </span>
      </p>
    </div>
    <ul>
      <Attachment />
      <Attachment />
      <Attachment />
    </ul>
  </div>
);

export default Attachments;

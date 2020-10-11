import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../icons';
import Attachment from './Attachemnt';
import { isArray } from '../../../utils/typeOf';

const Attachments = ({ attachments }) => {
  if (!attachments.length > 0) return null;

  return (
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
        {isArray(attachments) &&
          attachments.map((attachment) => (
            <Attachment key={attachment._id} {...attachment} />
          ))}
      </ul>
    </div>
  );
};

Attachments.propTypes = {
  attachments: PropTypes.array,
};

export default Attachments;

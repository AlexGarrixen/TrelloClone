import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../ui/TextField';
import Button from '../../ui/Button';
import Comment from './Comment';
import calculeHeightTextArea from '../../../utils/calculateHeightTextArea';
import useCreateCardComment from '../../hooks/board/useCreateCardComment';
import { isArray } from '../../../utils/typeOf';

const Comments = ({ comments }) => {
  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useCreateCardComment();

  return (
    <div className='board-card-edit-form__comments'>
      <div className='board-card-edit-form__comments-textarea-wrapper'>
        <TextField
          textArea
          fullWidth
          className='board-card-edit-form__comments-textfield'
          placeholder='Write a comment'
          value={form.comment}
          onChange={handleChange}
          name='comment'
          onKeyUp={({ target }) => calculeHeightTextArea(target)}
          rows={1}
        />
        <Button
          className='board-card-edit-form__comments-button-action'
          color='primary'
          onClick={handleSubmit}
          disabled={form.comment.length < 1}
        >
          {isRequesting ? 'Saving...' : 'Comment'}
        </Button>
      </div>
      <ul>
        {isArray(comments) &&
          comments.map((comment) => <Comment key={comment._id} {...comment} />)}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;

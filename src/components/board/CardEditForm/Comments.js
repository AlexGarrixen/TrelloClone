import React from 'react';
import TextField from '../../ui/TextField';
import Button from '../../ui/Button';
import Comment from './Comment';
import calculeHeightTextArea from '../../../utils/calculateHeightTextArea';

const Comments = () => (
  <div className='board-card-edit-form__comments'>
    <div className='board-card-edit-form__comments-textarea-wrapper'>
      <TextField
        textArea
        fullWidth
        className='board-card-edit-form__comments-textfield'
        placeholder='Write a comment'
        onKeyUp={({ target }) => calculeHeightTextArea(target)}
        rows={1}
      />
      <Button
        className='board-card-edit-form__comments-button-action'
        color='primary'
      >
        Comment
      </Button>
    </div>
    <ul>
      <Comment />
      <Comment />
    </ul>
  </div>
);

export default Comments;

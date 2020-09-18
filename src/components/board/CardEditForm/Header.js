import React from 'react';
import TextField from '../../ui/TextField';

const Header = () => (
  <div className='board-card-edit-form__header'>
    <TextField
      className='board-card-edit-form__textfield-title'
      placeholder='Write title'
      fullWidth
    />
    <p className='board-card-edit-form__list-name'>
      <span>in list </span> Name List
    </p>
  </div>
);

export default Header;

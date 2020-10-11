import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../ui/TextField';
import useUpdateCardTitle from '../../hooks/board/useUpdateCardTitle';

const Header = ({ listName }) => {
  const { form, handleChange, handleSubmit } = useUpdateCardTitle();

  return (
    <div className='board-card-edit-form__header'>
      <TextField
        className='board-card-edit-form__textfield-title'
        placeholder='Write title'
        value={form.title}
        onChange={handleChange}
        onBlur={handleSubmit}
        name='title'
        fullWidth
      />
      <p className='board-card-edit-form__list-name'>
        <span>in list </span> {listName}
      </p>
    </div>
  );
};

Header.proTypes = {
  listName: PropTypes.string,
};

export default Header;

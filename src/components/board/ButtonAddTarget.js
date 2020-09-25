import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Icons from '../icons';
import TextFieldEditing from './TextFieldEditing';
import useToggle from '../hooks/useToggle';
import useCreateCard from '../hooks/useCreateCard';

const ButtonAddTarget = ({ listId }) => {
  const [showRegisterForm, handleToggle] = useToggle(false);
  const { form, handleChange, handleSubmit, isRequesting } = useCreateCard(
    listId,
    handleToggle(false)
  );

  return showRegisterForm ? (
    <TextFieldEditing
      onRequestCancel={handleToggle()}
      onRequestSuccess={handleSubmit}
      placeholder='Add card title'
      buttonText={isRequesting ? 'Adding...' : 'Add card'}
      onChange={handleChange}
      name='title'
      value={form.title}
      disabledSuccessButton={form.title.length < 1}
    />
  ) : (
    <Button
      color='primary'
      endIcon={<Icons.Plus />}
      onClick={handleToggle()}
      fullWidth
    >
      Add another card
    </Button>
  );
};

ButtonAddTarget.propTypes = {
  listId: PropTypes.string,
};

export default ButtonAddTarget;

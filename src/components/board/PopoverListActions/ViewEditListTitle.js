import React from 'react';
import PropTypes from 'prop-types';
import TextFieldEditing from '../TextFieldEditing';
import useUpdateListTitle from '../../hooks/useUpdateListTitle';

const ViewEditListTitle = ({
  listId,
  listName,
  onRequestCancel,
  onRequestSuccess,
}) => {
  const { form, handleChange, handleSubmit, isRequesting } = useUpdateListTitle(
    listName,
    listId,
    onRequestSuccess
  );

  return (
    <TextFieldEditing
      buttonText={isRequesting ? 'Saving...' : 'Save'}
      value={form.title}
      name='title'
      onChange={handleChange}
      onRequestSuccess={handleSubmit}
      onRequestCancel={onRequestCancel}
      disabledSuccessButton={form.title.length < 1}
    />
  );
};

ViewEditListTitle.propTypes = {
  listId: PropTypes.string.isRequired,
  listName: PropTypes.string.isRequired,
  onRequestCancel: PropTypes.func,
  onRequestSuccess: PropTypes.func,
};

export default ViewEditListTitle;

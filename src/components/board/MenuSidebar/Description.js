import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import Icons from '../../icons';
import TextFieldEditing from '../TextFieldEditing';
import useToggle from '../../hooks/useToggle';
import useUpdateBoardDescription from '../../hooks/useUpdateBoardDescription';

const MenuDescription = () => {
  const [isModeEdit, handleToggleMode] = useToggle(false);
  const { description } = useSelector(({ board }) => board);
  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useUpdateBoardDescription(handleToggleMode(false));

  return (
    <div className='board-menu-sidebar__description'>
      <div className='board-menu-sidebar__description-header'>
        <p className='board-menu-sidebar__description-header-title'>
          <Icons.FileAlt />
          <span>Description</span>
        </p>
        <Button
          variant='outlined'
          startIcon={isModeEdit ? <Icons.Close /> : <Icons.Pencil />}
          onClick={handleToggleMode()}
        >
          {isModeEdit ? 'Cancel' : 'Edit'}
        </Button>
      </div>
      {isModeEdit ? (
        <TextFieldEditing
          onChange={handleChange}
          value={form.description}
          name='description'
          buttonText={isRequesting ? 'Saving...' : 'Save'}
          textArea
          onRequestCancel={handleToggleMode()}
          onRequestSuccess={handleSubmit}
          disabledSuccessButton={form.description.length < 1}
        />
      ) : (
        <p className='board-menu-sidebar__description-content'>
          {description || 'Write...'}
        </p>
      )}
    </div>
  );
};

export default MenuDescription;

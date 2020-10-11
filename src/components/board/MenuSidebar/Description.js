import React from 'react';
import Button from '../../ui/Button';
import Icons from '../../icons';
import TextFieldEditing from '../TextFieldEditing';
import useToggle from '../../hooks/useToggle';
import useUpdateBoardDescription from '../../hooks/board/useUpdateBoardDescription';
import useBoard from '../../hooks/board/useBoard';

const MenuDescription = () => {
  const [isModeEdit, handleToggleMode] = useToggle(false);
  const { description } = useBoard();
  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useUpdateBoardDescription({ onSuccess: handleToggleMode(false) });

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

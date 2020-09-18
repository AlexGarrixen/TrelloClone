import React, { useState } from 'react';
import Button from '../../ui/Button';
import Icons from '../../icons';
import TextFieldEditing from '../TextFieldEditing';

const MenuDescription = () => {
  const [isModeEdit, set] = useState(false);
  const handleToggleModeEdit = () => set(!isModeEdit);

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
          onClick={handleToggleModeEdit}
        >
          {isModeEdit ? 'Cancel' : 'Edit'}
        </Button>
      </div>
      {isModeEdit ? (
        <TextFieldEditing
          buttonText='Save'
          textArea
          onRequestCancel={handleToggleModeEdit}
        />
      ) : (
        <p className='board-menu-sidebar__description-content'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          quidem rem ex eos, reiciendis dignissimos consectetur sit obcaecati,
          veritatis necessitatibus dolorum repellendus? Distinctio earum sed
          atque dolores saepe debitis sunt.
        </p>
      )}
    </div>
  );
};

export default MenuDescription;

import React, { useState } from 'react';
import Button from '../ui/Button';
import Icons from '../icons';
import TextFieldEditing from './TextFieldEditing';

const ButtonAddList = () => {
  const [openFormRegister, set] = useState(false);
  const handleOpenToggle = () => set(!openFormRegister);

  return (
    <div style={{ width: 243 }} className='flex-shrink-0'>
      {openFormRegister ? (
        <TextFieldEditing
          onRequestCancel={handleOpenToggle}
          placeholder='Add list title'
          buttonText='Add list'
        />
      ) : (
        <Button
          color='primary'
          endIcon={<Icons.Plus />}
          onClick={handleOpenToggle}
          fullWidth
        >
          Add another list
        </Button>
      )}
    </div>
  );
};

export default ButtonAddList;

import React, { useState } from 'react';
import Button from '../ui/Button';
import Icons from '../icons';
import TextFieldEditing from './TextFieldEditing';

const ButtonAddTarget = () => {
  const [openRegisterForm, set] = useState(false);
  const handleOpenToggle = () => set(!openRegisterForm);

  return openRegisterForm ? (
    <TextFieldEditing
      onRequestCancel={handleOpenToggle}
      placeholder='Add card title'
      buttonText='Add card'
    />
  ) : (
    <Button
      color='primary'
      endIcon={<Icons.Plus />}
      onClick={handleOpenToggle}
      fullWidth
    >
      Add another card
    </Button>
  );
};

export default ButtonAddTarget;

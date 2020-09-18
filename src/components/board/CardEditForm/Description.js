import React, { useState } from 'react';
import Icons from '../../icons';
import Button from '../../ui/Button';
import TextFieldEditing from '../TextFieldEditing';

const Description = () => {
  const [isModeEditDescription, setModeEditDescription] = useState(false);
  const handleModeEditDescription = () =>
    setModeEditDescription(!isModeEditDescription);

  return (
    <div className='board-card-edit-form__description'>
      <div className='board-card-edit-form__description-header'>
        <p className='board-card-edit-form__description-title-header'>
          <Icons.FileAlt />
          Description
        </p>
        <Button
          variant='outlined'
          onClick={handleModeEditDescription}
          startIcon={
            !isModeEditDescription ? <Icons.Pencil /> : <Icons.Close />
          }
        >
          {!isModeEditDescription ? 'Edit' : 'Cancel'}
        </Button>
      </div>
      {isModeEditDescription ? (
        <TextFieldEditing
          buttonText='Save'
          onRequestCancel={handleModeEditDescription}
          textArea
        />
      ) : (
        <p className='board-card-edit-form__description-content'>
          Description Here
        </p>
      )}
    </div>
  );
};

export default Description;

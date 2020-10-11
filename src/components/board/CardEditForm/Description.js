import React, { useRef, useEffect, useMemo } from 'react';
import Icons from '../../icons';
import Button from '../../ui/Button';
import TextFieldEditing from '../TextFieldEditing';
import useUpdateCardDescription from '../../hooks/board/useUpdateCardDescription';
import useCard from '../../hooks/board/useCard';
import useToggle from '../../hooks/useToggle';

const Description = () => {
  const card = useCard();
  const [isModeEditDescription, handleToogleMode] = useToggle();
  const refDesc = useRef(null);

  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useUpdateCardDescription(card?.description, {
    onSuccess: handleToogleMode(false),
  });

  const description = useMemo(
    () => card?.description && card.description.replace(/\n/g, '<br />'),
    [card?.description]
  );

  useEffect(() => {
    if (refDesc.current) refDesc.current.innerHTML = description || 'Write...';
  }, [refDesc, card?.description, isModeEditDescription]);

  return (
    <div className='board-card-edit-form__description'>
      <div className='board-card-edit-form__description-header'>
        <p className='board-card-edit-form__description-title-header'>
          <Icons.FileAlt />
          Description
        </p>
        <Button
          variant='outlined'
          onClick={handleToogleMode()}
          startIcon={
            !isModeEditDescription ? <Icons.Pencil /> : <Icons.Close />
          }
        >
          {!isModeEditDescription ? 'Edit' : 'Cancel'}
        </Button>
      </div>
      {isModeEditDescription ? (
        <TextFieldEditing
          buttonText={isRequesting ? 'Updating...' : 'Save'}
          onRequestCancel={handleToogleMode()}
          onRequestSuccess={handleSubmit}
          onChange={handleChange}
          value={form.description}
          name='description'
          textArea
        />
      ) : (
        <p
          ref={refDesc}
          className='board-card-edit-form__description-content'
        />
      )}
    </div>
  );
};

export default Description;

import React, { useRef, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../icons';
import Button from '../../ui/Button';
import TextFieldEditing from '../TextFieldEditing';
import useUpdateCardDescription from '../../hooks/useUpdateCardDescription';
import useToggle from '../../hooks/useToggle';

const Description = () => {
  const { cardSelected } = useSelector(({ board }) => board);
  const [isModeEditDescription, handleToogleMode] = useToggle();
  const refDesc = useRef(null);

  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useUpdateCardDescription(handleToogleMode(false));

  const description = useMemo(
    () =>
      cardSelected.description &&
      cardSelected.description.replace(/\n/g, '<br />'),
    [cardSelected.description]
  );

  useEffect(() => {
    if (refDesc.current) refDesc.current.innerHTML = description;
  }, [refDesc, cardSelected.description, isModeEditDescription]);

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
          onChange={handleChange}
          onBlur={handleSubmit}
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

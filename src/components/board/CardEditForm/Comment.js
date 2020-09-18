import React, { useState } from 'react';
import TextFieldEditing from '../TextFieldEditing';
import PopoverDelete from '../PopoverDelete';
import usePopper from '../../hooks/usePopper';

const Comment = () => {
  const [isModeEdit, setModeEdit] = useState(false);
  const [showPopoverDelete, setShowPopoverDel] = useState(false);
  const handleToogleModeEdit = () => setModeEdit(!isModeEdit);
  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  return (
    <>
      <div className='board-card-edit-form__comment'>
        <div className='board-card-edit-form__comment-header'>
          <p>24 August at 20:30</p>
          <div className='board-card-edit-form__comment-header-actions'>
            {!isModeEdit && (
              <>
                <p onClick={handleToogleModeEdit}>Edit</p>
                <span>-</span>
                <p
                  ref={setReferenceElement}
                  onClick={() => setShowPopoverDel(!showPopoverDelete)}
                >
                  Delet
                </p>
              </>
            )}
          </div>
        </div>
        {isModeEdit ? (
          <TextFieldEditing
            onRequestCancel={handleToogleModeEdit}
            buttonText='Save'
            textArea
          />
        ) : (
          <p className='board-card-edit-form__comment-description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            alias nisi veniam blanditiis corrupti odio hic?
          </p>
        )}
      </div>
      {showPopoverDelete && (
        <PopoverDelete
          ref={setPopperElement}
          style={styles}
          onOutsideClick={() => setShowPopoverDel(false)}
          onRequestClose={() => setShowPopoverDel(false)}
          headerTitle='Do you want to delete the comment?'
          textWarning='Deleting a comment is permanent. The operation cannot be undone.'
          buttonText='Delete comment'
          {...attributes}
        />
      )}
    </>
  );
};

export default Comment;

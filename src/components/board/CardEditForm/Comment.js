import React, { useEffect, useMemo, useRef } from 'react';
import dayjs from 'dayjs';
import TextFieldEditing from '../TextFieldEditing';
import PopoverDelete from '../PopoverDelete';
import usePopper from '../../hooks/usePopper';
import useUpdateCardComment from '../../hooks/useUpdateCardComment';
import useDeleteCardComment from '../../hooks/useDeleteCardComment';
import useToggle from '../../hooks/useToggle';

const Comment = ({ description, date, _id }) => {
  const refDesc = useRef(null);
  const [isModeEdit, handleToggleMode] = useToggle(false);
  const [showPopoverDelete, handleTogglePopover] = useToggle(false);

  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useUpdateCardComment(_id, description, handleToggleMode(false));

  const {
    handleDeleteComment,
    isRequesting: isRequestingDel,
  } = useDeleteCardComment(_id);

  const {
    setPopperElement,
    setReferenceElement,
    styles,
    attributes,
  } = usePopper();

  const dateFormat = useMemo(() => dayjs(date).format('MMMM D, YYYY h:mm a'), [
    date,
  ]);

  const desc = useMemo(
    () => description && description.replace(/\n/g, '<br />'),
    [description]
  );

  useEffect(() => {
    if (refDesc.current) refDesc.current.innerHTML = desc;
  }, [description, isModeEdit]);

  return (
    <>
      <div className='board-card-edit-form__comment'>
        <div className='board-card-edit-form__comment-header'>
          <p>{dateFormat}</p>
          <div className='board-card-edit-form__comment-header-actions'>
            {!isModeEdit && (
              <>
                <p onClick={handleToggleMode()}>Edit</p>
                <span>-</span>
                <p ref={setReferenceElement} onClick={handleTogglePopover()}>
                  Delet
                </p>
              </>
            )}
          </div>
        </div>
        {isModeEdit ? (
          <TextFieldEditing
            onRequestCancel={handleToggleMode()}
            onRequestSuccess={handleSubmit}
            onChange={handleChange}
            value={form.comment}
            name='comment'
            buttonText={isRequesting ? 'Saving...' : 'Save'}
            textArea
          />
        ) : (
          <p
            className='board-card-edit-form__comment-description'
            ref={refDesc}
          />
        )}
      </div>
      {showPopoverDelete && (
        <PopoverDelete
          ref={setPopperElement}
          style={styles}
          onOutsideClick={handleTogglePopover(false)}
          onRequestClose={handleTogglePopover()}
          onRequestConfirm={handleDeleteComment}
          headerTitle='Do you want to delete the comment?'
          textWarning='Deleting a comment is permanent. The operation cannot be undone.'
          buttonText={isRequestingDel ? 'Deleting...' : 'Delete comment'}
          {...attributes}
        />
      )}
    </>
  );
};

export default Comment;

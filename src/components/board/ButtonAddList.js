import React from 'react';
import Button from '../ui/Button';
import Icons from '../icons';
import TextFieldEditing from './TextFieldEditing';
import useCreateBoardList from '../hooks/board/useCreateBoardList';
import useToggle from '../hooks/useToggle';

const ButtonAddList = () => {
  const [showFormRegister, handleToggle] = useToggle(false);
  const {
    form,
    handleChange,
    handleSubmit,
    isRequesting,
  } = useCreateBoardList({ onSuccess: handleToggle(false) });

  return (
    <div style={{ width: 243 }} className='flex-shrink-0'>
      {showFormRegister ? (
        <TextFieldEditing
          onRequestCancel={handleToggle()}
          onRequestSuccess={handleSubmit}
          placeholder='Add list title'
          buttonText={isRequesting ? 'Adding...' : 'Add list'}
          onChange={handleChange}
          value={form.title}
          name='title'
          disabledSuccessButton={form.title.length < 1}
        />
      ) : (
        <Button
          color='primary'
          endIcon={<Icons.Plus />}
          onClick={handleToggle()}
          fullWidth
        >
          Add another list
        </Button>
      )}
    </div>
  );
};

export default ButtonAddList;

import React from 'react';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Icons from '../icons';

const BoardRegisterForm = () => (
  <form
    className='boards__registration-form'
    onSubmit={(e) => e.preventDefault()}
  >
    <IconButton
      color='primary'
      className='boards__registration-form__icon-close'
    >
      <Icons.Close />
    </IconButton>
    <div className='boards__registration-form__picture' />
    <TextField placeholder='Add board title' fullWidth />
    <Button startIcon={<Icons.Image />}>Cover</Button>
    <div className='boards__registration-form__actions'>
      <Button variant='text'>Cancel</Button>
      <Button color='primary' startIcon={<Icons.Plus />}>
        Create
      </Button>
    </div>
  </form>
);

export default BoardRegisterForm;

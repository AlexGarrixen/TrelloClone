import React from 'react';
import Button from '../ui/Button';
import Icons from '../icons';

const ButtonAdd = ({ onClick }) => (
  <Button color='primary' onClick={onClick} startIcon={<Icons.Plus />}>
    Add
  </Button>
);

export default ButtonAdd;

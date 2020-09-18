import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Icons from '../icons';
import calculateHeightTextArea from '../../utils/calculateHeightTextArea';

const TextFieldEditing = ({
  buttonText,
  onChange,
  onRequestCancel,
  onRequestSuccess,
  placeholder,
  textArea = false,
  value,
}) => (
  <div className='textfield-editing'>
    <TextField
      textArea={textArea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth
      onKeyUp={
        textArea ? ({ target }) => calculateHeightTextArea(target) : () => {}
      }
      {...(textArea ? { rows: 1 } : {})}
    />
    <div className='textfield-editing__actions'>
      <IconButton variant='text' onClick={onRequestCancel}>
        <Icons.Close />
      </IconButton>
      <Button
        color='primary'
        startIcon={<Icons.Plus />}
        onClick={onRequestSuccess}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

TextFieldEditing.propTypes = {
  buttonText: PropTypes.string,
  onChange: PropTypes.func,
  onRequestCancel: PropTypes.func,
  onRequestCancel: PropTypes.func,
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  value: PropTypes.string,
};

export default TextFieldEditing;

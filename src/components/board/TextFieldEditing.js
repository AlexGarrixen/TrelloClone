import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import Icons from '../icons';
import calculateHeightTextArea from '../../utils/calculateHeightTextArea';

const TextFieldEditing = ({
  buttonText,
  onChange,
  onBlur,
  onRequestCancel,
  onRequestSuccess,
  placeholder,
  textArea = false,
  value,
  name,
  disabledSuccessButton = false,
}) => {
  const refTextArea = useRef(null);

  useEffect(() => {
    if (textArea && refTextArea.current)
      calculateHeightTextArea(refTextArea.current);
  }, [refTextArea]);

  return (
    <div className='textfield-editing'>
      <TextField
        ref={refTextArea}
        textArea={textArea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
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
          disabled={disabledSuccessButton}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

TextFieldEditing.propTypes = {
  buttonText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onRequestCancel: PropTypes.func,
  onRequestCancel: PropTypes.func,
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  disabledSuccessButton: PropTypes.bool,
};

export default TextFieldEditing;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const TextField = forwardRef(
  (
    {
      onChange,
      value,
      className,
      disabled,
      textArea = false,
      fullWidth = false,
      type = 'text',
      ...other
    },
    ref
  ) => {
    let Component = 'input';

    if (textArea) Component = 'textarea';

    return (
      <Component
        ref={ref}
        className={clsx('textfield', fullWidth && 'w-full', className)}
        onChange={onChange}
        value={value}
        type={type}
        {...other}
      />
    );
  }
);

TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  textArea: PropTypes.bool,
  type: PropTypes.string,
};

export default TextField;

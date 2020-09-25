import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ picture }) => (
  <div
    className='board-card-edit-form__picture'
    style={{ backgroundImage: `url(${picture})` }}
  />
);

Picture.propTypes = {
  picture: PropTypes.string,
};

export default Picture;

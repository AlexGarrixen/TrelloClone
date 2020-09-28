import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const Board = ({ title, picture, _id }) => (
  <Card
    component={Link}
    to={`/board/${_id}/${title}`}
    title={title}
    picture={picture.path}
  />
);

Board.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.shape({
    path: PropTypes.string,
    publicId: PropTypes.string,
  }),
  _id: PropTypes.string.isRequired,
};

export default Board;

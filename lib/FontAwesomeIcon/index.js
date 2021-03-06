import React from 'react';
import PropTypes from 'prop-types';

const FontAwesomeIcon = props => {
  const klass = `fa ${props.name} ${props.className}`;
  const { style } = props;

  return (
    <i className={klass} style={style}>
      {props.children}
    </i>
  );
};

FontAwesomeIcon.defaultProps = {
  className: '',
  children: '',
  style: {}
};

FontAwesomeIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape()
};

export default FontAwesomeIcon;

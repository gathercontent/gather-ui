import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const ModalBody = props => <Modal.Body {...props}>{props.children}</Modal.Body>;

ModalBody.defaultProps = {
  className: ''
};

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

export default ModalBody;

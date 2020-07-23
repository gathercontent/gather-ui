import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const ModalHeader = ({ children, text, ...props }) => (
  <Modal.Header {...props}>
    <div className="modal-header-inner">
      <Modal.Title>{children}</Modal.Title>
      {text && <p className="modal__header-intro">{text}</p>}
    </div>
  </Modal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null
};

export default ModalHeader;

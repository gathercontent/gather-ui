import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal } from 'react-bootstrap';
import cx from 'classnames';

const Modal = props => {
  const {
    size,
    highlight,
    overflow,
    overflowHalf,
    mediaOnly,
    collapse,
    ...rest
  } = props;
  const classNames = cx(props.className, {
    'modal--small': size === 'small',
    'modal--large': size === 'large',
    'modal--x-large': size === 'x-large',
    'modal--full-screen': size === 'full-screen',
    'modal--highlight': highlight,
    'modal--overflow': overflow,
    'modal--overflow-half': overflowHalf,
    'modal--media-only': mediaOnly,
    'modal--collapse': collapse
  });

  return (
    <BootstrapModal {...rest} className={classNames}>
      {props.children}
    </BootstrapModal>
  );
};

Modal.defaultProps = {
  size: '',
  className: '',
  overflow: false,
  overflowHalf: false,
  mediaOnly: false,
  collapse: false,
  highlight: false
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  overflow: PropTypes.bool,
  overflowHalf: PropTypes.bool,
  mediaOnly: PropTypes.bool,
  collapse: PropTypes.bool,
  highlight: PropTypes.bool
};

export default Modal;

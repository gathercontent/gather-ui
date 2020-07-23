import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Col } from 'react-bootstrap';

const MessageBarContent = ({ left, center, right, ...props }) => {
  const classes = cx('message-bar__content', {
    'message-bar__content--left': left,
    'message-bar__content--center': center,
    'message-bar__content--right': right
  });
  return (
    <Col className={classes} {...props}>
      {props.children}
    </Col>
  );
};

MessageBarContent.propTypes = {
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

MessageBarContent.defaultProps = {
  left: false,
  center: false,
  right: false,
  children: []
};

export default MessageBarContent;

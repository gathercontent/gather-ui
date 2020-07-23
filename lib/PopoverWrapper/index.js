import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

const PopoverWrapper = forwardRef((props, ref) => {
  console.log(props);
  return (
    <Popover className={props.className} {...props} ref={ref}>
      {props.children}
    </Popover>
  );
});

PopoverWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({}))
  ]).isRequired
};

PopoverWrapper.defaultProps = {
  className: ''
};

export default PopoverWrapper;

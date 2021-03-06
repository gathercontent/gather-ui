import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  onChangeHandler,
  className,
  label,
  id,
  checked,
  name,
  value,
  disabled
}) => (
  <input
    className={`form-radio__input ${className}`}
    type="radio"
    onChange={onChangeHandler}
    aria-label={label}
    id={id}
    checked={checked}
    name={name}
    value={value}
    disabled={disabled}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  className: '',
  value: '',
  label: '',
  disabled: false
};

export default Input;

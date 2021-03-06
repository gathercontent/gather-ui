/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import { string, arrayOf, bool, oneOfType } from 'prop-types';
import Icon from '../Icon';
import { propTypes, defaultProps, sizes } from './common';

function ButtonBase({
  children,
  className,
  size,
  loading,
  loaderRight,
  loaderTypes,
  connectedLeft,
  connectedRight,
  disabled,
  ...rest
}) {
  const classes = cx('button-base', className, {
    'button-base-connected-r': connectedRight,
    'button-base-connected-l': connectedLeft,

    'button-base-md': size && size === sizes.md,
    'button-base-sm': size && size === sizes.sm,
    'button-base-xs': size && size === sizes.xs
  });

  if (typeof children === 'function') {
    return children(classes);
  }

  const loaderTypesWithDisabled = disabled ? ['dark'] : loaderTypes;

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {loading && !loaderRight && (
        <Icon
          name="loader16"
          className="pr-2"
          types={loaderTypesWithDisabled}
        />
      )}
      {children}
      {loading && loaderRight && (
        <Icon
          name="loader16"
          className="pl-2"
          types={loaderTypesWithDisabled}
        />
      )}
    </button>
  );
}

ButtonBase.propTypes = {
  ...propTypes,
  disabled: bool,
  loaderTypes: arrayOf(string),
  size: oneOfType([string, bool])
};

ButtonBase.defaultProps = {
  ...defaultProps,
  loaderTypes: [],
  disabled: false
};

ButtonBase.sizes = sizes;

export { ButtonBase };

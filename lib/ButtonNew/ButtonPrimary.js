import React from 'react';
import cx from 'classnames';
import { ButtonBase } from './ButtonBase';
import { propTypes, defaultProps, sizes } from './common';

function ButtonPrimary({ children, className, ...rest }) {
  const classes = cx('bg-blue-primary text-white', className);

  return (
    <ButtonBase className={classes} loaderTypes={['white']} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonPrimary.propTypes = propTypes;

ButtonPrimary.defaultProps = defaultProps;

ButtonPrimary.sizes = sizes;

export { ButtonPrimary };
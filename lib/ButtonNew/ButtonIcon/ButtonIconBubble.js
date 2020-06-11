import React from 'react';
import cx from 'classnames';
import { ButtonBase } from '../ButtonBase';
import Icon from '../../Icon';
import { buttonIconPropTypes, buttonIconDefaultProps } from '../common';

const ButtonIconBubble = ({
  disabled,
  name,
  iconTypes,
  className,
  active,
  size,
  ...rest
}) => {
  const classes = cx(
    className,
    'border border-solid shadow rounded-full p-3 inherit-color-icon',
    {
      'border-neutral-90 text-neutral-primary': !active,
      'border-blue-primary bg-blue-90 text-blue-primary': active,
      'bg-neutral-95': disabled,
      'hover:border-blue-primary hover:bg-blue-95 hover:text-blue-primary active:border-blue-primary active:bg-blue-90 active:text-blue-primary focus:border-blue-primary focus:shadow-button-icon-bubble-focus': !disabled
    }
  );

  return (
    <ButtonBase className={classes} disabled={disabled} size={false} {...rest}>
      <Icon name={name} types={iconTypes} />
    </ButtonBase>
  );
};

ButtonIconBubble.propTypes = buttonIconPropTypes;

ButtonIconBubble.defaultProps = buttonIconDefaultProps;

export default ButtonIconBubble;
import React from 'react';
import { Alert } from 'react-bootstrap';
import cx from 'classnames';
import Button from '../../Button';
import Icon from '../../Icon';
import { defaults, types } from './barTypes';

/**
 * @usage
 *
 * <NotificationBarBase>This is a warning</NotificationBarBase>
 */
const NotificationBarBase = ({
  children,
  clickHandler,
  className,
  center,
  onClose,
  ...rest
}) => {
  const classes = cx({
    'cursor-pointer': clickHandler,
    'text-center': center,
    flex: onClose,
    'justify-end': center && onClose
  });

  return (
    <Alert
      onClick={clickHandler}
      className={`notification text-base font-semi-bold p-3 border-0 rounded-none inherit-color-icon inherit-color-link ${classes} ${className}`}
      {...rest}
    >
      <div className="notification__content w-full">{children}</div>
      {onClose && (
        <Button
          onClick={onClose}
          types={['icon-only']}
          className="notification__close ml-auto"
        >
          <Icon
            name="cross"
            title="Close notification"
            defaultActiveColor={false}
          />
        </Button>
      )}
    </Alert>
  );
};

NotificationBarBase.defaultProps = defaults;

NotificationBarBase.propTypes = types;

export default NotificationBarBase;

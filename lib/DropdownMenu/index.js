/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import { DropdownMenuItem } from './DropdownMenuItem';

export function DropdownMenu({ items, className, listClassName, type, direction, caret, children, shouldDisplay, alignRight, selected, downIcon, fullWidth, buttonClassName, disabled }) {
  const [showItems, setShowItems] = useState(selected);

  const closeDropdown = (e) => {
    let isTargetDropDownButton = false;
    if (e.target.classList) {
      isTargetDropDownButton = e.target.classList.contains(
        'dropdown-menu__button'
      );
    }
    if (showItems && !isTargetDropDownButton) {
      setShowItems(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);
    return () => {
      document.body.removeEventListener('click', closeDropdown);
    }
  }, []);

  const toggleShowItems = () => {
    if (!disabled) {
      setShowItems(!showItems)
    }
  }

  const menuClass = cx(`dropdown ${className}`, {
    'is-visible': shouldDisplay,
    'is-hidden': !shouldDisplay,
    'open is-active': showItems,
    'dropup': direction === 'up',
    'full-width': fullWidth
  });

  const listClass = cx(`dropdown-menu ${listClassName}`, {
    'align-right': alignRight
  });

  const buttonClass = cx(
    `${buttonClassName} dropdown-menu__button dropdown-menu__button--${[
      type
    ]}`,
    {
      'dropdown-menu__button-disabled': disabled
    }
  );

  return (
    <div className={menuClass}>
      <Button
        types={[type]}
        className={buttonClass}
        onClick={toggleShowItems}
      >
        {children}
        {caret && (
          <span className="dropdown-menu__caret">
            <Icon name="caret" size="micro" />
          </span>
        )}
        {downIcon && (
          <span className="dropdown-menu__down">
            <Icon name="down" size="micro" />
          </span>
        )}
      </Button>

      <ul className={listClass}>
        {items.map((item, index) => (
          <DropdownMenuItem
            item={item}
            key={`item-${index}`}
          />
        ))}
      </ul>
    </div>
  )
};

DropdownMenu.defaultProps = {
  type: 'primary',
  selected: false,
  alignRight: false,
  className: '',
  listClassName: '',
  caret: false,
  downIcon: false,
  direction: 'down',
  shouldDisplay: true,
  fullWidth: false,
  buttonClassName: '',
  disabled: false
};

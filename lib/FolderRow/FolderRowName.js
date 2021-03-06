import React from 'react';
import { bool, func, node } from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

const FolderRowName = ({
  children,
  showToggle,
  show,
  setShow,
  handleOnClick,
  toggleTitle,
  ...rest
}) => {
  return (
    <div className="folder-row__name" {...rest}>
      {showToggle && (
        <div className="folder-row__toggle h-margin-clear h-margin-right-half">
          <Button
            types={['icon-only']}
            onClick={() => {
              setShow(!show);
              handleOnClick();
            }}
            title={toggleTitle}
          >
            <Icon name="caret" />
          </Button>
        </div>
      )}
      <Icon
        name={show ? 'folderOpen' : 'folder'}
        className="h-margin-right-half"
      />
      <div className="text-overflow-ellipsis h-margin-clear h-width-100">
        {children}
      </div>
    </div>
  );
};

FolderRowName.propTypes = {
  children: node.isRequired,
  show: bool.isRequired,
  setShow: func.isRequired,
  showToggle: bool,
  toggleTitle: node,
  handleOnClick: func
};

FolderRowName.defaultProps = {
  showToggle: true,
  toggleTitle: 'toggle the contents',
  handleOnClick: () => {}
};

export { FolderRowName };

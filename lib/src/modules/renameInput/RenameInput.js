import React, { useState } from 'react';
import cx from 'classnames';
import { RenameInputForm } from './RenameInputForm';
import { sizes } from './common';

export function RenameInput({
  text,
  title,
  label,
  onRename,
  id,
  multiline,
  size,
  className,
  placeholder
}) {
  const [isEditing, setIsEditing] = useState(false);

  const classes = cx(`rename-input-text ${className}`, {
    'rename-input-text-md': size === sizes.md,
    'rename-input-text-lrg': size === sizes.lrg
  });

  if (isEditing) {
    return (
      <RenameInputForm
        stopEditing={() => setIsEditing(false)}
        onRename={onRename}
        label={label}
        id={id}
        text={text}
        multiline={multiline}
        classes={classes}
        title={title}
        placeholder={placeholder}
      />
    );
  }

  return (
    <button
      className={`${classes} rename-input`}
      onClick={() => setIsEditing(true)}
      type="button"
    >
      {text}
    </button>
  );
}

RenameInput.defaultProps = {
  size: sizes.md,
  placeholder: 'Enter a new value'
};

RenameInput.sizes = sizes;
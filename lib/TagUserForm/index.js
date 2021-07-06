import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import ExpandingTextArea from '../ExpandingTextArea';
import TagUserFormActions from './TagUserFormActions';
import TagUserFormUsers from './Users/TagUserFormUsers';

export function TagUserForm({ onSubmit, onInputChange, onCancel, focusOnMount, value, placeholder, users, cancelText, submitText, dropdownAutoPosition, lockedUsers, lockedUserTooltip, className }) {
  const [inputValue, setInputValue] = useState(value);
  const [addedUsers, setAddedUsers] = useState([]);

  const lockedAndAddedUsers = [...lockedUsers, ...addedUsers];
  const hasUsersAdded = lockedAndAddedUsers.length !== 0;
  const displayUsers = hasUsersAdded ? users.filter(user => lockedAndAddedUsers.filter(lockedOrAddedUser => user.display === lockedOrAddedUser.display).length === 0) : users;

  const handleOnSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    const usersToSubmit = lockedUsers.concat(addedUsers);
    onSubmit(usersToSubmit, inputValue);
    setInputValue('')
    onInputChange('');
  };

  const handleOnCancel = () => {
    onCancel();
    setInputValue('')
  };

  const updateInputValue = e => {
    onInputChange(e.target.value);
    setInputValue(e.target.value);
  };

  const onAddUser = user => setAddedUsers(addedUsers.concat(user))

  const onRemoveUser = user => setAddedUsers(addedUsers.filter(
    addedUser => user.id !== addedUser.id
  ))

  return (
    <form
      className={`taguser-form ${className}`}
      onSubmit={onSubmit}
    >
      <div className="taguser-form__body">
        <TagUserFormUsers
          lockedUsers={lockedUsers}
          users={displayUsers}
          addedUsers={addedUsers}
          addUser={onAddUser}
          removeUser={onRemoveUser}
          lockedUserTooltip={lockedUserTooltip}
          dropdownAutoPosition={dropdownAutoPosition}
        />
        <ExpandingTextArea
          className="taguser-form__input"
          value={inputValue}
          handleOnChange={updateInputValue}
          placeholder={placeholder}
          focusOnMount={focusOnMount}
          minRows={3}
          setValue
        />
      </div>
      <TagUserFormActions
        submitText={submitText}
        cancelText={cancelText}
        onSubmit={handleOnSubmit}
        onCancel={handleOnCancel}
        disableSubmit={!hasUsersAdded}
      />
    </form>
  )
};

TagUserForm.defaultProps = {
  value: '',
  focusOnMount: false,
  onInputChange: () => {},
  onCancel: () => {},
  cancelText: 'Cancel',
  submitText: 'Submit',
  dropdownAutoPosition: false,
  lockedUsers: [],
  lockedUserTooltip: 'Locked',
  className: ''
};

export default TagUserForm;

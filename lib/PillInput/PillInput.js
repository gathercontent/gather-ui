import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import { string, instanceOf, shape, func } from 'prop-types';
import cx from 'classnames';
import { DeleteablePill } from './DeleteablePill';

const PillInput = ({ checker, placeholder, onPillsChange, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [pills, setPills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addPills = pillNames => {
    const pillsToAdd = pillNames.reduce((acc, pillName) => {
      if (!pillName) {
        return acc;
      }

      const isValid = !checker || checker.regex.test(pillName);
      return [...acc, { name: pillName, id: uuid(), isValid }];
    }, []);

    setPills([...pills, ...pillsToAdd]);
  };

  const removePill = id => {
    const newPills = pills.filter(pill => pill.id !== id);
    setPills(newPills);
  };

  const onChange = value => {
    const pillNamesFromValue = value.split(' ');
    const numberOfPillNames = pillNamesFromValue.length;

    if (numberOfPillNames === 1) {
      return setInputValue(value);
    }

    const lastPillNameIndex = numberOfPillNames - 1;

    const pillNamesToAdd = pillNamesFromValue.slice(0, lastPillNameIndex);
    addPills(pillNamesToAdd);

    const newValue = pillNamesFromValue.slice(lastPillNameIndex)[0];
    return setInputValue(newValue);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    addPills([inputValue]);
    setInputValue('');
    setIsFocused(false);
  };

  const className = cx(
    'pill-input__container form__input h-padding-bottom-clear',
    {
      'pill-input--focused': isFocused
    }
  );

  useEffect(() => {
    onPillsChange(pills);
  }, [pills]);

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      const ENTER_KEY_CODE = 13;

      if (keyCode !== ENTER_KEY_CODE) {
        return;
      }

      addPills([inputValue]);
      setInputValue('');
    };

    const KEYDOWN_EVENT = 'keydown';
    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);
    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
  }, [inputValue]);

  return (
    <div className={className}>
      {pills.map(({ id, name, isValid }) => {
        return (
          <DeleteablePill
            key={id}
            id={id}
            name={name}
            onRemove={() => removePill(id)}
            warning={isValid ? null : checker.warning}
          />
        );
      })}
      <input
        {...rest}
        placeholder={!pills.length ? placeholder : ''}
        className="pill-input__input h-margin-bottom-half h-margin-right-half h-padding-bottom-quarter h-padding-top-quarter h-padding-left-half h-padding-right-half"
        value={inputValue}
        onChange={({ target: { value } }) => onChange(value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

PillInput.propTypes = {
  placeholder: string,
  checker: shape({
    warning: string,
    regex: instanceOf(RegExp)
  }),
  onPillsChange: func
};

PillInput.defaultProps = {
  checker: null,
  placeholder: '',
  onPillsChange: () => {}
};

export { PillInput };
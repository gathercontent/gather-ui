import React from 'react';
import uuid from 'uuid/v1';
import { ButtonTertiary, Dropdown, Icon } from 'lib';

export function DateSetTimeDropdown({ onTimeSelect, selectedTime }) {
  const getTimes = () => {
    const times = [];

    const minutes = ['00', '15', '30', '45'];
    const hours = Array.from({ length: 24 }, (x, i) => i);

    hours.map(hour =>
      minutes.map(minute => {
        const suffix = hour >= 12 ? 'PM' : 'AM';
        let twelveHour = hour > 12 ? hour - 12 : hour;
        twelveHour = hour === 0 ? 12 : hour;

        return times.push({
          key: `${hour}:${minute}`,
          text: `${twelveHour}:${minute} ${suffix}`
        });
      })
    );

    return times;
  };

  const times = getTimes();

  return (
    <Dropdown id={`date-set-time-${uuid()}`} autoPosition>
      {({ showContent }) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <ButtonTertiary
                onClick={toggleShowContent}
                size={ButtonTertiary.sizes.sm}
                className="ml-2"
                contained
                title="Select a time"
              >
                {selectedTime}
                <Icon name="down" className="ml-2" types={['dark']} />
              </ButtonTertiary>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content collapse className="dropdown-max-height">
              {times.map(({ key, text }) => (
                <Dropdown.Action key={key} action={() => onTimeSelect(text)}>
                  {text}
                </Dropdown.Action>
              ))}
            </Dropdown.Content>
          )}
        </>
      )}
    </Dropdown>
  );
}

DateSetTimeDropdown.defaultProps = {
  selectedTime: '5:00 PM'
};

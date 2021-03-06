import React from 'react';
import { storiesOf } from '@storybook/react';
import { AssigneeDropdown, Person, DropdownContent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';
import { text } from '@storybook/addon-knobs';

storiesOf('Components', module).add('AssingeeDropdown', () => {
  const search = text('Search', '');

  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const assigned = [getPerson(), getPerson()];
  const unassigned = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <StoryItem
      title="AssigneeDropdown"
      description="A prefab for an assignee dropdown"
    >
      <AssigneeDropdown id="assignee-dropdown-prefab" searchValue={search}>
        <DropdownContent.List heading="ASSIGNED">
          {assigned.map(assignee => (
            <Person
              name={assignee.name}
              subtitle={assignee.subtitle}
              avatarUrl={assignee.avatarUrl}
              selected={assignee.selected}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
        <DropdownContent.List heading="UNASSIGNED">
          {unassigned.map(unassignee => (
            <Person
              name={unassignee.name}
              subtitle={unassignee.subtitle}
              avatarUrl={unassignee.avatarUrl}
              selected={unassignee.selected}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
      </AssigneeDropdown>
    </StoryItem>
  );
});

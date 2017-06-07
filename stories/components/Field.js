import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Field from '../../lib/Field';
import StoryItem from '../styleguide/StoryItem';

const mockValidations = [{
  text: '120/100',
  hasFailed: true,
}, {
  text: 'Plain text field bro!',
  hasFailed: false,
}];

const mockActions = [{
  text: 'test action',
  clickHandler: action('action clicked'),
}, {
  text: 'test action 2',
  clickHandler: action('action 2 clicked'),
}];

storiesOf('Components', module)
  .add('Field', () => {
    return (
      <div>
        <StoryItem
          title="Field"
          description="A field component">
          <Field
            label="Test Label Text"
            actions={mockActions}
            validations={mockValidations}
            guidelines="Guideline text here!!!"
          >
            <div>Add editor component here from app!</div>
          </Field>
        </StoryItem>

        <StoryItem
          title="Field (loading)"
          description="A field component when loading">
          <Field isLoading={true} />
        </StoryItem>

        <StoryItem
          title="Field (read only)"
          description="A field component when it's read only">
          <Field isReadOnly={true} />
        </StoryItem>
      </div>
    );
  });

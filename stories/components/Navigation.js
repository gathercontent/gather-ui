import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from 'react-bootstrap';
import { Navigation } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Navigation', () => (
  <div>
    <StoryItem
      title="Navigation"
      description="An inline navigation currently used in app TopBar."
    >
      <Navigation>
        <Dropdown.Item href="#" active>
          Items
        </Dropdown.Item>
        <Dropdown.Item href="#">Archived Items</Dropdown.Item>
      </Navigation>
    </StoryItem>
    <StoryItem
      title="Tabs"
      description="A tabbed navigation."
    >
      <Navigation tabs>
        <Dropdown.Item href="#" active>
          Items
        </Dropdown.Item>
        <Dropdown.Item href="#">Archived Items</Dropdown.Item>
      </Navigation>
    </StoryItem>
  </div>
));

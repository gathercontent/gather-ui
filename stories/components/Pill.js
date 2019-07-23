import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pill from '../../lib/Pill';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Pill', () => (
  <div>
    <StoryItem title="Pill">
      <Pill onClearClick={action('clear')}>
          <Icon name="item" /> <span style={{paddingLeft: "10px"}}>Name is <b>David</b></span>
      </Pill>
    </StoryItem>
  </div>
));
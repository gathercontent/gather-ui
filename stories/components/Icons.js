import React from 'react';
import { storiesOf, action } from '@storybook/react';
import FontAwesomeIcon from '../../lib/FontAwesomeIcon';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Icons', () => {
    return (
      <div>
        <StoryItem
          title="FontAwesome Icon"
          description="A wrapper around FontAwesome icons."
        >
          <div>
            <FontAwesomeIcon name="fa-cog" style={{ marginRight: '10px' }} />
            <FontAwesomeIcon name="fa-file" style={{ color: 'red' }} />
          </div>
        </StoryItem>

        <StoryItem
          title="SVG Icons"
          description=""
        >
          <div>
            <Icon name="comment" />
            <Icon name="plus" />
          </div>
        </StoryItem>
      </div>
    );
  });

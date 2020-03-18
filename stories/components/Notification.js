import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '../../lib/Notification';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Notifications', () => (
    <div>
      <StoryItem
        title="Notification Warning"
        description="A notification box with the warning level.">
        <Notification level="warning">Warning, I am too sexy for this notification.</Notification>
      </StoryItem>

      <StoryItem
        title="Notification Danger"
        description="A notification box with the danger level.">
        <Notification level="danger">You're about to delete your whole life.</Notification>
      </StoryItem>

      <StoryItem
        title="Notification Information"
        description="A notification box with the information level.">
        <Notification level="info">Did you know <strong>Nirvana</strong> started in <u>Aberdeen</u>?</Notification>
      </StoryItem>

      <StoryItem
        title="Notification Tease"
        description="A notification box with the tease level.">
        <Notification level="tease">Did you know Nirvana started in <a href="/">Aberdeen</a>?</Notification>
      </StoryItem>

      <StoryItem
        title="Notification (with a click handler)"
        description="A notification can handle click interactions.">
        <Notification level="warning" clickHandler={action('clickHandler')}><strong>You have overdue projects.</strong></Notification>
      </StoryItem>

      <StoryItem
        title="Notification with close button"
        description="A notification box with an optional close button.">
        <Notification level="warning" onClose={() => {}}>Warning, I am too sexy for this notification.</Notification>
      </StoryItem>

      <StoryItem
        title="Centered Notification with close button"
        description="A centered notification box with an optional close button.">
        <Notification level="warning" center onClose={() => {}}>Warning, I am too sexy for this notification.</Notification>
      </StoryItem>
    </div>
  ));

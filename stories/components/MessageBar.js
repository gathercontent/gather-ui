import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import MessageBar from '../../lib/MessageBar';
import MessageBarContent from '../../lib/MessageBar/MessageBarContent';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';

storiesOf('Components', module).add('MessageBar', () => (
  <div>
    <StoryItem
      title="MessageBar default"
      description="A bar used to display simple messaging."
    >
      <MessageBar>
        <MessageBarContent center xs={12} md={12}>
          <span>Here is a message for you to read!</span>
        </MessageBarContent>
      </MessageBar>
    </StoryItem>
    <StoryItem
      title="MessageBar purple"
      description="purple message bar."
    >
    <MessageBar
      type="purple"
    >
      <MessageBarContent center xs={8} md={10}>
        <span>I'm a nice purple message, hello! I have a button too, how exciting!</span>
      </MessageBarContent>
      <MessageBarContent right xs={4} md={2}>
        <Button
          types={['purple-text', 'slim']}
          clickHandler={()=>{}}
        >
          hello
          <Icon name="comment" />
        </Button>
      </MessageBarContent>
    </MessageBar>
    </StoryItem>
    <StoryItem
      title="MessageBar red"
      description="red message bar."
    >
    <MessageBar
      type="red"
    >
      <MessageBarContent center xs={12} md={12}>
        <span>I am a scary red message, better pay attention to me!</span>
      </MessageBarContent>
    </MessageBar>
    </StoryItem>
  </div>
));

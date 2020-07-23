import React from 'react';
import { storiesOf } from '@storybook/react';
import { OverlayTrigger } from 'react-bootstrap';
import PopoverWrapper from '../../lib/PopoverWrapper';
import StoryItem from '../styleguide/StoryItem';

const triggerStyle = {
  background: 'rebeccapurple',
  color: '#fff',
  padding: '.3rem .5rem',
  borderRadius: '6px',
  display: 'inline-block',
};

const popoverWrapperTwo = () => (
  <PopoverWrapper title="Default style" id="id-2">
    <p>Do you like tooltips?</p>
  </PopoverWrapper>
);

const popoverWrapperOne = () => (
  <PopoverWrapper className="avatar__tooltip" id="id-1">
    <p className="avatar__tooltip-name">Hello</p>
    <p className="avatar__tooltip-email">Do you like tooltips?</p>
  </PopoverWrapper>
);

storiesOf('Components', module)
  .add('Popover', () => (
    <div>
      <StoryItem
        title="PopoverWrapper — custom styling (on hover)"
        description="PopoverWrappers are just a custom wrapper for the `Popover` component. They're controlled by using the `OverlayTrigger`, where their contents, trigger and placement are defined."
      >
        <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverWrapperOne()}>
          <span style={triggerStyle}>
            <h3>Hover over me to trigger a popover</h3>
          </span>
        </OverlayTrigger>
      </StoryItem>

      <StoryItem
        title="PopoverWrapper — default styling (on hover)"
        description="PopoverWrappers are just a custom wrapper for the `Popover` component. They're controlled by using the `OverlayTrigger`, where their contents, trigger and placement are defined. By default, the Popover component accepts a title attribute."
      >
        <OverlayTrigger trigger={['hover']} placement="bottom" overlay={popoverWrapperTwo()}>
          <span style={triggerStyle}>
            <h3>Hover over me to trigger a popover</h3>
          </span>
        </OverlayTrigger>
      </StoryItem>

      <StoryItem
        title="Tooltip — custom placement (on click)"
        description="They can be placed to the top, right, left, bottom, and be triggered on one or multiple events (such as click, focus, hover)."
      >
        <OverlayTrigger trigger={['click']} placement="right" overlay={popoverWrapperTwo()}>
          <span style={triggerStyle}>
            <h3>Click me to trigger a popover</h3>
          </span>
        </OverlayTrigger>
      </StoryItem>
    </div>
  ));

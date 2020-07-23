import React from 'react';
import { storiesOf } from '@storybook/react';
import { OverlayTrigger } from 'react-bootstrap';
import PopoverWrapper from '../../lib/PopoverWrapper';
import StoryItem from '../styleguide/StoryItem';
import TooltipWrapper from '../../lib/TooltipWrapper/index';

storiesOf('Components', module)
  .add('Tooltip', () => (
    <div>
      <StoryItem
        title="Tooltip Wrapper"
        description="TooltipWrapper is a custom wrapper for the `Tooltip` bootstrap component."
      >
        <TooltipWrapper id="id-1" tooltipText="Sample tooltip text">
          <span>Hover over me for a tooltip!</span>
        </TooltipWrapper>
      </StoryItem>
    </div>
));

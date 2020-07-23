import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Row, Col } from 'react-bootstrap';
import { Figure, Icon, TooltipWrapper, FigurePlaceholder } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const trashButton = <a key="hello"><Icon name="trash" /></a>;
const commentButton = <button onClick={action('test')} key="hello2"><Icon name="comment" /></button>;
const fullScreenButton = <button onClick={action('test')} key="hello3"><Icon name="fullScreen" /></button>;
const downloadButton = <button onClick={action('test')} key="hello4">{<Icon name="quoteStart" />}</button>;
const actions = [trashButton, commentButton, fullScreenButton, downloadButton];

storiesOf('Components', module).add('Figure', () => (
  <div>
    <StoryItem
      title="Figure"
      description="A Figure showing a preview of the file."
    >
      <Row>
        <Col xs={4}>
          <Figure
            filename="cute_sheep_in_iceland.jpg"
            label="Sheep in Iceland"
            previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
            showPreview
          >
            {actions}
          </Figure>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="Figure (highlighted)"
      description="A Figure can have a highlighted state."
    >
      <Row>
        <Col xs={4}>
          <Figure
            filename="notes.txt"
            label="Field notes"
            isHighlighted
            showPreview
          >
            {actions}
          </Figure>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="Figure Without Children"
      description="A Figure can have no children passed to it."
    >
      <Row>
        <Col xs={4}>
          <Figure filename="notes.txt" label="Field notes" />
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="Figure (without preview)"
      description="A Figure without a preview image"
    >
      <Row>
        <Col xs={4}>
          <Figure filename="field_notes.txt" label="Field notes">
            {actions}
          </Figure>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="Figure (without preview)"
      description="A highlighted Figure without a preview image"
    >
      <Row>
        <Col xs={4}>
          <Figure
            filename="field_notes.txt"
            label="Field notes"
            isHighlighted
            alignActionsRight
          >
            {actions}
          </Figure>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem
      title="Multiple Figures"
      description="Multiple Figures side by side"
    >
      <Row>
        <Col xs={12} sm={4}>
          <Figure
            filename="sheep_in_iceland.jpg"
            label="Sheep in Iceland"
            previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
            showPreview
          >
            {actions}
          </Figure>
        </Col>
        <Col xs={12} sm={4}>
          <Figure
            type="image"
            filename="sunset_in_berlin_large_filename.jpg"
            label="Large sunset in Berlin, Germany"
            previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
            showPreview
            isHighlighted
          >
            {actions}
          </Figure>
        </Col>
        <Col xs={12} sm={4}>
          <Figure
            filename="sheep_in_iceland.jpg"
            label="Sheep in Iceland"
            previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
            showPreview
            isHighlighted
          >
            {actions}
          </Figure>
        </Col>
      </Row>
    </StoryItem>

    <StoryItem title="Added & Removed Figures">
      <Row>
        <Col xs={12} sm={4}>
          <TooltipWrapper
            id="id-1"
            tooltipText="removed by Bruce"
            placement="top"
            className="figure__tooltip figure__tooltip--removed"
          >
            <Figure
              filename="sheep_in_iceland.jpg"
              label="Sheep in Iceland"
              previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
              showPreview
              removed
            />
          </TooltipWrapper>
        </Col>
        <Col xs={12} sm={4}>
          <TooltipWrapper
            id="id-2"
            tooltipText="added by Gill"
            placement="top"
            className="figure__tooltip figure__tooltip--added"
          >
            <Figure
              filename="sunset_in_berlin_large_filename.jpg"
              label="Large sunset in Berlin, Germany"
              previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
              showPreview
              added
            />
          </TooltipWrapper>
        </Col>
        <Col xs={12} sm={4}>
          <TooltipWrapper
            id="id-1"
            tooltipText="removed by Bruce"
            placement="top"
            className="figure__tooltip figure__tooltip--removed"
          >
            <Figure
              filename="notes.txt"
              label="Field notes"
              removed
            />
          </TooltipWrapper>
        </Col>
        <Col xs={12} sm={4}>
          <TooltipWrapper
            id="id-2"
            tooltipText="added by Gill"
            placement="top"
            className="figure__tooltip figure__tooltip--added"
          >
            <Figure
              filename="crazyspreadsheet.csv"
              label="Crazy spreadsheet"
              added
            />
          </TooltipWrapper>
        </Col>
      </Row>
    </StoryItem>
    <StoryItem title="Uploading, Process and Loading States">
      <Row>
        <Col xs={12} sm={4}>
          <Figure
            filename="sheep_in_iceland.jpg"
            previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
            label="Sheep in Iceland"
            loadingProgress={50}
          />
        </Col>
        <Col xs={12} sm={4}>
          <Figure
            filename="sheep_in_iceland.jpg"
            previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
            label="Sheep in Iceland"
            loadingProgress={100}
          />
        </Col>
        <Col xs={12} sm={4}>
          <Figure
            filename="sheep_in_iceland.jpg"
            previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
            label="Sheep in Iceland"
          />
        </Col>
      </Row>
    </StoryItem>
    <StoryItem title="Figure Placeholder">
      <FigurePlaceholder />
    </StoryItem>
  </div>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Row, Col } from 'react-bootstrap';
import {Card, Figure, Icon} from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const card = storiesOf('Components', module)
  .add('Card', () => (
    <div>
      <StoryItem
        title="Basic card"
        description="A simple card"
      >
        <Row>
          <Col xs={2}>
            <Card>
              <Card.Content bordered>
                <Card.SubHeading>
                  Some subheading text
                </Card.SubHeading>
              </Card.Content>
              <Card.Content>
                some normal text, hello!
              </Card.Content>
              <Card.Footer>
                I'm a footer
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </StoryItem>

      <StoryItem
        title="Image card"
        description="A Card with a Figure inside"
      >
      <Row>
        <Col xs={2}>
          <Card>
            <Card.Content collapse bordered>
              <Figure
                previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
                showPreview
              />
            </Card.Content>
            <Card.Content>
              <Card.SubHeading truncate>
                A sheep in Iceland (not the shop)
              </Card.SubHeading>
              Uploaded a week ago
            </Card.Content>
            <Card.Footer collapse>
              <Card.FooterLeft>
                <Icon name="cog" />
              </Card.FooterLeft>
              <Card.FooterRight>
                info
              </Card.FooterRight>
            </Card.Footer>
          </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <Card.Content collapse>
                <Figure
                  previewSrc="http://www.sdpsnet.org/sdps/images/conference/2012/hotel/mod_galleries_53.jpeg"
                  showPreview
                />
              </Card.Content>
              <Card.Content>
                <Card.SubHeading truncate>
                  A lovely skyline
                </Card.SubHeading>
                Uploaded 2 months ago
              </Card.Content>
              <Card.Footer collapse>
                <Card.FooterLeft>
                  <Icon name="cog" />
                </Card.FooterLeft>
                <Card.FooterRight>
                  info
                </Card.FooterRight>
              </Card.Footer>
            </Card>
            </Col>
        </Row>
      </StoryItem>
    </div>
  ));

export default card;

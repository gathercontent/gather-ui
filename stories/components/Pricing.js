import React, { Fragment } from "react";
import { storiesOf } from '@storybook/react';
import { Row, Col } from 'react-bootstrap';
import StoryItem from '../styleguide/StoryItem';
import { PricingWrapper, PricingPlan, FeatureList, FeatureListItem, PricingToggle, SectionFeature, PricingToggleItem, Icon, TooltipWrapper, PricingText } from "../../lib";
import PersonSVG from '../../assets/person.svg';

const features = [{
  name: 'Real-time content editor',
  standardEnabled: true,
  advancedEnabled: false,
}, {
  name: 'Structured templates',
  standardEnabled: true,
  advancedEnabled: true,
}, {
  name: 'Unlimited items',
  standardEnabled: true,
  advancedEnabled: true,
}, {
  name: 'Unlimited projects',
  standardEnabled: true,
  advancedEnabled: false,
}, {
  name: 'Advanced search',
  standardEnabled: true,
  advancedEnabled: false,
}];

const upgradeButton = (
  <a className="button button--primary" href="/">Upgrade</a>
);

const price = 2500;

const featureListHeadings = (
  <FeatureList title="Features">
    {features.map(({ name }) => (
      <FeatureListItem key={name}>
        <TooltipWrapper id={name} tooltipText="Tooltip text here..." placement="top">
          {name}
        </TooltipWrapper>
      </FeatureListItem>
    ))}
  </FeatureList>
);

const featureListStandard = (
  <FeatureList title="Features">
    {features.map(({ name, standardEnabled }) => (
      <FeatureListItem key={name}>
        {name}
        {(standardEnabled) ? <Icon name="tickCircle" className="fill-primary-green" /> : <Icon name="emptyCircle" />}
      </FeatureListItem>
    ))}
  </FeatureList>
);

const featureListAdvanced = (
  <FeatureList title="Features">
    {features.map(({ name, advancedEnabled }) => (
      <FeatureListItem key={name}>
        {name}
        {(advancedEnabled) ? <Icon name="tickCircle" className="fill-primary-green" /> : <Icon name="emptyCircle" />}
      </FeatureListItem>
    ))}
  </FeatureList>
);

storiesOf('Components', module)
  .add('Pricing Plans', () => {
    return (
      <div>
        <StoryItem
          title="Pricing Plan"
          description="Pricing plans can be standalone components or a part of the pricing wrapper."
        >
          <div style={{ maxWidth: '300px' }}>
            <PricingPlan price="$300" smallPrint="$1,250 per month" priceDesc="per seat per month" />
          </div>
        </StoryItem>

        <StoryItem
          title="Pricing Wrapper"
          description="The pricing wrapper provides the means to show 2 plans in an ideal UI."
        >
          <Fragment>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <SectionFeature extendTop>
                  <h1>Upgrade your GatherContent account!</h1>
                  <p>You're currently using <strong>6</strong> seats on your trial.</p>
                </SectionFeature>

                <SectionFeature>
                  <p>I would like to purchase <input className="form__input form-input__text" type="number" value="7" onChange={() => {}} /> seats for my account.</p>
                  <p>Seats can be added at any time. <a href="/">Find out more.</a></p>
                </SectionFeature>
              </Col>
            </Row>

            <PricingWrapper smallPrint="Minimum of 7 seats for all plans">
              <PricingToggle>
                <PricingToggleItem
                  onClick={() => {}}
                  savings="Save 20%"
                  isActive
                >
                  Pay annually
                </PricingToggleItem>
                <PricingToggleItem onClick={() => {}}>Pay monthly</PricingToggleItem>
              </PricingToggle>

              {featureListHeadings}
              {featureListHeadings}
              {featureListHeadings}

              <Row>
                <Col xs={12} md={6}>
                  <PricingPlan
                    price={`$${price / 2}`}
                    smallPrint="$1,250 per month"
                    priceDesc="per seat, per month"
                    title="Standard"
                    upgradeButton={<button className="button button--light-grey" disabled>Current plan</button>}
                    current
                  >
                    {featureListStandard}
                    {featureListStandard}
                    {featureListStandard}
                  </PricingPlan>
                </Col>

                <Col xs={12} md={6}>
                  <PricingPlan
                    price={`$${price}`}
                    smallPrint="$1,250 per month"
                    priceDesc="per seat, per month"
                    title="Advanced"
                    upgradeButton={upgradeButton}
                    savings="Save $360"
                  >
                    <div className="pricing__plan-person">
                      <PersonSVG />
                    </div>
                    {featureListAdvanced}
                    {featureListAdvanced}
                    {featureListAdvanced}
                  </PricingPlan>
                </Col>
              </Row>
            </PricingWrapper>
          </Fragment>
        </StoryItem>
      </div>
    );
  });

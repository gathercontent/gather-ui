import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const SelectionBarActions = ({ children }) => (
  <Col
    xs={12}
    sm={5}
    md={6}
    className="selection-bar__section selection-bar__actions"
  >
    {children}
  </Col>
);

SelectionBarActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default SelectionBarActions;

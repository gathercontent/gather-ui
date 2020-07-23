import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ShortcutTrigger from '../ShortcutTrigger';
import Button from '../Button';

const SelectionBarCancel = ({ onCancel }) => (
  <Col
    xsHidden
    sm={3}
    md={3}
    className="selection-bar__section selection-bar__cancel"
  >
    <Button
      title="Cancel Selection"
      types={['link-default', 'collapse']}
      clickHandler={onCancel}
    >
      Cancel (Esc)
    </Button>
    <ShortcutTrigger shortcutKey="Escape" onShortcutTrigger={onCancel} />
  </Col>
);

SelectionBarCancel.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default SelectionBarCancel;

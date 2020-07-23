import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row } from 'react-bootstrap';
import SelectionBarAction from './SelectionBarAction';
import SelectionBarDivider from './SelectionBarDivider';
import SelectionBarCancel from './SelectionBarCancel';
import SelectionBarInformation from './SelectionBarInformation';
import SelectionBarActions from './SelectionBarActions';
import SelectionBarCounter from './SelectionBarCounter';

const SelectionBar = ({ fixed, autoHide, hasSelected, children }) => {
  const classNames = cx('selection-bar', {
    'selection-bar--fixed': fixed,
    'selection-bar--auto-hide': autoHide,
    'has-selected': hasSelected
  });

  return <Row className={classNames}>{children}</Row>;
};

SelectionBar.Information = SelectionBarInformation;
SelectionBar.Cancel = SelectionBarCancel;
SelectionBar.Action = SelectionBarAction;
SelectionBar.Actions = SelectionBarActions;
SelectionBar.Divider = SelectionBarDivider;
SelectionBar.Counter = SelectionBarCounter;

SelectionBar.propTypes = {
  hasSelected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  autoHide: PropTypes.bool
};

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false
};

export default SelectionBar;

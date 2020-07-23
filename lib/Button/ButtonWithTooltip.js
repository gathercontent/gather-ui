import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { TooltipWrapper } from '..';
// import Tooltip from 'react-bootstrap/lib/Tooltip';
// import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from '.';

/**
 * @usage
 *
 * <ButtonWithTooltip
 *  types={['clear', 'collapsed']}
 *  clickHandler={() => {}}
 *  tooltipText="text here"
 * >
 *   ...test goes here
 * </ButtonWithTooltip>
 */
const ButtonWithTooltip = props => {
  return (
    <TooltipWrapper
      id={uuid()}
      placement={props.tooltipPosition}
      tooltipText={props.tooltipText}
      flexWrapper={false}
    >
      <span className="button--has-tooltip">
        <Button {...props}>
          {props.children}
          <span className="button__helper">?</span>
        </Button>
      </span>
    </TooltipWrapper>
  );
};

ButtonWithTooltip.defaultProps = {
  tooltipPosition: 'bottom',
  tooltipSize: ''
};

ButtonWithTooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  tooltipSize: PropTypes.string,
  tooltipPosition: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ButtonWithTooltip;

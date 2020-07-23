import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
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
  const tooltip = (
    <Tooltip id={Math.random()}>
      <div className={`tooltip--${props.tooltipSize}`}>{props.tooltipText}</div>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement={props.tooltipPosition} overlay={tooltip}>
      <span className="button--has-tooltip">
        <Button {...props}>
          {props.children}
          <span className="button__helper">?</span>
        </Button>
      </span>
    </OverlayTrigger>
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

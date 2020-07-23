import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class TooltipWrapper extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.hide !== nextProps.hide && nextProps.hide) {
      if (this.tooltipOverlay) {
        this.tooltipOverlay.hide();
      }
    }
    if (this.props.show !== nextProps.show && nextProps.show) {
      if (this.tooltipOverlay) {
        this.tooltipOverlay.show();
      }
    }
  }

  render() {
    const {
      id,
      className,
      tooltipText,
      children,
      hide,
      clickable,
      alignLeft,
      wrapperClassName,
      manual,
      trigger,
      show,
      ...rest
    } = this.props;

    if (!tooltipText) {
      return children;
    }

    const overlay = (
      <Tooltip className={className} id={id}>
        {tooltipText}
      </Tooltip>
    );

    const wrapperChildClassNames = cx(
      `tooltip-wrapper__child ${wrapperClassName}`,
      {
        'tooltip-wrapper__child--clickable': clickable,
        'tooltip-wrapper__child--align-left': alignLeft
      }
    );

    const tabIndex = this.props.tabbable ? 0 : -1;

    return (
      <OverlayTrigger
        {...rest}
        trigger={manual ? null : trigger}
        overlay={overlay}
        ref={tooltipOverlay => {
          this.tooltipOverlay = tooltipOverlay;
        }}
      >
        <span
          className={wrapperChildClassNames}
          tabIndex={tabIndex}
          role="button"
        >
          {children}
        </span>
      </OverlayTrigger>
    );
  }
}

TooltipWrapper.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
  alignLeft: PropTypes.bool,
  clickable: PropTypes.bool,
  manual: PropTypes.bool,
  show: PropTypes.bool,
  tabbable: PropTypes.bool
};

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: ['hover', 'focus'],
  hide: false,
  tooltipText: '',
  wrapperClassName: '',
  alignLeft: false,
  clickable: false,
  manual: false,
  show: null,
  tabbable: true
};

export default TooltipWrapper;

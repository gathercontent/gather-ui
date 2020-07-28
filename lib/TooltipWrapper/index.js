import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';

function TooltipWrapper({
  placement,
  wrapperClassName,
  tooltipText,
  children,
  clickable,
  tabbable,
  alignLeft
}) {
  const wrapperChildClassNames = cx(
    `tooltip-wrapper__child ${wrapperClassName}`,
    {
      'tooltip-wrapper__child--clickable': clickable,
      'tooltip-wrapper__child--align-left': alignLeft
    }
  );

  const tabIndex = tabbable ? 0 : -1;

  return (
    <Tooltip
      className={wrapperChildClassNames}
      title={tooltipText}
      position={placement}
      tabIndex={tabIndex}
    >
      {children}
    </Tooltip>
  );
}

// class TooltipWrapper extends Component {
//   // eslint-disable-next-line camelcase
//   UNSAFE_componentWillReceiveProps(nextProps) {
//     if (this.props.hide !== nextProps.hide && nextProps.hide) {
//       if (this.tooltipOverlay) {
//         this.tooltipOverlay.hide();
//       }
//     }
//     if (this.props.show !== nextProps.show && nextProps.show) {
//       if (this.tooltipOverlay) {
//         this.tooltipOverlay.show();
//       }
//     }
//   }
//
//   render() {
//     const {
//       id,
//       className,
//       tooltipText,
//       children,
//       hide,
//       clickable,
//       alignLeft,
//       wrapperClassName,
//       manual,
//       trigger,
//       show,
//       ...rest
//     } = this.props;
//
//     if (!tooltipText) {
//       return children;
//     }
//
//     const overlay = (
//       <Tooltip className={className} id={id}>
//         {tooltipText}
//       </Tooltip>
//     );
//
//     const wrapperChildClassNames = cx(
//       `tooltip-wrapper__child ${wrapperClassName}`,
//       {
//         'tooltip-wrapper__child--clickable': clickable,
//         'tooltip-wrapper__child--align-left': alignLeft
//       }
//     );
//
//     const tabIndex = this.props.tabbable ? 0 : -1;
//
//     return (
//       <OverlayTrigger
//         {...rest}
//         trigger={manual ? null : trigger}
//         overlay={overlay}
//         ref={tooltipOverlay => {
//           this.tooltipOverlay = tooltipOverlay;
//         }}
//       >
//         <span
//           className={wrapperChildClassNames}
//           tabIndex={tabIndex}
//           role="button"
//         >
//           {children}
//         </span>
//       </OverlayTrigger>
//     );
//   }
// }

TooltipWrapper.propTypes = {
  wrapperClassName: PropTypes.string,
  placement: PropTypes.string,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  alignLeft: PropTypes.bool,
  clickable: PropTypes.bool,
  tabbable: PropTypes.bool
};

TooltipWrapper.defaultProps = {
  placement: 'bottom',
  tooltipText: '',
  wrapperClassName: '',
  alignLeft: false,
  clickable: false,
  tabbable: true
};

export default TooltipWrapper;

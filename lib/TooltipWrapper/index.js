import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

function TooltipWrapper({
  className,
  placement,
  wrapperClassName,
  id,
  tooltipText,
  children,
  clickable,
  flexWrapper,
  tabbable,
  alignLeft
}) {
  if (!tooltipText) {
    return children;
  }

  const wrapperlassNames = cx(`tooltip-wrapper__child ${wrapperClassName}`, {
    flex: flexWrapper,
    'tooltip-wrapper__child--clickable': clickable,
    'tooltip-wrapper__child--align-left': alignLeft
  });
  const tabIndex = tabbable ? 0 : -1;
  return (
    <>
      <span
        className={`${wrapperlassNames} tooltip-wrapper__child`}
        data-tip
        data-for={id}
        tabIndex={tabIndex}
      >
        {children}
      </span>
      <ReactTooltip
        id={id}
        className={className}
        effect="solid"
        place={placement}
        clickable={clickable}
      >
        {tooltipText}
      </ReactTooltip>
    </>
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
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  placement: PropTypes.string,
  id: PropTypes.string.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  alignLeft: PropTypes.bool,
  clickable: PropTypes.bool,
  tabbable: PropTypes.bool,
  flexWrapper: PropTypes.bool
};

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  tooltipText: '',
  wrapperClassName: '',
  alignLeft: false,
  clickable: false,
  tabbable: true,
  flexWrapper: true
};

export default TooltipWrapper;

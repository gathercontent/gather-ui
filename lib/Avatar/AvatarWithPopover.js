import React, { useRef, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Overlay } from 'react-bootstrap';
import Popover from '../PopoverWrapper';
import Avatar from '.';
import Icon from '../Icon';

/**
 * @usage
 *
 * <AvatarWithPopover
 *  name="Poppy Cox"
 *  email="poppycox@gmail.com"
 *  >
 *   ... popover content
 * </AvatarWithPopover>
 */

const TriggerWrapper = forwardRef(({ children, className, ...props }, ref) => (
  <button ref={ref} className={className} type="button" {...props}>
    {children}
  </button>
));

function AvatarWithPopover({
  triggerEvent,
  overlayPosition,
  caret,
  popoverClass,
  children,
  ...rest
}) {
  const [showing, setShowing] = useState(false);
  const target = useRef(null);
  const container = useRef(null);

  const togglePopover = () => setShowing(!showing);

  const hidePopover = () => setShowing(false);

  const showPopover = () => setShowing(true);

  const getOverlayTriggerEventProps = () => {
    let events = {};
    if (typeof triggerEvent === 'string') {
      events[triggerEvent] = togglePopover;
    } else {
      events = triggerEvent.reduce((acc, val) => {
        if (val === 'onHover') {
          acc.onMouseEnter = showPopover;
          acc.onMouseLeave = hidePopover;
        } else {
          acc[val] = togglePopover;
        }
        return acc;
      }, {});
    }

    return events;
  };

  const classes = cx('button button--icon-only avatar__wrapper', {
    'is-active': showing
  });

  // an example copied from https://react-bootstrap.github.io/components/overlays/#tooltip-examples
  // return (
  //   <>
  //     <Button ref={target} onClick={() => setShowing(!showing)}>
  //       Click me!
  //     </Button>
  //     <Overlay target={target.current} show={showing} placement="right">
  //       {(props) => (
  //         <Tooltip id="overlay-example" {...props}>
  //           My Tooltip
  //         </Tooltip>
  //       )}
  //     </Overlay>
  //   </>
  // )

  return (
    <span className="avatar__popover relative" ref={container}>
      <TriggerWrapper
        className={classes}
        ref={target}
        {...getOverlayTriggerEventProps()}
      >
        <span className="avatar__target">
          <Avatar {...rest} className="avatar--with-toggle" />
        </span>
        {caret && <Icon name="caret" className="avatar__caret" />}
      </TriggerWrapper>
      <Overlay
        target={target.current}
        placement="right"
        trigger={triggerEvent}
        show={showing}
      >
        {props => (
          <Popover
            id={rest.email}
            className={`${popoverClass} overflow-visible`}
            {...props}
          >
            {children}
          </Popover>
        )}
      </Overlay>
    </span>
  );
}

AvatarWithPopover.defaultProps = {
  overlayPosition: 'bottom',
  triggerEvent: ['onHover', 'onClick'],
  caret: false,
  popoverClass: '',
  children: []
};

AvatarWithPopover.propTypes = {
  triggerEvent: PropTypes.oneOfType([
    PropTypes.oneOf(['onHover', 'onClick']),
    PropTypes.arrayOf(PropTypes.oneOf(['onHover', 'onClick']))
  ]),
  overlayPosition: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  caret: PropTypes.bool,
  popoverClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

TriggerWrapper.defaultProps = {
  className: '',
  children: []
};

TriggerWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

export default AvatarWithPopover;

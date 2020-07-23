import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

class ProgressUnit extends Component {
  static buildTooltip(text, percent) {
    return (
      <Tooltip id={Math.random()}>{`${text} (${Math.round(
        percent
      )}%)`}</Tooltip>
    );
  }

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    filterLink: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { percent, color, className, name, filterLink } = this.props;
    const classes = cx(['progress__unit', className]);
    const style = { width: `${percent}%` };
    const tooltip = ProgressUnit.buildTooltip(name, percent);

    if (color !== '') {
      style.backgroundColor = color;
    }

    return (
      <OverlayTrigger placement="top" overlay={tooltip} delayShow={100}>
        <a href={filterLink} className={classes} style={style}>
          <div title={name} />
        </a>
      </OverlayTrigger>
    );
  }
}

export default ProgressUnit;

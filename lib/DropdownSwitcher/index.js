import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Dropdown, Overlay, Popover } from 'react-bootstrap';
import CustomToggle from './CustomToggle';
import Icon from '../Icon';

class DropdownSwitcher extends Component {
  state = {
    show: false
  };

  popover() {
    const togglePopover = () =>
      this.setState(prevState => ({ show: !prevState.show }));

    const onHide = () => {
      this.setState({ show: false });
    };

    const classes = cx('button button--clear', {
      'is-active': this.state.show
    });

    return (
      <div className="dropdown-switcher">
        <button
          type="button"
          className={classes}
          onClick={togglePopover}
          ref={target => {
            this.target = target;
          }}
        >
          <span className="dropdown-switcher__title">{this.renderTitle()}</span>
        </button>
        <Overlay
          show={this.state.show}
          onHide={onHide}
          target={this.target}
          placement="bottom"
          rootClose
        >
          <Popover id={this.props.id} className="popover-dropdown">
            {this.props.children}
          </Popover>
        </Overlay>
      </div>
    );
  }

  dropdown() {
    return (
      <Dropdown className="dropdown-switcher" id={this.props.id}>
        <CustomToggle bsRole="toggle">
          <span className="dropdown-switcher__title">{this.renderTitle()}</span>
        </CustomToggle>
        {this.props.menu}
      </Dropdown>
    );
  }

  addCaretToEndOfChildren(caret) {
    const { title } = this.props;
    const { children } = title.props;
    const total = React.Children.count(children) - 1;

    return React.Children.map(children, (child, key) => {
      const lastChild = total === key;

      if (lastChild) {
        return [child, caret];
      }

      return child;
    });
  }

  renderTitle() {
    const caret = (
      <span className="dropdown-switcher__caret">
        <Icon name="caret" />
      </span>
    );

    if (typeof this.props.title === 'string') {
      return (
        <h3 className="dropdown-switcher__header">
          {this.props.title}
          {caret}
        </h3>
      );
    }

    const { title } = this.props;
    return React.cloneElement(
      title,
      title.props,
      this.addCaretToEndOfChildren(caret)
    );
  }

  render() {
    if (this.props.menu) {
      return this.dropdown();
    }

    return this.popover();
  }
}

DropdownSwitcher.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  id: PropTypes.string.isRequired,
  menu: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

DropdownSwitcher.defaultProps = {
  menu: '',
  children: []
};

export default DropdownSwitcher;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import cx from 'classnames';

class TopBar extends Component {
  constructor() {
    super();

    this.state = {
      initialPostion: 0,
      scrollFixed: false
    };
  }

  componentDidMount = () => {
    if (this.props.scrollToFixed) {
      window.addEventListener('scroll', this.handleScroll);
      this.setState({
        initialPostion:
          this.topbar.getBoundingClientRect().top + window.pageYOffset
      });
    }
  };

  componentWillUnmount = () => {
    if (this.props.scrollToFixed) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

  handleScroll = () => {
    const topBarPosition = this.topbar.getBoundingClientRect().top;
    if (topBarPosition <= 0 && !this.state.scrollFixed) {
      this.setState({ scrollFixed: true });
    }
    if (
      window.pageYOffset < this.state.initialPostion &&
      this.state.scrollFixed
    ) {
      this.setState({ scrollFixed: false });
    }
  };

  render() {
    const wrapperClasses = cx('top-bar__wrapper', {
      shadow: this.props.shadow,
      'top-bar__wrapper--fixed': this.props.fixed || this.state.scrollFixed
    });

    const classes = cx(`top-bar ${this.props.className}`, {
      'top-bar--dark': this.props.useDarkTheme,
      'top-bar--has-notification': this.props.notification
    });
    return (
      <Grid className={classes} fluid>
        <div
          className={wrapperClasses}
          ref={node => {
            this.topbar = node;
          }}
        >
          <Fragment>
            {this.props.notification}
            <Row className="top-bar__inner">{this.props.children}</Row>
          </Fragment>
        </div>
      </Grid>
    );
  }
}

TopBar.propTypes = {
  fixed: PropTypes.bool,
  scrollToFixed: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  useDarkTheme: PropTypes.bool,
  className: PropTypes.string,
  notification: PropTypes.node,
  shadow: PropTypes.bool
};

TopBar.defaultProps = {
  fixed: false,
  scrollToFixed: false,
  useDarkTheme: false,
  children: [],
  className: '',
  notification: null,
  shadow: true
};

export default TopBar;
